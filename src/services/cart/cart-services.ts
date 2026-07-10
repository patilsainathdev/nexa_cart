import apiClient from "@/lib/apiClient";

const cartServices = {
  getUserCart: async (): Promise<unknown> => {
    return await apiClient.get("/user/cart");
  },
  updateUserCart: async (cartData: {
    productId: string;
    quantity: number;
  }): Promise<unknown> => {
    return await apiClient.post("/user/cart", JSON.stringify(cartData), { withCredentials: true });
  },
};

export default cartServices;
