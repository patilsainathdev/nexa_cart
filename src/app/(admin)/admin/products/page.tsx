"use client";

import React, { useEffect, useState } from "react";
import {
  PackagePlus,
  Edit3,
  Trash2,
  Eye,
  Search,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AddProductForm from "@/components/admin/AddProductForm";
import productService from "@/services/products/product-service";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const INVENTORY_MATRIX = [
  {
    sku: "NX-AUD-H1",
    name: "NEXUS SOUNDSTAGE H-1",
    stock: 42,
    threshold: 15,
    price: 349.0,
    status: "IN_STOCK",
  },
  {
    sku: "NX-CHR-40",
    name: "CHRONO MONOLITH 40MM",
    stock: 8,
    threshold: 10,
    price: 210.0,
    status: "LOW_STOCK",
  },
  {
    sku: "NX-KBD-OB",
    name: "OBSIDIAN MECHANICAL MATRIC",
    stock: 112,
    threshold: 20,
    price: 175.0,
    status: "IN_STOCK",
  },
  {
    sku: "NX-OPT-V34",
    name: "PANORAMIC VUE CURVED 34",
    stock: 0,
    threshold: 5,
    price: 580.0,
    status: "DEPLETED",
  },
  {
    sku: "NX-MSE-TTN",
    name: "TITAN SPEC MODULAR MOUSE",
    stock: 65,
    threshold: 15,
    price: 125.0,
    status: "IN_STOCK",
  },
];

interface Product {
  _id: string;
  title: string;
  price: number;
  stock: number;
  category: string;
}

export default function InventoryMatrixPage() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const cleanQuery = searchQuery.toLowerCase().trim();
  const displayedProduct = cleanQuery
    ? productList.filter((product) =>
        product.title.toLowerCase().includes(cleanQuery),
      )
    : productList;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response: any = await productService.getProductList();

        const productsArray = Array.isArray(response)
          ? response
          : response?.data || response?.products || [];

        setProductList(productsArray);
      } catch (error) {
        console.error("Failed to compile product matrix stack:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full bg-[#050507] text-[#E4E4E7] min-h-screen p-8 font-mono">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Module Title Matrix Banner */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-zinc-900 pb-8 gap-4">
          <div>
            <span className="text-[10px] text-zinc-600 tracking-[0.3em] block">
              // HARDWARE ALLOCATION LAYER
            </span>
            <h1 className="text-3xl font-light uppercase tracking-tight text-white mt-1">
              Inventory Matrix
            </h1>
          </div>
          {/* <Button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs tracking-widest rounded-none h-11 px-6 font-bold group">
            <PackagePlus className="mr-2 h-4 w-4" /> ADD NEW ASSET
          </Button> */}
          <AddProductForm />
        </div>

        {/* Searching and Tactical Utility Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div className="md:col-span-3 relative">
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-zinc-600" />
            <Input
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              type="text"
              placeholder="QUERY TARGET ASSET SKU // MATCH IDENTIFIER..."
              className="w-full bg-[#0A0A0F] border border-zinc-900 h-11 pl-12 pr-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          <div className="text-[11px] text-zinc-500 text-right hidden md:block">
            ACTIVE ASSETS STAMPED // {INVENTORY_MATRIX.length}
          </div>
        </div>

        {/* Unified Stock Spreadsheet Element */}
        <div className="border border-zinc-900 bg-[#0A0A0F] p-6">
          <div className="overflow-x-auto">
            <Table className="w-full text-left border-collapse text-xs">
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow className="border-b border-zinc-950 text-indigo-400 uppercase text-[10px] pb-3">
                  <TableHead className="pb-4 font-bold">
                    Product Title
                  </TableHead>
                  <TableHead className="pb-4 font-bold">Price</TableHead>
                  <TableHead className="pb-4 font-bold">Stock</TableHead>
                  <TableHead className="pb-4 font-bold">Category</TableHead>
                  <TableHead className="pb-4 font-bold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center py-8 text-zinc-500 animate-pulse"
                    >
                      Loading Product Data...
                    </TableCell>
                  </TableRow>
                ) : displayedProduct.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center py-8 text-zinc-500 animate-pulse"
                    >
                      No Data Found
                    </TableCell>
                  </TableRow>
                ) : (
                  displayedProduct.map((product) => (
                    <TableRow
                      key={product._id}
                      className="hover:bg-zinc-900/20 transition-colors group border-none"
                    >
                      <TableCell className="py-4 font-bold text-indigo-400">
                        {product.title}
                      </TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-1.5">
                          <Button className="p-2 border border-zinc-900 bg-zinc-950 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                            <Eye className="h-3.5 w-3.5" />
                          </Button>
                          <Button className="p-2 border border-zinc-900 bg-zinc-950 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                            <Edit3 className="h-3.5 w-3.5" />
                          </Button>
                          <Button className="p-2 border border-zinc-900 bg-zinc-950 text-zinc-500 hover:text-rose-400 hover:border-rose-950 transition-all">
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
              {/* <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter> */}
            </Table>
            {/* <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-zinc-950 text-zinc-600 uppercase text-[10px] pb-3">
                  <th className="pb-4 font-bold">ASSET METRIC SKU</th>
                  <th className="pb-4 font-bold">ASSET IDENTIFIER</th>
                  <th className="pb-4 font-bold">UNIT MATRIX</th>
                  <th className="pb-4 font-bold">VALUATION</th>
                  <th className="pb-4 font-bold">STATUS REFERENCE</th>
                  <th className="pb-4 font-bold text-right">OPERATIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-950/60 text-zinc-300">
                {INVENTORY_MATRIX.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/20 transition-colors group">
                    <td className="py-4 font-bold text-indigo-400">{item.sku}</td>
                    <td className="py-4 uppercase text-white font-sans font-medium">{item.name}</td>
                    <td className="py-4">
                      <span className="font-bold">{item.stock} UNITS</span>
                      <span className="text-[10px] text-zinc-600 block">MIN_LIMIT: {item.threshold}</span>
                    </td>
                    <td className="py-4 font-bold text-white">${item.price.toFixed(2)}</td>
                    <td className="py-4">
                      <span className={`text-[9px] font-bold px-2 py-0.5 border ${
                        item.status === 'IN_STOCK' 
                          ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/20' 
                          : item.status === 'LOW_STOCK' 
                          ? 'bg-amber-500/5 text-amber-400 border-amber-500/20' 
                          : 'bg-rose-500/5 text-rose-400 border-rose-500/20'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="p-2 border border-zinc-900 bg-zinc-950 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                          <Eye className="h-3.5 w-3.5" />
                        </button>
                        <button className="p-2 border border-zinc-900 bg-zinc-950 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                          <Edit3 className="h-3.5 w-3.5" />
                        </button>
                        <button className="p-2 border border-zinc-900 bg-zinc-950 text-zinc-500 hover:text-rose-400 hover:border-rose-950 transition-all">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </div>
  );
}
