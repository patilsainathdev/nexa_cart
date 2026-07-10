"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Maximize2,
  Plus,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Globe,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import productService from "@/services/products/product-service";
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchCartItemsSuccess
} from "@/store/slice/ProductSlice";
import { Product } from "@/types/products";
import cartServices from "@/services/cart/cart-services";
import ProductCard from "./ProductCard";

const PREMIUM_CATALOG = [
  {
    id: "01",
    category: "ACOUSTICS",
    name: "NEXUS SOUNDSTAGE H-1",
    price: 349.0,
    tag: "Studio Grade",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200",
  },
  {
    id: "02",
    category: "CHRONOMETER",
    name: "CHRONO MONOLITH 40MM",
    price: 210.0,
    tag: "Limited Edition",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200",
  },
  {
    id: "03",
    category: "INTERFACE",
    name: "OBSIDIAN MECHANICAL MATRIC",
    price: 175.0,
    tag: "Tactile",
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200",
  },
  {
    id: "04",
    category: "OPTICS",
    name: "PANORAMIC VUE CURVED 34",
    price: 580.0,
    tag: "Ultra-Wide",
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200",
  },
];

export default function UserHomePage() {
  const dispatch = useAppDispatch();

  const { items } = useAppSelector((state) => state.products);
  // const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // const addToCart = async (id: string) => {
  //   const cartData = {
  //     productId: id,
  //     quantity: 1,
  //   };
  //   const response = await cartServices.updateUserCart(cartData);
  //   console.log("addToCart response", response);
  // };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        dispatch(fetchProductsStart());
        // const response = await productService.getProductList<{
        //   success: boolean;
        //   data: Product[];
        // }>();

        const response: any = await productService.getProductList();

        const cartResponse:any = await cartServices.getUserCart();
        console.log("cartResponse", cartResponse);
        if(cartResponse.data ){
          dispatch(fetchCartItemsSuccess(cartResponse.data.items));
        }
        dispatch(fetchProductsSuccess(response.data));
        // setLoading(false);
      } catch (error) {
        console.error(error);
        dispatch(fetchProductsFailure(error));
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="w-full bg-[#030303] text-[#F4F4F5] min-h-screen antialiased selection:bg-indigo-600 selection:text-white font-sans">
      {/* 1. MASTER HERO: KINETIC ASYMMETRY */}
      <section className="relative min-h-screen flex flex-col justify-between border-b border-zinc-900">
        {/* Subtle Architectural Grid Overlays */}
        <div className="absolute inset-x-0 top-1/4 h-[1px] bg-zinc-950" />
        <div className="absolute left-1/3 top-0 w-[1px] h-full bg-zinc-950 hidden lg:block" />
        <div className="absolute right-1/4 top-0 w-[1px] h-full bg-zinc-950 hidden lg:block" />

        {/* Top Minimal Status Strip */}
        <div className="w-full border-b border-zinc-950 py-6 px-8 flex justify-between items-center text-[10px] tracking-[0.4em] text-zinc-500 font-mono">
          <div>[ NEXUS SYSTEM VER. 4.02 ]</div>
          <div className="hidden sm:block">
            CURATED INDUSTRIAL FRAMEWORKS // ONLINE
          </div>
          <div>SEOUL — TOKYO — NYC</div>
        </div>

        {/* Hero Central Block */}
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 flex-1 items-center py-16 gap-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 text-xs tracking-widest text-indigo-400 font-mono">
              <span>// INITIATE CATALOGUE</span>
              <span className="w-12 h-[1px] bg-indigo-500/50" />
            </div>

            <h1 className="text-6xl sm:text-9xl font-extrabold tracking-tight uppercase leading-[0.8] text-white">
              PURE <br />
              <span className="text-zinc-800">HARDWARE.</span>
            </h1>

            <p className="text-sm font-light text-zinc-400 max-w-md tracking-wide leading-relaxed font-sans">
              An uncompromised aesthetic alignment of technical performance
              metrics and absolute material purity. Engineered without excess.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <Button
                size="lg"
                className="bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-widest rounded-none h-14 px-10 transition-all group"
              >
                Shop The Line{" "}
                <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                href="#collection"
                className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white font-mono transition-colors border-b border-zinc-800 pb-1"
              >
                Explore Studio [04]
              </a>
            </div>
          </div>

          {/* Focal Graphic Display Layer */}
          <div className="lg:col-span-5 relative w-full aspect-square bg-zinc-900/40 border border-zinc-900 p-4 group overflow-hidden">
            <div className="absolute top-6 right-6 z-20 mix-blend-difference text-white">
              <Maximize2 className="h-4 w-4 opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="w-full h-full bg-zinc-950 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 opacity-60" />
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200"
                alt="Nexus Signature Core"
                className="w-full h-full object-cover grayscale transition duration-1000 scale-105 group-hover:scale-100 group-hover:grayscale-0"
              />
            </div>
          </div>
        </div>

        {/* Hero Bottom Telemetry Matrix */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 border-t border-zinc-950 text-[11px] font-mono text-zinc-500 bg-zinc-950/20">
          <div className="p-6 border-r border-zinc-950 flex items-center gap-3">
            <Cpu className="h-4 w-4 text-indigo-500/70" /> [01 / COGNITIVE CHIP]
          </div>
          <div className="p-6 md:border-r border-zinc-950 flex items-center gap-3">
            <ShieldCheck className="h-4 w-4 text-indigo-500/70" /> [02 /
            MUTATION SECURE]
          </div>
          <div className="p-6 border-r border-zinc-950 flex items-center gap-3">
            <Globe className="h-4 w-4 text-indigo-500/70" /> [03 / DISPATCH
            INT.]
          </div>
          <div className="p-6 text-right flex items-center justify-end text-zinc-400">
            AVAILABILITY // 100% OPERATIONAL
          </div>
        </div>
      </section>

      {/* 2. PREMIUM CURATED EXHIBIT: HIGH-END PRODUCT DISPLAY */}
      <section
        id="collection"
        className="py-32 container mx-auto max-w-7xl px-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-900 pb-10 mb-20">
          <div>
            <span className="text-xs font-mono text-zinc-600 tracking-widest block">
              // VOL. 01 SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-4xl font-light tracking-tight text-white mt-3 uppercase">
              The Core Catalogue
            </h2>
          </div>
          <div className="text-xs text-zinc-500 max-w-xs font-light font-mono leading-relaxed mt-4 md:mt-0">
            A precise architectural synthesis of workspace solutions calibrated
            for flawless integration.
          </div>
        </div>

        {/* High-Fidelity Premiu m Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {loading ? (
            <div className="group relative flex flex-col justify-center h-full bg-transparent">
              Loading Product Data...
            </div>
          ) : (
            items
              .slice(0, 4)
              .map((item, index) => (
                <ProductCard productData={item} key={index} id={index} />
              ))
          )}
        </div>
      </section>

      {/* 3. PREMIUM MINIMAL FOOTER BANNER STATEMENT */}
      <section className="border-t border-zinc-950 bg-gradient-to-b from-transparent to-[#09090C] py-28 text-center px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-600 uppercase block">
            Nexus Ecosystem Integrity
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase">
            Elevating The Baseline Experience
          </h2>
          <p className="text-sm text-zinc-500 font-sans font-light leading-relaxed max-w-xl mx-auto">
            Our global components framework ensures modular expansion
            configurations across both regional consumer channels and advanced
            administration modules.
          </p>
        </div>
      </section>
    </div>
  );
}
