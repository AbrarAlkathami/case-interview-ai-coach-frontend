import { BASE_URL } from "../config/api";
import { api } from "./client";
import axios from "axios";

interface LoginCredentials {
    email: string;
    password: string;
}

interface TokenResponse {
    access_token: string;
    token_type: string;
}

interface RegisterCredentials{
    name: string;
    email: string;
    password: string;
}

interface RefreshTokenResponse {
    access_token: string;
    token_type: string;
}

export async function loginApi({email, password }: LoginCredentials): Promise<TokenResponse> {

    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);
    try {
        const response = await api.post<TokenResponse>(`auth/token`, formData,{
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        localStorage.setItem(
            "token",
            response.data.access_token
        );
        return response.data;
    } catch(error){
        console.error("Login failed:", error);
        if (axios.isAxiosError(error)) {
            console.error(error.response?.data);
        }
        throw error;
    }
}

export async function registerApi({ name, email, password }: RegisterCredentials): Promise<TokenResponse> {

    const payload = {
        name,
        email,
        password,
    };
    try{
        const response = await api.post<TokenResponse>(`auth/register`,
           payload, 
           {
                headers : {
                    "Content-Type": "application/json"
                }
           }
        ); 

        localStorage.setItem("token", response.data.access_token);
        return response.data
    } catch (error){
        console.error("Registration failed:", error);

        if (axios.isAxiosError(error)) {
            console.error(error.response?.data);
        }

        throw error;

    }
}

export async function refreshAccessToken(): Promise<RefreshTokenResponse> {
    const response = await api.post<RefreshTokenResponse>(
        "/auth/refresh"
    );

    return response.data;
}
