// server/api/donations/verify.post.ts
import { getFirestore } from 'firebase-admin/firestore';
import { createError, defineEventHandler, readBody } from 'h3';
import { useRuntimeConfig } from 'nuxt/app';

interface VerifyRequest {
  reference: string;
}

interface PaystackVerifyResponse {
  status: boolean;
  message: string;
  data: {
    status: string;
    reference: string;
    amount: number;
    currency: string;
    customer: {
      email: string;
    };
    metadata: {
      name: string;
      project: string;
    };
  };
}

// Get Firestore instance
const db = getFirestore();

async function updateDonationStatus(data: { reference: string; status: string }) {
  try {
    // Query for the donation with the matching reference
    const donationsRef = db.collection('donations');
    const snapshot = await donationsRef.where('reference', '==', data.reference).get();
    
    if (snapshot.empty) {
      console.log('No matching donation found');
      return false;
    }
    
    // Update the first matching document
    // (there should only be one with this reference)
    const docId = snapshot.docs[0].id;
    await donationsRef.doc(docId).update({
      paymentStatus: data.status,
      updatedAt: new Date()
    });
    
    return true;
  } catch (error) {
    console.error('Error updating donation status:', error);
    throw new Error('Failed to update donation status');
  }
}

async function sendThankYouEmail(data: {
  email: string;
  name: string;
  amount: number;
  currency: string;
  project: string;
}) {
  try {
    // Implement your email sending logic here
    // You can use services like SendGrid, Mailgun, etc.
    console.log(`Sending thank you email to ${data.email}`);
    
    // Example implementation:
    // const emailSent = await emailService.send({
    //   to: data.email,
    //   subject: 'Thank You for Your Donation',
    //   template: 'donation-thank-you',
    //   data: {
    //     name: data.name,
    //     amount: data.amount,
    //     currency: data.currency,
    //     project: data.project
    //   }
    // });
    
    return true;
  } catch (error) {
    console.error('Error sending thank you email:', error);
    return false;
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  try {
    // Verify transaction with Paystack
    const response = await $fetch(
      `https://api.paystack.co/transaction/verify/${body.reference}`,
      {
        headers: {
          'Authorization': `Bearer ${config.paystackSecretKey}`
        }
      }
    );

    if (response.data.status === 'success') {
      // Update donation in Firestore
      await updateDonationStatus({
        reference: body.reference,
        status: 'completed'
      });

      // Send thank you email
      await sendThankYouEmail({
        email: response.data.customer.email,
        name: response.data.metadata.name,
        amount: response.data.amount / 100,
        currency: response.data.currency,
        project: response.data.metadata.project
      });
    }

    return response.data;

  } catch (error) {
    console.error('Paystack verification error:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to verify payment'
    });
  }
});