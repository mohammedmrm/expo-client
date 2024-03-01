import { Err, MWError } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance } from 'axios';
import { z } from 'zod';

const MWResponse = MWError.or(z.array(MWError.or(z.any())).length(1));

export class HttpClient {
  baseURL: string | undefined;
  apiClient: AxiosInstance;
  constructor(baseURL: string | undefined) {
    this.baseURL = baseURL;
    this.apiClient = axios.create({
      baseURL: this.baseURL,
    });
  }

  private async authHeaders() {
    const jwt = await AsyncStorage.getItem('jwt');

    if (jwt) {
      return {
        Authorization: jwt,
      };
    }
    return { Authorization: '' };
  }

  private async prepare_request(input: any = {}, headers = {}, method = 'POST') {
    const requestOptions = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
        ...(await this.authHeaders()),
      },
      data: input,
      insecure: true,
      httpsAgent: {
        rejectUnauthorized: false,
      },
    };

    return requestOptions;
  }

  private parse_response<
    TT extends z.ZodRawShape,
    TUN extends z.UnknownKeysParam,
    TCAT extends z.ZodTypeAny,
    TO,
    TI,
    T extends z.ZodObject<TT, TUN, TCAT, TO, TI>
  >(json: any, t: T): TO {
    const mwResp = MWResponse.parse(json);
    return t.parse(mwResp);
  }

  async post<
    TT extends z.ZodRawShape,
    TUN extends z.UnknownKeysParam,
    TCAT extends z.ZodTypeAny,
    TO,
    TI,
    T extends z.ZodObject<TT, TUN, TCAT, TO, TI>
  >(endPoint: string, body: object = {}, t: T): Promise<TO> {
    const requestOptions = await this.prepare_request(body);
    return this.apiClient
      .post(endPoint, { ...requestOptions, insecure: true })
      .then((resp) => {
        return resp.data;
      })
      .then((json) => {
        const resp: TO = this.parse_response(json, t);
        return resp;
      })
      .catch((err) => {
        console.log(err);
        throw err as Err;
      });
  }
}
