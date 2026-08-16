import { BASE_URL } from "../config/api";

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

export async function loginApi({email, password }: LoginCredentials): Promise<TokenResponse> {

    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    const response = await fetch(`${BASE_URL}auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
    });
    if (!response.ok) {
        const error = await response.json();
        console.log("Backend error:", error);
        throw new Error("Login failed");
      }

    const data: TokenResponse = await response.json();
    localStorage.setItem("token", data.access_token);
    return data
}

export async function registerApi({ name, email, password }: RegisterCredentials): Promise<TokenResponse> {

    const payload= {
        "name": name,
        "email": email,
        "password": password
    }

    const response = await fetch(`${BASE_URL}auth/register`,
        {
            method:"POST",
            "headers": {
                "Content-Type": "application/json",
            }, 
            "body": JSON.stringify(payload)
        }
    ); 
    if (!response.ok) {
        const errorData = await response.json();
      
        throw new Error(errorData.detail || "Registration failed");
      }

      const data: TokenResponse = await response.json();
      localStorage.setItem("token", data.access_token);
    return data
}
