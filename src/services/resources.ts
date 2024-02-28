import { AuthService } from "@/services/auth";
import { HttpClient } from "./httpClient";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;
const httpClient = new HttpClient(baseUrl);

const authService = new AuthService(httpClient);

export { authService };
