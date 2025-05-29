'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function VerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState('loading');
  const token = searchParams.get('token');

  useEffect(() => {
    // If no token is provided, redirect to error page
    if (!token) {
      router.push('/auth/error?error=Verification');
      return;
    }

    // Here you would verify the token with your API
    // This is a placeholder for the verification logic
    async function verifyToken() {
      try {
        // Simulate verification - in a real app, you'd make an API call
        setTimeout(() => {
          // Simulate successful verification
          setStatus('success');
          
          // Redirect to dashboard after successful verification
          setTimeout(() => {
            router.push('/dashboard');
          }, 3000);
        }, 1500);
      } catch (error) {
        console.error('Verification error:', error);
        setStatus('error');
      }
    }

    verifyToken();
  }, [token, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Verifying your email</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
          <p className="text-center mt-4 text-gray-600">Please wait while we verify your email...</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4 text-red-600">Verification Failed</h2>
          <p className="text-center mb-6 text-gray-600">
            We couldn't verify your email. The link might have expired or is invalid.
          </p>
          <div className="flex justify-center">
            <Link
              href="/auth/signin"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Try Again
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-green-600">Email Verified!</h2>
        <p className="text-center mb-6 text-gray-600">
          Your email has been successfully verified. You'll be redirected to the dashboard shortly.
        </p>
        <div className="flex justify-center">
          <Link
            href="/dashboard"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Verify Email - FitJournal',
  description: 'Verify your email address for FitJournal',
};

