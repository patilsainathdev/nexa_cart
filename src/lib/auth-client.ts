import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Ensure this is hitting your active Next.js server context setup
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});

export const { signIn, signUp, signOut, useSession } = authClient;

// Call directly from client forms:
// await authClient.signIn.email({ email, password });