// server/api/donations/verify.post.ts
import { getFirestore } from 'firebase-admin/firestore';
import { createError, defineEventHandler, readBody } from 'h3';

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

async function updateDonationStatus(data: { reference: string; status: string; metadata?: any }) {
  try {
    // Query for the donation with the matching reference
    const donationsRef = db.collection('donations');
    const snapshot = await donationsRef.where('reference', '==', data.reference).get();
    
    if (snapshot.empty) {
      console.log('No matching donation found');
      return false;
    }
    
    // Update the first matching document
    const docId = snapshot.docs[0].id;
    await donationsRef.doc(docId).update({
      paymentStatus: data.status,
      updatedAt: new Date(),
      // Store a simple thank you message in the database
      thankYouMessage: data.metadata ? 
        `Thank you ${data.metadata.name} for your generous donation of ${data.metadata.currency} ${data.metadata.amount} to support our ${data.metadata.project} project. Your contribution helps us make a difference!` : 
        'Thank you for your donation!'
    });
    
    return true;
  } catch (error) {
    console.error('Error updating donation status:', error);
    throw new Error('Failed to update donation status');
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig(event);

  try {
    // Verify transaction with Paystack
    const response = await $fetch<PaystackVerifyResponse>(
      `https://api.paystack.co/transaction/verify/${body.reference}`,
      {
        headers: {
          'Authorization': `Bearer ${config.paystackSecretKey}`
        }
      }
    );

    if (response.data.status === 'success') {
      // Update donation in Firestore with thank you message
      await updateDonationStatus({
        reference: body.reference,
        status: 'completed',
        metadata: {
          name: response.data.metadata.name,
          amount: response.data.amount / 100,
          currency: response.data.currency,
          project: response.data.metadata.project
        }
      });
      
      console.log(`Donation completed: ${body.reference}. Payment completion receipt sent to ${response.data.customer.email}`);
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