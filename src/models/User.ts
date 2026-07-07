import mongoose, { Model, Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: "user" | "admin";
  updatedAt: Date;
  createdAt: Date;
  comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema: Schema = new Schema<IUser>(
  {
    name: { type: String, required: [true, "Please provide a name"] },
    email: {
      type: String,
      required: [true, "Please provide an email address"],
      unique: true,
    },
    passwordHash: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 6,
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre<IUser>('save', async function(){
  if(!this.isModified("passwordHash")) return;
  try{
    const salt = await bcrypt.genSalt(10);
    this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
  } catch (error: unknown) {
    throw error;
  }
});

UserSchema.methods.comparePassword = async function(password: string): Promise<boolean>{
  return bcrypt.compare(password, this.passwordHash);
}

export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
