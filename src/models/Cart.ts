import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICartItem {
  productId: mongoose.Types.ObjectId;
  quantity: number;
}

export interface ICart extends Document {
  userId: string;
  items: ICartItem[];
  updatedAt: Date;
}

const CartSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity:{
        type:Number,
        required: true,
        default: 1,
        min:1
      }
    },
  ],
},{
    timestamps: true
});

// export default mongoose.models.Cart ||  mongoose.model<ICart>('Cart', CartSchema);

export const Cart: Model<ICart> = mongoose.models.Cart || mongoose.model<Cart>('Cart', CartSchema); 
