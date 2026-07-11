import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
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
    const authResponse = await auth.api.signInEmail({
      body: { email, password },
      headers: request.headers,
      asResponse: true,
    });

    // const setCookieHeader = authResponse.headers.get("set-cookie");

    // if (!authResponse.ok || !setCookieHeader) {
    //   return NextResponse.json(
    //     {
    //       message: "AUTH FAULT : INVALID CREDENTIALS",
    //     },
    //     {
    //       status: 401,
    //     },
    //   );
    // }

    const nextResponse = NextResponse.json(
      {
        success: true,
        message: "TRANSACTION_RESOLVED // BETTER_AUTH_SESSION_GRANTED",
      },
      { status: 200 },
    );
    // nextResponse.headers.set("set-cookie", setCookieHeader);

    return nextResponse;

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "AUTH_FAILED";
    return NextResponse.json(
      { success: false, error: message },
      { status: 401 },
    );
  }
}
