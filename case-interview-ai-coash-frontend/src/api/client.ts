import axios from "axios";
import { BASE_URL } from "../config/api";

export const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            originalRequest.url !== "/auth/refresh"
        ) {
            originalRequest._retry = true;

            const response = await axios.post(
                `${BASE_URL}auth/refresh`,
                {},
                {
                    withCredentials: true,
                }
            );

            const newAccessToken = response.data.access_token;

            localStorage.setItem(
                "token",
                newAccessToken
            );

            return api(originalRequest);
        }

        return Promise.reject(error);
    }
);