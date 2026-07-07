import React from "react";
import { Terminal, ShieldAlert, Cpu, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#050507]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 items-center justify-between px-8">
        {/* Core Auth & System Node Signature */}
        <div className="flex items-center gap-6 h-full">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2.5 group"
          >
            <div className="h-7 w-7 bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Terminal className="h-4 w-4" />
            </div>
            <span className="text-sm font-black tracking-[0.3em] text-white uppercase">
              NEXUS
              <span className="text-zinc-600 font-light tracking-widest ml-1">
                // CONSOLE
              </span>
            </span>
          </Link>

          <span className="hidden xl:inline text-[10px] font-mono text-emerald-500 bg-emerald-500/5 border border-emerald-500/20 px-2.5 py-1">
            SECURE PORT: AUTH_OK
          </span>
        </div>

        {/* Console System Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-[0.2em] text-zinc-400 uppercase h-full">
          <Link
            href="/admin/dashboard"
            className="hover:text-white transition-colors relative py-2 group text-white"
          >
            Dashboard
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-indigo-500" />
          </Link>
          <Link
            href="/admin/products"
            className="hover:text-white transition-colors relative py-2 group"
          >
            Inventory Matrix
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/admin/orders"
            className="hover:text-white transition-colors relative py-2 group"
          >
            Order Registry
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
          </Link>
        </nav>

        {/* Access Utilities & Control Node */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-zinc-500 border border-zinc-900 px-3 py-1.5 bg-zinc-950">
            <Cpu className="h-3 w-3 text-indigo-400" /> CPU: 0.12% // MEM:
            14.2MB
          </div>

          <div className="flex items-center border-l border-zinc-900 pl-4 gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-none text-zinc-500 hover:text-white hover:bg-zinc-900 h-9 w-9 border border-transparent hover:border-zinc-800"
            >
              <Settings className="h-4 w-4" />
            </Button>

            <Link href={"/"} className="cursor-pointer">
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer rounded-none text-zinc-500 hover:text-rose-400 hover:bg-rose-500/5 h-9 w-9 border border-transparent hover:border-rose-950/30"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
