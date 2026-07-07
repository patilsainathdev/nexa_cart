import { NextResponse } from "next/server";
import connectDataMatrix from "@/lib/db";
import { Product } from "@/models/Product";

export async function GET(request: Request){
    await connectDataMatrix();

    try{
        const products = await Product.find({})
        return NextResponse.json({success:true, data: products},{status:200})
    }catch(err:any){
        return NextResponse.json({
            message:err.message || 'Internal server error.'
        },{
            status:500
        })
    }
}

export async function POST(request: Request) {
  await connectDataMatrix();

  try {
    const body = await request.json();
    const product = await Product.create(body.productData);

    if(!product){
        return NextResponse.json({
            success: false
        })
    }

    return NextResponse.json(
      { message: "Product created successfully." },
      { status: 201 },
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 },
    );
  }
}
