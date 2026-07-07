import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
//   timeout: 10000,
});

apiClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) =>{
        return Promise.reject(error)
    }
)

apiClient.interceptors.response.use(
    (response) => response.data,
    (error)=>{
        // console.error('// NETWORK MATRIX EXCEPTION:', error.response?.data || error.message);
        return Promise.reject(error.response?.data || { success: false, error: 'TUNNEL_TIMEOUT' });
    }
)

export default apiClient;