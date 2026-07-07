// import { betterAuth } from "better-auth";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";
// // import { initializeUserBoard } from "../init-user-board";
// import { connectDataMatrix } from "./db";

// const mongooseInstance = await connectDataMatrix();
// const client = mongooseInstance.connection.getClient();
// const db = client.db();

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     client,
//   }),
//   session: {
//     cookieCache: {
//       enabled: true,
//       maxAge: 60 * 60,
//     },
//   },
//   emailAndPassword: {
//     enabled: true,
//   },
//   // databaseHooks: {
//   //   user: {
//   //     create: {
//   //       after: async (user) => {
//   //         if (user.id) {
//   //           await initializeUserBoard(user.id);
//   //         }
//   //       },
//   //     },
//   //   },
//   // },
// });

// export async function getSession() {
//   const result = await auth.api.getSession({
//     headers: await headers(),
//   });

//   return result;
// }

// export async function signOut() {
//   const result = await auth.api.signOut({
//     headers: await headers(),
//   });

//   if (result.success) {
//     redirect("/sign-in");
//   }
// }

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { nextCookies } from "better-auth/next-js"; // <-- Make sure to import this

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not set in environment");
}

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();
const db = client.db();

export const auth = betterAuth({
  // Use the adapter with a connected Db and the underlying client
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 7, // Cache session for 5 minutes
    },
  },
  plugins: [
        nextCookies() 
    ]
});
