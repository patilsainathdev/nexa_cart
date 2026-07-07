"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Terminal, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authServices } from "@/services/auth/auth-serveice";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!email || !password) {
      setError("Validation Error: All fields are required.");
      return;
    }

    try {
      // const payload = { email, password };
      console.log("dmkald");
      const response = await authServices.login(email, password);
      console.log("login Response", response);
      router.push("/");
    } catch (err: unknown) {
      // console.log('error', (err as Error).error)
      setError((err as Error).error || "Authentication failed.");
    } finally {
      setLoading(false);
      // setError(null);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="w-full bg-[#030303] text-[#F4F4F5] min-h-screen flex items-center justify-center p-8 font-mono">
      <div className="w-full max-w-md border border-zinc-900 bg-[#0A0A0F] p-8 space-y-8 relative">
        {/* Subtle Graphical Layout Anchor */}
        <div className="absolute top-4 right-4 text-zinc-800 text-[10px] select-none">
          [ AUTH_NODE // 01 ]
        </div>

        {/* Identity Headings */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[10px] tracking-widest text-indigo-400 font-bold">
            <Terminal className="h-3.5 w-3.5" /> ENTRY AUTHENTICATION
          </div>
          <h1 className="text-2xl font-light uppercase tracking-tight text-white">
            User Login
          </h1>
        </div>

        {error && (
          <div className="p-3 bg-rose-500/5 border border-rose-500/20 text-rose-400 text-[10px] tracking-wider flex items-center gap-2">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
            <span className="uppercase">{error}</span>
          </div>
        )}

        {/* Credentials Form Structure */}
        <form className="space-y-4" onSubmit={(e) => handleLogin(e)}>
          <div className="space-y-1.5">
            <label className="text-[10px] text-zinc-500 tracking-widest block uppercase font-bold">
              ACCOUNT EMAIL
            </label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
              type="email"
              placeholder="name@domain.xyz"
              className="w-full bg-[#030303] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[10px] text-zinc-500 tracking-widest block uppercase font-bold">
                Password
              </label>
              <a
                href="#"
                className="text-[9px] text-zinc-600 hover:text-zinc-400 uppercase tracking-wider"
              >
                Lost Password?
              </a>
            </div>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
              minLength={8}
              type="password"
              placeholder="••••••••••••"
              className="w-full bg-[#030303] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-widest rounded-none h-11 transition-all group"
            >
              Login{" "}
              <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </form>

        {/* Bottom Shift Matrix Directional Link */}
        <div className="border-t border-zinc-950 pt-4 text-center text-[11px] text-zinc-500">
          Unregistered node?{" "}
          <a
            href="/register"
            className="text-white hover:text-indigo-400 transition-colors underline underline-offset-4"
          >
            Initialize an identity
          </a>
        </div>
      </div>
    </div>
  );
}
