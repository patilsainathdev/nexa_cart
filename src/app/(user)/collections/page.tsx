import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const COLLECTIONS_MATRIX = [
  { code: "MTX-001", name: "CYBER AUDIO SYSTEM COMPONENTS", items: "14 Pieces", type: "Core Lab Series", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200", grid: "md:col-span-2" },
  { code: "MTX-002", name: "SOLID STATE METRIC ACCESSORIES", items: "08 Pieces", type: "Studio Minimal", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200", grid: "md:col-span-1" },
  { code: "MTX-003", name: "TACTILE CONTROL INTERFACES", items: "19 Pieces", type: "Input Dev Matrix", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200", grid: "md:col-span-1" },
  { code: "MTX-004", name: "OPTICAL FIELD PANORAMICS", items: "04 Pieces", type: "Display Cluster", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200", grid: "md:col-span-2" },
];

export default function CollectionsPage() {
  return (
    <div className="w-full bg-[#030303] text-[#F4F4F5] min-h-screen py-16 px-8 border-b border-zinc-900 font-mono">
      <div className="mx-auto max-w-7xl space-y-16">
        
        {/* Section Header */}
        <div className="border-b border-zinc-900 pb-8">
          <span className="text-[10px] text-zinc-600 tracking-[0.3em] block">// LUXURY CONFIGURATION DIRECTORY</span>
          <h1 className="text-4xl font-light uppercase tracking-tight text-white mt-2">SYSTEM ARCHIVES</h1>
        </div>

        {/* Asymmetrical Matrix Mapping Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLLECTIONS_MATRIX.map((col, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden aspect-[16/10] bg-zinc-950 border border-zinc-900 transition-all duration-500 hover:border-zinc-700 ${col.grid}`}
            >
              {/* Image Layer Rendering */}
              <img 
                src={col.img} 
                alt={col.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale transition duration-700 group-hover:scale-103 group-hover:grayscale-0 group-hover:opacity-40" 
              />
              
              {/* Conceptual Context Content Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start text-[10px] tracking-wider text-zinc-500 font-bold">
                  <span>[{col.code}]</span>
                  <span>{col.type}</span>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div className="space-y-1 max-w-md">
                    <h3 className="text-white font-bold text-xl tracking-wide uppercase leading-tight">{col.name}</h3>
                    <p className="text-zinc-500 text-[10px] tracking-widest uppercase font-semibold">{col.items}</p>
                  </div>
                  
                  <div className="h-10 w-10 border border-zinc-800 flex items-center justify-center text-white bg-black/80 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 group-hover:bg-white group-hover:text-black group-hover:border-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}