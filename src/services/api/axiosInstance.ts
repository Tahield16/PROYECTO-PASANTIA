import axios from "axios";
const GAMES_API_BASE_URL=import.meta.env.VITE_API_BASE_URL;

export const axiosInstance=axios.create({
    baseURL:GAMES_API_BASE_URL,
    timeout:10000,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    params:{
        key:import.meta.env.VITE_API_KEY
    }
});


axiosInstance.interceptors.response.use(
    (response) => {
    
        return response.data;
    },
);

axiosInstance.interceptors.request.use(
    (config) => {
     
        return config;
    },
);