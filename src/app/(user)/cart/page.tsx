import React from 'react';
import { Trash2, Minus, Plus, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CART_ITEMS = [
  { id: "01", name: "NEXUS SOUNDSTAGE H-1", category: "ACOUSTICS", price: 349.00, quantity: 1, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600" },
  { id: "02", name: "CHRONO MONOLITH 40MM", category: "CHRONOMETER", price: 210.00, quantity: 2, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600" },
];

export default function ShoppingCartPage() {
  const subtotal = CART_ITEMS.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 0.00; // Complimentary international dispatch
  const total = subtotal + shipping;

  return (
    <div className="w-full bg-[#030303] text-[#F4F4F5] min-h-screen py-16 px-8 border-b border-zinc-900 font-mono">
      <div className="mx-auto max-w-7xl">
        
        {/* Module Title Banner */}
        <div className="border-b border-zinc-900 pb-8 mb-12">
          <span className="text-[10px] text-zinc-600 tracking-[0.3em] block">// MANIFEST PRE-CHECKOUT</span>
          <h1 className="text-4xl font-light uppercase tracking-tight text-white mt-2">Your Cart</h1>
        </div>

        {/* Dual Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Active Manifest Items */}
          <div className="lg:col-span-8 space-y-6">
            <div className="text-[10px] text-zinc-600 uppercase tracking-widest border-b border-zinc-950 pb-3 hidden md:grid grid-cols-12 gap-4">
              <span className="col-span-6">// ASSET DETAILS</span>
              <span className="col-span-3 text-center">QUANTITY</span>
              <span className="col-span-3 text-right">TOTAL</span>
            </div>

            {CART_ITEMS.map((item) => (
              <div 
                key={item.id} 
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-zinc-950 pb-6 group"
              >
                {/* Product Media & Metadata Info */}
                <div className="col-span-1 md:col-span-6 flex gap-4 items-center">
                  <div className="h-20 w-20 bg-[#0D0D11] border border-zinc-900 p-1 shrink-0 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="space-y-1 truncate">
                    <span className="text-[9px] text-indigo-400 tracking-wider font-bold block">{item.category} // ID_{item.id}</span>
                    <h3 className="text-sm font-semibold tracking-wide text-zinc-200 uppercase truncate group-hover:text-white transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs text-zinc-500 font-light block">${item.price.toFixed(2)} each</span>
                  </div>
                </div>

                {/* Counter Metric Interface */}
                <div className="col-span-1 md:col-span-3 flex justify-start md:justify-center">
                  <div className="flex items-center border border-zinc-900 bg-zinc-950 h-9">
                    <button className="h-full px-3 text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="px-4 text-xs font-bold text-white select-none w-10 text-center">
                      {item.quantity}
                    </span>
                    <button className="h-full px-3 text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* Operations & Row Valuation */}
                <div className="col-span-1 md:col-span-3 flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2">
                  <span className="text-sm font-bold text-white md:order-1 order-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button className="text-zinc-600 hover:text-rose-400 p-2 border border-transparent hover:border-zinc-950 md:order-2 order-1 transition-all">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Right Column: Monolithic Summary Processing Block */}
          <div className="lg:col-span-4 border border-zinc-900 bg-[#0A0A0F] p-6 space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white border-b border-zinc-950 pb-4">
              // VALUATION SUMMARY
            </h2>

            <div className="space-y-3 text-xs tracking-wide">
              <div className="flex justify-between text-zinc-400">
                <span>MANIFEST SUB-TOTAL</span>
                <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-400 items-center">
                <span className="flex items-center gap-1">GLOBAL ROUTING DISPATCH <HelpCircle className="h-3 w-3 text-zinc-600" /></span>
                <span className="text-emerald-400 font-bold font-sans text-[11px] tracking-widest">COMPLIMENTARY</span>
              </div>
              <div className="border-t border-zinc-950 pt-4 mt-2 flex justify-between text-sm">
                <span className="text-zinc-400 font-bold">ESTIMATED TOTAL</span>
                <span className="text-white font-black">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Core Dispatch Actions */}
            <div className="pt-2 space-y-3">
              <Button className="w-full bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-widest rounded-none h-12 transition-all group">
                PROCEED TO LOCKOUT <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a 
                href="/products" 
                className="block text-center text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors py-2"
              >
                [ CONTINUE BROWSING INDEX ]
              </a>
            </div>

            {/* Security Parameters Disclaimer */}
            <div className="border-t border-zinc-950 pt-4 flex items-start gap-2 text-[10px] text-zinc-600 leading-relaxed tracking-normal font-sans font-light">
              <ShieldCheck className="h-4 w-4 text-indigo-500 shrink-0" />
              <p>
                Transactions are systematically verified through tokenized gateways. Structural ledger configurations enforce zero cookie caching.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}