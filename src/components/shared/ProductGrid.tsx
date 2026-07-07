'use client';

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useAppSelector, useAppDispatch } from '@/store/store';

// Mock Data for UI Compilation
const MOCK_PRODUCTS = [
  { id: '1', name: 'Premium Wireless Headphones', price: 299, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', rating: 4.8 },
  { id: '2', name: 'Minimalist Leather Watch', price: 149, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500', rating: 4.5 },
  { id: '3', name: 'Ergonomic Mechanical Keyboard', price: 189, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500', rating: 4.9 },
];

export default function ProductGrid() {

  const {items} = useAppSelector((state) => state.products);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Trending Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((product) => (
          <Card key={product.id} className="overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="relative aspect-square w-full bg-slate-100">
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="h-full w-full object-cover object-center"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold truncate">{product.title}</CardTitle>
              <div className="flex items-center gap-1 mt-1 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium text-slate-600">{product.rating}</span>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-2">
              <span className="text-2xl font-bold text-slate-900">${product.price}</span>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full flex items-center justify-center gap-2">
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}