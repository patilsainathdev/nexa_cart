import apiClient from "@/lib/apiClient";
import { Product } from "@/types/products";

const productService = {
  createProduct: async (productData: Product): Promise<unknown> => {
    try {
      const response = await apiClient.post("/admin/products", {
        productData
      });
      console.log("Product create Response ", response);
      return response;
    } catch (err) {
      console.error("//Error: Product creation", err);
      throw err;
    }
  },
  getProductList: async ():Promise<unknown> => {
    try{
        const response = await apiClient.get('/admin/products');
        console.log('Product list response', response)
        return response;
    }catch(err){
        console.error("//Error: Product creation", err);
      throw err;
    }
  },
};

export default productService;
