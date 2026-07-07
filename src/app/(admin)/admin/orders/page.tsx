import React from 'react';
import { ShieldCheck, Truck, Clock, Eye, FileText, ArrowDownRight } from 'lucide-react';

const ORDER_REGISTRY = [
  { id: "NXS-9041", date: "2026.07.04", account: "alois.r@matrix.xyz", value: "$349.00", items: "1x SOUNDSTAGE H-1", method: "STRIPE_TOKEN", gateway: "VERIFIED" },
  { id: "NXS-9040", date: "2026.07.03", account: "klaus.h@labs.dev", value: "$420.00", items: "2x CHRONO MONOLITH", method: "APPLE_PAY", gateway: "VERIFIED" },
  { id: "NXS-9039", date: "2026.07.03", account: "yuki.s@neotokyo.jp", value: "$175.00", items: "1x OBSIDIAN MATRIX", method: "STRIPE_TOKEN", gateway: "REVIEW_HOLD" },
  { id: "NXS-9038", date: "2026.07.01", account: "marcus.v@cyber.io", value: "$1,160.00", items: "2x PANORAMIC VUE", method: "STRIPE_TOKEN", gateway: "VERIFIED" },
  { id: "NXS-9037", date: "2026.06.29", account: "helena.b@design.co", value: "$125.00", items: "1x TITAN MODULAR", method: "PAYPAL_SECURE", gateway: "DISPATCHED" },
];

export default function OrderRegistryPage() {
  return (
    <div className="w-full bg-[#050507] text-[#E4E4E7] min-h-screen p-8 font-mono">
      <div className="mx-auto max-w-7xl space-y-10">
        
        {/* Module Title Matrix Banner */}
        <div className="border-b border-zinc-900 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-[10px] text-zinc-600 tracking-[0.3em] block">// REAL-TIME ROUTING TRACKER</span>
            <h1 className="text-3xl font-light uppercase tracking-tight text-white mt-1">Order Registry</h1>
          </div>
          <span className="text-xs text-zinc-500 font-mono">CONCURRENT TRANSACTION BUFFERS // SECURE</span>
        </div>

        {/* Global Registry Log Matrix */}
        <div className="border border-zinc-900 bg-[#0A0A0F] p-6 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-zinc-500 border-b border-zinc-950 pb-4 gap-2">
            <span className="uppercase tracking-widest font-bold">// SECURE LEDGER PIPELINE</span>
            <span>TOTAL ENCRYPTED TRANSACTIONS: {ORDER_REGISTRY.length}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-zinc-950 text-zinc-600 uppercase text-[10px] pb-3">
                  <th className="pb-4 font-bold">REGISTRY LOG REF</th>
                  <th className="pb-4 font-bold">TIMESTAMP</th>
                  <th className="pb-4 font-bold">ROUTING ENDPOINT</th>
                  <th className="pb-4 font-bold">MANIFEST METRIC</th>
                  <th className="pb-4 font-bold">VALUATION</th>
                  <th className="pb-4 font-bold text-right">GATEWAY LEVEL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-950/60 text-zinc-300 font-mono">
                {ORDER_REGISTRY.map((order, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/20 transition-colors group">
                    <td className="py-4 font-bold text-white flex items-center gap-2">
                      <FileText className="h-3.5 w-3.5 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
                      {order.id}
                    </td>
                    <td className="py-4 text-zinc-500">{order.date}</td>
                    <td className="py-4 font-sans text-zinc-400">{order.account}</td>
                    <td className="py-4 uppercase text-zinc-400 font-sans tracking-wide text-[11px]">{order.items}</td>
                    <td className="py-4 text-white font-bold">{order.value}</td>
                    <td className="py-4 text-right">
                      <span className={`text-[9px] font-bold px-2 py-0.5 border ${
                        order.gateway === 'VERIFIED' 
                          ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/20' 
                          : order.gateway === 'DISPATCHED' 
                          ? 'bg-indigo-500/5 text-indigo-400 border-indigo-500/20' 
                          : 'bg-amber-500/5 text-amber-400 border-amber-500/20'
                      }`}>
                        {order.gateway}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}