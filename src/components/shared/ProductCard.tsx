"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/products";
import { Minus, Plus, Loader2 } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/store";
import cartServices from "@/services/cart/cart-services";
import { Button } from "@/components/ui/button";
import { fetchCartItemsSuccess } from "@/store/slice/ProductSlice";

interface ProductDataProps {
  productData: Product;
  id: number;
}

export default function ProductCard({ productData, id }: ProductDataProps) {
  const { _id, title, category, price, status, imageUrl } = productData;
  const { cartItems } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  // Track async request operations to prevent user multi-click spam
  const [isUpdating, setIsUpdating] = useState(false);

  const isInCart = cartItems.some((item) => item.productId?._id === _id);

  const fetchCartData = async () => {
    try {
      cartServices.getUserCart();
      const cartResponse: any = await cartServices.getUserCart();
      console.log("cartResponse", cartResponse);
      if (cartResponse.data) {
        dispatch(fetchCartItemsSuccess(cartResponse.data.items));
        console.log('cartItems', cartItems)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleCartToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isUpdating) return;

    try {
      setIsUpdating(true);

      if (isInCart) {
        // Remove item from cart completely
        await cartServices.updateUserCart({
          productId: _id,
          quantity: 0,
        });
      } else {
        // Add item to cart with base initial quantity
        await cartServices.updateUserCart({
          productId: _id,
          quantity: 1,
        });
      }

      fetchCartData();

    } catch (error) {
      console.error("Cart transaction failure:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="group relative flex flex-col justify-between h-full bg-transparent">

      {/* Image Box with Micro Thin Framing */}
      <div className="relative aspect-3/4 w-full bg-[#0D0D11] border border-zinc-900/80 p-2 overflow-hidden mb-6 transition-all duration-500 group-hover:border-zinc-700">
        {status && (
          <span className="absolute top-4 left-4 z-20 font-mono text-[10px] text-zinc-400 tracking-widest uppercase bg-black/60 backdrop-blur-md px-2 py-0.5 border border-zinc-800">
            [{status}]
          </span>
        )}

        <div className="w-full h-full overflow-hidden relative bg-zinc-950">
          <Image
            src={imageUrl || "/placeholder-image.png"} // Fallback image check
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-100 grayscale group-hover:grayscale-0"
          />
        </div>
      </div>

      {/* Text Layout Block */}
      <div className="space-y-2 px-1">
        <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-600">
          <span className="uppercase">{category}</span>
          <span>ID // {(id + 1).toString().padStart(2, "0")}</span>
        </div>

        <h3 className="font-semibold text-zinc-200 text-base tracking-wide uppercase transition-colors group-hover:text-white line-clamp-1">
          {title}
        </h3>

        <div className="pt-3 border-t border-zinc-900/50 flex items-center justify-between gap-4">
          <span className="text-lg font-mono font-light text-white">
            ${price.toFixed(2)}
          </span>

          <Button
            onClick={handleCartToggle}
            disabled={isUpdating}
            className={`
              cursor-pointer h-9 px-4 border text-[10px] font-mono uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 select-none disabled:opacity-50 disabled:cursor-not-allowed
              ${isInCart
                ? "bg-rose-950/20 text-rose-400 border-rose-900/50 hover:bg-rose-900/40 hover:text-rose-200 hover:border-rose-700"
                : "bg-transparent text-zinc-400 border-zinc-800 hover:text-black hover:bg-white hover:border-white"
              }
            `}
          >
            {isUpdating ? (
              <>
                <Loader2 className="h-3 w-3 animate-spin" />
                Processing
              </>
            ) : isInCart ? (
              <>
                <Minus className="h-3 w-3" />
                Remove Cart
              </>
            ) : (
              <>
                <Plus className="h-3 w-3" />
                Add To Cart
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}