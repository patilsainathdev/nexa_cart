
import React from 'react';
import { ShieldCheck, CreditCard, Lock, ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  return (
    <div className="w-full bg-[#030303] text-[#F4F4F5] min-h-screen py-16 px-8 border-b border-zinc-900 font-mono">
      <div className="mx-auto max-w-7xl">
        
        {/* Module Title Banner */}
        <div className="border-b border-zinc-900 pb-8 mb-12">
          <span className="text-[10px] text-zinc-600 tracking-[0.3em] block">// SECURE GATEWAY PIPELINE</span>
          <h1 className="text-4xl font-light uppercase tracking-tight text-white mt-2">SECURE CHECKOUT</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Dispatch & Payment Parameters */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Phase 01: Shipping Identification */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                <span className="text-zinc-600 font-mono">[01]</span> DISPATCH DESTINATION
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="FIRST NAME" className="w-full bg-[#0A0A0F] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors" />
                <input type="text" placeholder="LAST NAME" className="w-full bg-[#0A0A0F] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors" />
                <input type="text" placeholder="ADDRESS LINE" className="sm:col-span-2 w-full bg-[#0A0A0F] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors" />
                <input type="text" placeholder="CITY" className="w-full bg-[#0A0A0F] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors" />
                <input type="text" placeholder="POSTAL CODE" className="w-full bg-[#0A0A0F] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>
            </div>

            {/* Phase 02: Encryption Payment System */}
            <div className="space-y-4 pt-4 border-t border-zinc-950">
              <h2 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                <span className="text-zinc-600 font-mono">[02]</span> PAYMENT GATEWAY CREDENTIALS
              </h2>
              
              <div className="bg-[#0A0A0F] border border-zinc-900 p-4 flex items-center justify-between text-xs mb-4">
                <span className="flex items-center gap-3 text-zinc-300">
                  <CreditCard className="h-4 w-4 text-indigo-400" /> CREDIT OR DEBIT CARD
                </span>
                <span className="text-[9px] text-zinc-600 tracking-wider">STRIPE COMPLIANT</span>
              </div>

              <div className="space-y-4">
                <input type="text" placeholder="CARD NUMBER" className="w-full bg-[#0A0A0F] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="EXPIRY MM/YY" className="w-full bg-[#0A0A0F] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors" />
                  <input type="text" placeholder="SECURITY CVC" className="w-full bg-[#0A0A0F] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors" />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Order Manifest Audit */}
          <div className="lg:col-span-5 border border-zinc-900 bg-[#0A0A0F] p-6 space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white border-b border-zinc-950 pb-4">
              // RECAPITULATION MANIFEST
            </h2>

            {/* Dynamic Summary Rows */}
            <div className="space-y-3 text-xs tracking-wide border-b border-zinc-950 pb-4">
              <div className="flex justify-between text-zinc-400">
                <span>MANIFEST ITEMS (3 UNITS)</span>
                <span className="text-white font-bold">$769.00</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>GLOBAL PRIORITIZED ROUTING</span>
                <span className="text-emerald-400 font-sans text-[11px] tracking-widest font-bold">COMPLIMENTARY</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>REGIONAL ESTIMATED TAX</span>
                <span className="text-white font-bold">$0.00</span>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-zinc-400 font-bold">FINALIZED SYSTEM CHARGE</span>
              <span className="text-white font-black">${(769.00).toFixed(2)}</span>
            </div>

            {/* Authorization Action Block */}
            <div className="pt-2">
              <Button className="w-full bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-widest rounded-none h-12 transition-all group">
                <Lock className="mr-2 h-3.5 w-3.5" /> AUTHORIZE TRANSACTION <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Integrity Notice Frame */}
            <div className="border-t border-zinc-950 pt-4 flex items-start gap-2.5 text-[10px] text-zinc-600 leading-relaxed font-sans font-light">
              <ShieldCheck className="h-4 w-4 text-indigo-500 shrink-0" />
              <p>
                Advanced cryptography enforces safe transfer boundaries. Verification checks matching standard banking profiles execute concurrently upon submission.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}