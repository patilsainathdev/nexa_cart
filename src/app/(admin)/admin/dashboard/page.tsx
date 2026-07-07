import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, BarChart3, Database, Users, Package, RefreshCw } from 'lucide-react';

const ADMIN_METRICS = [
  { title: "TOTAL CORE REVENUE", value: "$142,549.20", trend: "+24.5% ACC", icon: <BarChart3 className="h-4 w-4 text-indigo-400" /> },
  { title: "LOGISTICS ENHANCED VOLUME", value: "3,842", trend: "+12.1% DELIV", icon: <Package className="h-4 w-4 text-indigo-400" /> },
  { title: "ACTIVE MATRIX USERS", value: "849 TERMINALS", trend: "+4.8% REG", icon: <Users className="h-4 w-4 text-indigo-400" /> },
];

const RECENT_ORDERS = [
  { ref: "NXS-9041", timestamp: "03:14:11 UTC", asset: "SOUNDSTAGE H-1", total: "$349.00", status: "SERIALIZED" },
  { ref: "NXS-9040", timestamp: "02:49:55 UTC", asset: "CHRONO MONOLITH", total: "$210.00", status: "IN_TRANSIT" },
  { ref: "NXS-9039", timestamp: "01:12:04 UTC", asset: "OBSIDIAN MATRIX", total: "$175.00", status: "HOLD_SECURE" },
];

export default function AdminDashboardPage() {
  return (
    <div className="w-full bg-[#050507] text-[#E4E4E7] min-h-screen p-8 font-mono">
      <div className="mx-auto max-w-7xl space-y-10">
        
        {/* Dashboard Top Node Navigation Title bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-900 pb-8 gap-4">
          <div>
            <span className="text-[10px] text-zinc-600 tracking-[0.3em] block">// SECURE ADMINISTRATIVE DESK</span>
            <h1 className="text-3xl font-light uppercase tracking-tight text-white mt-1">NEXUS SYSTEM BACKEND</h1>
          </div>
          <div className="flex items-center gap-2 text-[10px] tracking-wider text-emerald-500 bg-emerald-500/5 border border-emerald-500/20 px-3 py-1.5">
            <RefreshCw className="h-3 w-3 animate-spin" /> DATABASE TUNNEL CONCURRENTLY SECURE // 2026
          </div>
        </div>

        {/* Analytical KPI Matrix Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ADMIN_METRICS.map((metric, idx) => (
            <Card key={idx} className="bg-[#0A0A0F] border-zinc-900 rounded-none shadow-none text-[#F4F4F5]">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-950 pb-3">
                  <span className="text-[10px] tracking-widest text-zinc-500 font-bold">{metric.title}</span>
                  {metric.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-white">{metric.value}</div>
                  <p className="text-[10px] text-emerald-500 font-bold mt-1 font-mono">{metric.trend}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logs Matrix System / Recent Database Rows */}
        <div className="border border-zinc-900 bg-[#0A0A0F] p-6 space-y-6">
          <div className="flex justify-between items-center border-b border-zinc-950 pb-4">
            <h3 className="text-xs uppercase tracking-widest text-white font-bold flex items-center gap-2">
              <Database className="h-3.5 w-3.5 text-indigo-400" /> TELEMETRY LOG TRANSACTION BUFFER
            </h3>
            <span className="text-[10px] text-zinc-600">SYS_BUFFER // LIVE</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-zinc-950 text-zinc-600 uppercase text-[10px]">
                  <th className="pb-3 font-bold">ROUTING REF</th>
                  <th className="pb-3 font-bold">METRIC TIME</th>
                  <th className="pb-3 font-bold">ASSET</th>
                  <th className="pb-3 font-bold">TOTAL</th>
                  <th className="pb-3 font-bold text-right">METRIC STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-950/60 font-mono text-zinc-300">
                {RECENT_ORDERS.map((order, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 font-bold text-white">{order.ref}</td>
                    <td className="py-4 text-zinc-500">{order.timestamp}</td>
                    <td className="py-4 uppercase text-zinc-400">{order.asset}</td>
                    <td className="py-4 text-white font-bold">{order.total}</td>
                    <td className="py-4 text-right">
                      <span className={`text-[10px] font-bold px-2 py-0.5 border ${
                        order.status === 'SERIALIZED' 
                          ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/20' 
                          : order.status === 'IN_TRANSIT' 
                          ? 'bg-indigo-500/5 text-indigo-400 border-indigo-500/20' 
                          : 'bg-amber-500/5 text-amber-400 border-amber-500/20'
                      }`}>
                        {order.status}
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