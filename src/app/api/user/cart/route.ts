import { NextResponse, NextRequest } from "next/server";
import connectDataMatrix from "@/lib/db";
import { auth } from "@/lib/auth";
import { Cart } from "@/models/Cart";

export async function GET(req: NextRequest) {
  try {
    await connectDataMatrix();
    const session = await auth.api.getSession({
      headers: await req.headers,
    });
    console.log("session", session);
    if (!session || !session.user) {
      return NextResponse.json(
        {
          success: false,
          error: "UNAUTHORIZED_ACCESS // INVALID_SESSION_TOKEN",
        },
        { status: 401 },
      );
    }

    const userId = session.user.id;

    const userCart = await Cart.findOne({ userId }).populate("items.productId");
    console.log("userCart", userCart);
    return NextResponse.json(
      {
        success: true,
        data: userCart,
      },
      {
        status: 200,
      },
    );
  } catch (err: any) {
    console.error("Error api/cart/get:", err);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDataMatrix();
    const session = await auth.api.getSession({
      headers: await req.headers,
    });
    console.log("session", session);
    if (!session || !session.user) {
      return NextResponse.json(
        {
          success: false,
          error: "UNAUTHORIZED_ACCESS // INVALID_SESSION_TOKEN",
        },
        { status: 401 },
      );
    }

    const body = await req.json();
    const { productId, quantity = 1 } = body;
    console.log("cart api ", body);

    if (!productId) {
      return NextResponse.json(
        {
          success: false,
          error: "VALIDATION_FAULT // MALFORMED_PRODUCT_ID",
        },
        { status: 400 },
      );
    }

    const userId = session.user.id;
    console.log("userId", userId);

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({
        userId: userId,
        items: [{ productId, quantity }],
      });
    } else {
      const existingItemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId,
      );

      if (existingItemIndex > -1) {
      const currentQuantity = cart.items[existingItemIndex].quantity;
        if (quantity <= 0 || (currentQuantity + quantity) <= 0) {
          cart.items.splice(existingItemIndex, 1)
        }else{
          cart.items[existingItemIndex].quantity += quantity;
        }

      } else {
        cart.items.push({ productId, quantity });
      }
    }

    // const saveCart = (await cart.save()).populate("items.productId");
    await cart.save();
    const saveCart = await cart.populate("items.productId");

    return NextResponse.json({
      success: true,
      message: "Cart updated successfully",
      data: saveCart,
    });
  } catch (err: any) {
    console.error("Error /api/cart/add:", err);
    return NextResponse.json(
      { success: false, error: "INTERNAL_SERVER_ERROR // DATA_MUTATION_CRASH" },
      { status: 500 },
    );
  }
}
