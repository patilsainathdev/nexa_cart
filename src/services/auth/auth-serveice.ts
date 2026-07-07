import apiClient from "@/lib/apiClient";
import { AuthResponse , RegisterResponse} from "@/types/auth";

export const authServices = {
  /**
   * Transmits security credentials to decrypt user matrix session state.
   */
  login: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      // Direct object mapping passes variables clean into Axios config payloads
      const response = await apiClient.post("/auth/login", {
        email,
        password,
      });

      console.log("//LOGIN_SESSION_DECRYPTED", response);

      // If your interceptor already returns 'response.data', return 'response' directly
      return response as unknown as AuthResponse;
    } catch (err) {
      console.error("// ERROR: AUTHENTICATION_TUNNEL_EXCEPTION", err);
      throw err;
    }
  },
  register: async(name: string, email: string, password: string): Promise<RegisterResponse> =>{
    try{
        const response = await apiClient.post("/auth/register",{
            name,
            email,
            password
        })
        return response as unknown as RegisterResponse;
    }catch(err){
        console.error("// ERROR: AUTHENTICATION_TUNNEL_EXCEPTION", err);
      throw err;
    }
  }
};
