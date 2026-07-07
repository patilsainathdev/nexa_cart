import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  title: string;
  price: number;
  stock: number;
  category: string;
  imageUrl: string;
  description: string;
  status: "IN_STOCK" | "LOW_STOCK" | "DEPLETED";
}

const ProductSchema: Schema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    price: { type: Number, requred: true, default: 0 },
    stock: { type: Number, requred: true, default: 0 },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, requred: true },
    status: { type: String, requred: true, default: "IN_STOCK" },
  },
  {
    timestamps: true,
  }
);

export const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<Product>('Product', ProductSchema); 
