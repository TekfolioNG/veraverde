import { cert, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { defineEventHandler, readBody } from 'h3';

// Initialize Firebase Admin if not already initialized
if (!process.env.FIREBASE_ADMIN_INITIALIZED) {
initializeApp({
    credential: cert({
    projectId: 'toei-ngo',
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
});
process.env.FIREBASE_ADMIN_INITIALIZED = 'true';
}

const db = getFirestore();

// Define types
interface DonationRequest {
email: string;
amount: number;
currency: string;
name: string;
phone?: string;
donationType: string;
project: string;
userId?: string; // Add user ID if authenticated
}

interface PaystackResponse {
status: boolean;
message: string;
data: {
    reference: string;
    access_code: string;
    authorization_url: string;
};
}

async function saveDonationToDatabase(donation: any) {
try {
    const donationsRef = db.collection('donations');
    const docRef = await donationsRef.add({
    ...donation,
    createdAt: new Date(),
    organizationName: 'The OakTree Empowerment Initiative',
    status: 'pending',
    });

    return { id: docRef.id, ...donation };
} catch (error) {
    console.error('Error saving donation:', error);
    throw new Error('Failed to save donation to database');
}
}

export default defineEventHandler(async (event) => {
const body = await readBody<DonationRequest>(event);
const config = useRuntimeConfig();

try {
    // Initialize transaction with Paystack
    const response = await $fetch<PaystackResponse>(
    'https://api.paystack.co/transaction/initialize',
    {
        method: 'POST',
        headers: {
        Authorization: `Bearer ${config.paystackSecretKey}`,
        'Content-Type': 'application/json',
        },
        body: {
        email: body.email,
        amount: body.amount,
        currency: body.currency,
        reference: `TOEI-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        metadata: {
        name: body.name,
        phone: body.phone,
        donation_type: body.donationType,
        project: body.project,
        organization: 'The OakTree Empowerment Initiative',
        },
        },
    }
    );

    // Save donation to Firestore
    await saveDonationToDatabase({
    reference: response.data.reference,
    amount: body.amount,
    currency: body.currency,
    donorName: body.name,
    donorEmail: body.email,
    donorPhone: body.phone,
    donationType: body.donationType,
    project: body.project,
    userId: body.userId, // If user is authenticated
    paymentStatus: 'pending',
    paymentProvider: 'paystack',
    transactionDate: new Date(),
    });

    return response.data;
} catch (error) {
    console.error('Paystack initialization error:', error);
    throw createError({
    statusCode: 500,
    statusMessage: 'Failed to initialize payment',
    });
}
});