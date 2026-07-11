import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// 🚀 BOTH must be explicitly destructured and exported!
export const { GET, POST } = toNextJsHandler(auth);