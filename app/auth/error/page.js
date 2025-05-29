'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AuthErrorPage() {
  const router = useRouter();
  const error = router.query?.error || "Unknown error";

  useEffect(() => {
    // Log error for debugging
    console.error(`Authentication error: ${error}`);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            There was a problem with your authentication.
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">
                {error === "Verification" 
                  ? "The verification link has expired or is invalid."
                  : "An error occurred during the authentication process. Please try again."}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link 
            href="/login"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Return to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Authentication Error - FitJournal',
  description: 'Something went wrong with your authentication',
};

