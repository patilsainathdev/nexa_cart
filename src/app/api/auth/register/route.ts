import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
// import connectDataMatrix from "@/lib/db";

export async function POST(request: Request) {
//   const db = await connectDataMatrix();
//   console.log("db", db)
//   if (!db) {
//     throw new Error("DATABASE_CONNECTION_FAILED");
//   }
//   console.log(
//     "// TELEMETRY: DATABASE CONNECTION ESTABLISHED",
//     db.connection.readyState,
//   );
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password || password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          error: "VALIDATION_FAILED // INVALID_PARAMETERS",
        },
        {
          status: 400,
        },
      );
    }

    const userResult = await auth.api.signUpEmail({
      body: { name, email, password },
    });

    return NextResponse.json(
      { success: true, data: userResult },
      { status: 201 },
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "PROVISION_ERROR";
    return NextResponse.json(
      { success: false, error: message },
      { status: 400 },
    );
  }
}
