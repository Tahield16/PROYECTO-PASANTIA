import axios from "axios";


export const axiosInstance=axios.create({
    baseURL:import.meta.env.VITE_SERVER_KEY,
    timeout:10000,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
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