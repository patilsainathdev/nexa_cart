import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
// import connectDataMatrix from "@/lib/db";

export async function POST(request: Request) {
  // const db = await connectDataMatrix();
  //   console.log("db", db)
  //   if (!db) {
  //     throw new Error("DATABASE_CONNECTION_FAILED");
  //   }
  //   console.log(
  //     "// TELEMETRY: DATABASE CONNECTION ESTABLISHED",
  //     db.connection.readyState,
  //   );
  try {
    const { email, password } = await request.json();

    // Call Better-Auth's core sign-in engine programmatically on the server layer
    const sessionResult = await auth.api.signInEmail({
      body: { email, password, callbackURL: "/" },
    });

    return NextResponse.json({ success: true, data: sessionResult }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "AUTH_FAILED";
    return NextResponse.json({ success: false, error: message }, { status: 401 });
  }
}