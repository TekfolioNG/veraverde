// server/api/donations/verify.post.ts
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
      phone?: string;
    };
  };
}

export default defineEventHandler(async (event) => {
  const body = await readBody<VerifyRequest>(event);
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
      // Extract donation details
      const donationDetails = {
        reference: response.data.reference,
        name: response.data.metadata.name,
        email: response.data.customer.email,
        phone: response.data.metadata.phone || 'Not provided',
        amount: response.data.amount / 100, // Convert from kobo/cents
        currency: response.data.currency,
        project: response.data.metadata.project,
        status: 'Completed'
      };
      
      // Send notification email to admin
      await $fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: {
          access_key: config.web3formsKey,
          subject: `Donation Completed: ${donationDetails.name} - ${donationDetails.currency} ${donationDetails.amount}`,
          from_name: 'The OakTree Empowerment Initiative',
          donation_reference: donationDetails.reference,
          name: donationDetails.name,
          email: donationDetails.email,
          phone: donationDetails.phone,
          project: donationDetails.project,
          currency: donationDetails.currency,
          amount: donationDetails.amount,
          status: donationDetails.status,
          message: `A donation of ${donationDetails.currency} ${donationDetails.amount} has been completed for the ${donationDetails.project} project.\n\nDonor Details:\nName: ${donationDetails.name}\nEmail: ${donationDetails.email}\nPhone: ${donationDetails.phone}\nReference: ${donationDetails.reference}`,
        },
      });
      
      // Send thank you email to donor
      await $fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: {
          access_key: config.web3formsKey,
          subject: 'Thank You for Your Donation',
          from_name: 'The OakTree Empowerment Initiative',
          to_email: donationDetails.email,
          donation_reference: donationDetails.reference,
          name: donationDetails.name,
          project: donationDetails.project,
          currency: donationDetails.currency,
          amount: donationDetails.amount,
          message: `Dear ${donationDetails.name},\n\nThank you for your generous donation of ${donationDetails.currency} ${donationDetails.amount} to support our ${donationDetails.project} project. Your contribution helps us make a difference!\n\nDonation Reference: ${donationDetails.reference}\n\nWe deeply appreciate your support.\n\nBest regards,\nThe OakTree Empowerment Initiative Team`,
        },
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