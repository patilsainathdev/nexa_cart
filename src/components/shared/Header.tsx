import React from "react";
import {
  ShoppingBag,
  ArrowUpRight,
  Shield,
  Globe,
  UserKey,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#030303]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 items-center justify-between px-8">
        {/* Brand Core Identity */}
        <div className="flex items-center gap-8 h-full">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-sm font-black tracking-[0.3em] text-white uppercase">
              NEXUS
              <span className="text-zinc-600 group-hover:text-white transition-colors duration-300 font-light tracking-widest ml-1">
                // LABS
              </span>
            </span>
          </Link>

          {/* Spatial Grid Indicator for Layout Syncing */}
          <span className="hidden lg:inline text-[10px] font-mono text-zinc-600 border-l border-zinc-900 pl-8">
            SYS_REF: [04-A]
          </span>
        </div>

        {/* Editorial Navigation Matrix */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-mono tracking-[0.2em] text-zinc-400 uppercase h-full">
          <Link
            href="/products"
            className="hover:text-white transition-colors py-2 relative group"
          >
            All Products
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/collections"
            className="hover:text-white transition-colors py-2 relative group"
          >
            Collections
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/admin/dashboard"
            target="_blank"
            className="text-zinc-600 hover:text-indigo-400 transition-colors py-2 flex items-center gap-1"
          >
            Dashboard <ArrowUpRight className="h-3 w-3" />
          </Link>
        </nav>

        {/* Minimal Utilities & Performance Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-zinc-500 tracking-wider bg-zinc-950/80 border border-zinc-900 px-3 py-1.5 rounded-none">
            <Globe className="h-3 w-3 text-emerald-500" /> TOKYO // NY
          </div>

          {/* Action Trigger Block */}
          <div className="flex items-center border-l border-zinc-900 pl-6 gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-none text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all h-10 w-10 border border-transparent hover:border-zinc-800"
            >
              <ShoppingBag className="h-4 w-4 stroke-[1.5]" />
              <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-none bg-indigo-600 text-[9px] font-mono font-bold text-white shadow-md shadow-indigo-600/20">
                2
              </span>
            </Button>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-zinc-500 tracking-wider bg-zinc-950/80 border border-zinc-900 px-3 py-1.5 rounded-none">
            <Link className="flex gap-2 hover:text-white" href="/login">
              <UserKey className="h-3 w-3 text-emerald-500" /> LOGIN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
