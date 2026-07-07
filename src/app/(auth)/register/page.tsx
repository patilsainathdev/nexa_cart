"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";
import { authServices } from "@/services/auth/auth-serveice";

export default function RegisterPage() {
  // const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if(!name || !email || !password){
      setError("Validation Error: All fields are required.");
      return;
    }

    try {
      // const payload = { email, password };
      const response = await authServices.register(name, email, password);
      console.log("register Response", response);
      // router.push("/");
    } catch (err: unknown) {
      setError((err as Error).message || "Registration failed.");
    } finally {
      setLoading(false);
      setError(null);
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="w-full bg-[#030303] text-[#F4F4F5] min-h-screen flex items-center justify-center p-8 font-mono">
      <div className="w-full max-w-md border border-zinc-900 bg-[#0A0A0F] p-8 space-y-8 relative">
        {/* Subtle Graphical Layout Anchor */}
        <div className="absolute top-4 right-4 text-zinc-800 text-[10px] select-none">
          [ AUTH_NODE // 02 ]
        </div>

        {/* Identity Headings */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[10px] tracking-widest text-indigo-400 font-bold">
            <ShieldCheck className="h-3.5 w-3.5" /> MATRIX SYSTEM PROVISION
          </div>
          <h1 className="text-2xl font-light uppercase tracking-tight text-white">
            User Register
          </h1>
        </div>

        {error && (
          <div className="p-3 bg-rose-500/5 border border-rose-500/20 text-rose-400 text-[10px] tracking-wider flex items-center gap-2">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
            <span className="uppercase">{error}</span>
          </div>
        )}

        {/* Registration Form Structure */}
        <form className="space-y-4" onSubmit={(e) => handleRegister(e)}>
          <div className="space-y-1.5">
            <label className="text-[10px] text-zinc-500 tracking-widest block uppercase font-bold">
              OPERATOR IDENTIFICATION
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              required
              type="text"
              placeholder="ALEX_CORE_01"
              className="w-full bg-[#030303] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] text-zinc-500 tracking-widest block uppercase font-bold">
              DESIRED ROUTING EMAIL
            </label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
              type="email"
              placeholder="operator@domain.io"
              className="w-full bg-[#030303] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] text-zinc-500 tracking-widest block uppercase font-bold">
              SECURE PASSPHRASE MATRIC
            </label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
              type="password"
              placeholder="MINIMUM 8 PARAMETERS"
              minLength={8}
              className="w-full bg-[#030303] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Core Terms Node Selection Ticker */}
          <div className="flex items-start gap-3 pt-2 text-[10px] text-zinc-500 leading-normal font-sans font-light">
            <input
              type="checkbox"
              className="mt-0.5 rounded-none border-zinc-800 bg-zinc-950 text-indigo-600 focus:ring-0 checked:bg-indigo-600"
            />
            <p>
              I authorize server ledger calculations to manage my telemetry data
              parameters under policy rules.
            </p>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-widest rounded-none h-11 transition-all group"
            >
              PROVISION SYSTEM KEY{" "}
              <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </form>

        {/* Bottom Shift Matrix Directional Link */}
        <div className="border-t border-zinc-950 pt-4 text-center text-[11px] text-zinc-500">
          Already verified?{" "}
          <a
            href="/login"
            className="text-white hover:text-indigo-400 transition-colors underline underline-offset-4"
          >
            Decrypt session
          </a>
        </div>
      </div>
    </div>
  );
}
