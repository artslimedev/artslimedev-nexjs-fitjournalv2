// Next.js App Router API route
// Using Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import { NextResponse } from 'next/server';

export async function GET() {
  // Return the same JSON response as the original API route
  return NextResponse.json({ name: "John Doe" }, { status: 200 });
}

