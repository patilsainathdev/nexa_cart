import React from 'react';
import { ShieldCheck, HardDrive } from 'lucide-react';

export default function AdminFooter() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-[#050507] text-zinc-500 font-mono text-[10px] tracking-widest">
      <div className="mx-auto px-8 py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Node Operations Status Metadata */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-zinc-600">
            <div className="flex items-center gap-1.5 uppercase">
              <ShieldCheck className="h-3 w-3 text-emerald-500/70" /> END_TO_END ENCRYPTION ACTIVE
            </div>
            <div className="hidden sm:flex items-center gap-1.5 uppercase">
              <HardDrive className="h-3 w-3 text-zinc-700" /> DB_PING: 8.02MS // CLUSTER_A
            </div>
          </div>

          {/* Environmental Matrix & Legal Markers */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-[9px] uppercase text-zinc-500">
            <div>ENV_STATE: <span className="text-indigo-400 font-bold">PRODUCTION_MATRIX</span></div>
            <div className="hidden sm:block text-zinc-800">|</div>
            <div>&copy; {new Date().getFullYear()} NEXUS CORE SYSTEM OPS</div>
          </div>

        </div>

      </div>
    </footer>
  );
}