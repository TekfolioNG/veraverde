// server/api/donations/verify.post.ts
import { defineEventHandler, readBody } from 'h3'

interface VerifyRequest {
reference: string
}

interface PaystackVerifyResponse {
status: boolean
message: string
data: {
    status: string
    reference: string
    amount: number
    currency: string
    customer: {
    email: string
    }
    metadata: {
    name: string
    project: string
    }
}
}

export default defineEventHandler(async (event) => {
const body = await readBody<VerifyRequest>(event)
const config = useRuntimeConfig()

try {
    // Verify transaction with Paystack
    const response = await $fetch<PaystackVerifyResponse>(
    `https://api.paystack.co/transaction/verify/${body.reference}`,
    {
        headers: {
        'Authorization': `Bearer ${config.paystackSecretKey}`
        }
    }
    )

    if (response.data.status === 'success') {
      // Update donation in your database
    await updateDonationStatus({
        reference: body.reference,
        status: 'completed'
    })

      // Send thank you email
    await sendThankYouEmail({
        email: response.data.customer.email,
        name: response.data.metadata.name,
        amount: response.data.amount / 100,
        currency: response.data.currency,
        project: response.data.metadata.project
    })
    }

    return response.data

} catch (error) {
    console.error('Paystack verification error:', error)
    throw createError({
    statusCode: 500,
    statusMessage: 'Failed to verify payment'
    })
}
})

// Example database functions (implement these based on your database choice)
async function saveDonationToDatabase(donation: any) {
  // Implement based on your database choice
  // Example: MongoDB, MySQL, etc.
return donation
}

async function updateDonationStatus(data: { reference: string; status: string }) {
  // Implement based on your database choice
}

async function sendThankYouEmail(data: {
email: string
name: string
amount: number
currency: string
project: string
}) {
  // Implement your email sending logic
}