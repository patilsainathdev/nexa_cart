import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-[#030303] text-zinc-400 font-mono text-xs">
      <div className="mx-auto max-w-7xl px-8 py-20">
        
        {/* Main Columns Directory */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 border-b border-zinc-900 pb-16">
          
          {/* Identity Matrix Block */}
          <div className="space-y-4">
            <span className="text-sm font-black tracking-[0.3em] text-white">
              NEXUS<span className="text-zinc-600 font-light tracking-widest ml-1">// SYSTEM</span>
            </span>
            <p className="text-[11px] font-sans text-zinc-500 leading-relaxed max-w-xs font-light">
              An uncompromised aesthetic study of workspace modular items optimized around structural clarity.
            </p>
          </div>

          {/* Matrix Direct Links Column A */}
          <div className="space-y-4">
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-600 font-bold">// ARCHIVE DIRECTORY</h3>
            <ul className="space-y-2.5 text-[11px] uppercase tracking-wider">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">Acoustic Over-Ear <ArrowUpRight className="h-3 w-3 opacity-30" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">Chrono Hardware <ArrowUpRight className="h-3 w-3 opacity-30" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">Tactile Modules <ArrowUpRight className="h-3 w-3 opacity-30" /></a></li>
            </ul>
          </div>

          {/* Matrix Direct Links Column B */}
          <div className="space-y-4">
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-600 font-bold">// PLATFORM INTEGRITY</h3>
            <ul className="space-y-2.5 text-[11px] uppercase tracking-wider">
              <li><a href="#" className="hover:text-white transition-colors">Trace Logistics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Server telemetry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Node encryption</a></li>
            </ul>
          </div>

          {/* Core Configuration Parameters Info Block */}
          <div className="space-y-4">
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-600 font-bold">// DISPATCH DATA</h3>
            <p className="text-[11px] font-sans text-zinc-500 font-light leading-relaxed">
              Standard operating telemetry executes routing globally to authorized terminals within hours of authorization confirmation.
            </p>
          </div>

        </div>

        {/* Structural Sub-Footer Block */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] text-zinc-600 tracking-widest">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span>&copy; {new Date().getFullYear()} NEXUS_LABS INC. ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline text-zinc-800">|</span>
            <span className="text-zinc-500">LATENCY_OK: 24MS</span>
          </div>
          
          <div className="flex gap-6 uppercase">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Encryption</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Operations</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}