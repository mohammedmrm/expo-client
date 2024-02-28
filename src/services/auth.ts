import { ANY_OBJECT_SCHEMA } from "@/types";
import { z } from "zod";
import { HttpClient } from "./httpClient";

const User = z.object({
  token: z.string(),
  id: z.number().int(),
  name: z.string(),
  phone: z.string(),
});

export type AuthUser = z.infer<typeof User>;

export class AuthService {
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  login() {
    const _url = "login.php";
    this.http.post(_url, {}, ANY_OBJECT_SCHEMA);
  }
}
