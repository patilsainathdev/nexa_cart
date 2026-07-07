// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('SYSTEM ERROR: MONGODB_URI variable missing from environment configuration.');
// }

// /**
//  * Global cache interface to persist connection states across hot-reloads
//  */
// interface MongooseCache {
//   conn: typeof mongoose | null;
//   promise: Promise<typeof mongoose> | null;
// }

// declare global {
//   var mongoose: MongooseCache | undefined;
// }

// let cached: MongooseCache = global.mongoose ?? { conn: null, promise: null };

// if (!cached.conn && !cached.promise) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// export async function connectDataMatrix() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//       dbName: "nexus_app",
//     };
    
//     cached.promise = mongoose.connect(MONGODB_URI!, opts).then((m) => {
//       console.log('// TELEMETRY: MONGO_ATLAS PIPELINE STABLE');
//       return m;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     console.error('// TELEMETRY ERROR: CONNECTION LAYER DEPLETED', e);
//     throw e;
//   }

//   return cached.conn;
// }

import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

declare global {
  var _mongooseClient: Promise<typeof mongoose> | undefined;
}

export default async function connectDataMatrix() {
  // 1. Return existing active connection if already connected
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  // 2. Use cached promise or create a new one to prevent concurrent connections
  if (!global._mongooseClient) {
    global._mongooseClient = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      // dbName: "NexaCart",
    });
  }

  try {
    await global._mongooseClient;
  } catch (error) {
    global._mongooseClient = undefined; // Reset cache on failure
    throw error;
  }
}
