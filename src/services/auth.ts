import { z } from 'zod';
import { HttpClient } from './httpClient';

const User = z
  .object({
    code: z.number(),
    data: z
      .object({
        name: z.string(),
        phone: z.string(),
        token: z.string(),
        userid: z.string().or(z.number()),
      })
      .catchall(z.any())
      .nullish(),
    message: z.string().or(z.number()),
    token: z.string().nullish(),
  })
  .catchall(z.any());
export type USER = z.infer<typeof User>;

export class AuthService {
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  login(username: string, password: string): Promise<USER> {
    const _url = `login.php?username=${username}&password=${password}`;
    return this.http.post(_url, {}, User);
  }
}
