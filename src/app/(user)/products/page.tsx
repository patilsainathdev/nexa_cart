"use client";

import React, { useEffect, useState } from "react";
import { SlidersHorizontal, ArrowUpDown, Plus } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import productService from "@/services/products/product-service";
import { Product } from "@/types/products";
import {
  fetchProductsStart,
  fetchProductsFailure,
  fetchProductsSuccess,
} from "@/store/slice/ProductSlice";
import ProductCard from "@/components/shared/ProductCard";

// Explicit sort type choices
type SortMode = "none" | "price-asc" | "price-desc";

export default function AllProductsPage() {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // 1. Define local sorting state
  const [sortMode, setSortMode] = useState<SortMode>("none");

  const category = [
    ...new Set(items.map((p) => p.category?.trim()).filter(Boolean)),
  ];

  // 2. Step A: Filter by Category
  const filteredItems =
    selectedCategory.toLowerCase() === "all"
      ? items
      : items.filter((c) =>
          c.category?.toLowerCase().includes(selectedCategory.toLowerCase()),
        );

  // 3. Step B: Sort the filtered collection
  const displayedItems = [...filteredItems].sort((a, b) => {
    if (sortMode === "price-asc") return a.price - b.price;
    if (sortMode === "price-desc") return b.price - a.price;
    return 0; // "none" pattern returns fallback ordering unmodified
  });

  // Cycle ordering state handler onClick
  const handleSortCycle = () => {
    setSortMode((prev) => {
      if (prev === "none") return "price-asc";
      if (prev === "price-asc") return "price-desc";
      return "none";
    });
  };

  useEffect(() => {
    if (!items.length) {
      const fetchProduct = async () => {
        try {
          dispatch(fetchProductsStart());
          const response: any = await productService.getProductList();
          dispatch(fetchProductsSuccess(response.data));
        } catch (err) {
          console.error(err);
          dispatch(fetchProductsFailure(err));
        }
      };
      fetchProduct();
    }
  }, [dispatch, items.length]);

  return (
    <div className="w-full bg-[#030303] text-[#F4F4F5] min-h-screen py-16 px-8 border-b border-zinc-900 font-mono">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Title Index Row */}
        <div className="border-b border-zinc-900 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-[10px] text-zinc-600 tracking-[0.3em] block">
              // HARDWARE SELECTION MATRIX
            </span>
            <h1 className="text-4xl font-light uppercase tracking-tight text-white mt-2">
              All Products
            </h1>
          </div>
          <span className="text-xs text-zinc-500">
            INDEXED METRICS // {displayedItems.length} ENTRIES
          </span>
        </div>

        {/* Filters and Utility Strip */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-zinc-900 pb-6 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            {!loading && (
              <button
                onClick={() => setSelectedCategory("all")}
                className={`cursor-pointer h-9 px-4 uppercase text-[10px] tracking-widest border transition-all hover:bg-white hover:text-black ${
                  selectedCategory === "all"
                    ? "bg-white text-black border-white"
                    : "border-zinc-900 text-zinc-400 hover:border-zinc-700"
                }`}
              >
                ALL CATEGORY
              </button>
            )}
            {category.map((tag, idx) => (
              <button
                onClick={() => setSelectedCategory(tag.toLowerCase())}
                key={idx}
                className={`cursor-pointer h-9 px-4 uppercase text-[10px] tracking-widest border transition-all hover:bg-white hover:text-black ${
                  selectedCategory === tag.toLowerCase()
                    ? "bg-white text-black border-white"
                    : "border-zinc-900 text-zinc-400 hover:border-zinc-700"
                }`}
              >
                {tag.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-zinc-900 pt-4 md:pt-0">
            <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <SlidersHorizontal className="h-3.5 w-3.5" /> FILTER
            </button>

            {/* Sorting Interactive Control Button */}
            <button
              onClick={handleSortCycle}
              className={`flex items-center gap-2 transition-colors uppercase font-bold tracking-wider ${
                sortMode !== "none"
                  ? "text-indigo-400 hover:text-indigo-300"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <ArrowUpDown className="h-3.5 w-3.5" />
              SORT // PRICE:{" "}
              {sortMode === "none"
                ? "DEFAULT"
                : sortMode === "price-asc"
                  ? "LOW TO HIGH"
                  : "HIGH TO LOW"}
            </button>
          </div>
        </div>

        {/* Production Product Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && <div className="text-white">Product Data Loading...</div>}
          {!loading && displayedItems.length === 0 && (
            <div className="text-zinc-500 text-xs">
              NO ASSETS MATCHING CURRENT MATRIX SELECTION CELL BUFFER...
            </div>
          )}
          {displayedItems.map((item, index) => (
            <ProductCard productData={item} key={item._id} id={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
