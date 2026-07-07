"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  PackagePlus,
  ImageIcon,
  DollarSign,
  Layers,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import productService from "@/services/products/product-service";

export default function AddProductForm() {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("IN_STOCK");

  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    console.log(title, price, stock, category, imageUrl, description)

    if (!title || !price || !stock || !category || !imageUrl.trim() || !description) {
      setError("All fields required");
      return;
    }

    try {
      setLoading(true);
      const response:any = await productService.createProduct({
        title,
        price,
        stock,
        category,
        imageUrl,
        description,
        status,
      });

      console.log("Add product form Response :- ", response);
      setSuccess(response)
    } catch (err: unknown) {
      setError((err as Error).error || "Authentication failed.");
    } finally {
      setLoading(false);
      setTitle("")
      setPrice(0)
      setStock(0)
      setCategory("")
      setImageUrl("")
      setDescription("")
      setStatus("")
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs tracking-widest rounded-none h-11 px-6 font-bold group">
            <PackagePlus className="mr-2 h-4 w-4" /> ADD NEW ASSET
          </Button>
        }
      />
      <DialogContent className="sm:max-w-[600px] bg-[#0A0A0F] border border-zinc-900 rounded-none text-[#F4F4F5] font-mono p-6">
        {" "}
        {error && (
          <div className="p-3 bg-rose-500/5 border border-rose-500/20 text-rose-400 text-[10px] tracking-wider flex items-center gap-2">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
            <span className="uppercase">{error}</span>
          </div>
        )}

        {success && (
          <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-[10px] tracking-wider flex items-center gap-2">
            <CheckCircle className="h-3.5 w-3.5 shrink-0" />
            <span>Product created successfully! </span>
          </div>
        )}
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          {/* <DialogDescription>
              Make changes to your product here. Click save when you&apos;re
              done.
            </DialogDescription> */}
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <Label
                className="text-[10px] text-zinc-500 tracking-widest block uppercase font-bold"
                htmlFor="title-1"
              >
                Title
              </Label>
              <Input
                id="title-1"
                className="w-full bg-[#030303] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors"
                name="title"
                value={title}
                disabled={loading}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Field>
            <Field>
              <Label className="text-[10px] text-zinc-500 tracking-widest block uppercase font-bold flex items-center gap-1">
                <DollarSign className="h-3 w-3" /> Price
              </Label>
              <Input
                type="number"
                className="w-full bg-[#030303] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors"
                value={price}
                disabled={loading}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Field>
            <Field>
              <Label className="text-[10px] text-zinc-500 tracking-widest block uppercase font-bold">
                Stock
              </Label>
              <Input
                type="number"
                className="w-full bg-[#030303] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors"
                name="username"
                value={stock}
                disabled={loading}
                onChange={(e) => setStock(e.target.value)}
                required
              />
            </Field>
            <Field>
              <Label className="text-[10px] text-zinc-500 tracking-widest block uppercase font-bold flex items-center gap-1">
                <Layers className="h-3 w-3" /> Category
              </Label>
              <select
                required
                disabled={loading}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#030303] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-40 appearance-none"
              >
                <option value="" disabled>
                  SELECT MATRIX CLASS...
                </option>
                <option value="hardware">COMPUTATIONAL_HARDWARE</option>
                <option value="peripherals">PERIPHERAL_MATRICES</option>
                <option value="software">SOFTWARE_ENVIRONMENTS</option>
              </select>
            </Field>
            <Field>
              <Label className="text-[10px] text-zinc-500 tracking-widest block uppercase font-bold flex items-center gap-1">
                <ImageIcon className="h-3 w-3" /> Image LINK
              </Label>
              <Input
                type="url"
                className="w-full bg-[#030303] border border-zinc-900 h-11 px-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors"
                value={imageUrl}
                disabled={loading}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </Field>
            <Field>
              <Label className="text-[10px] text-zinc-500 tracking-widest block uppercase font-bold">
                Description
              </Label>
              <textarea
                rows={3}
                disabled={loading}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Compile technical capabilities..."
                className="w-full bg-[#030303] border border-zinc-900 p-4 text-xs tracking-widest text-white rounded-none focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-40 resize-none font-mono"
              />
            </Field>
          </FieldGroup>
          <DialogFooter className="bg-none bg-transparent border-none">
            <DialogClose
              render={
                <Button
                  className="bg-rose-500/5 border-rose-500/20 text-rose-400"
                  variant="outline"
                >
                  Cancel
                </Button>
              }
            />
            <Button type="submit">Add Product</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
