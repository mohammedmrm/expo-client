import { Err, MWError } from "@/types";
import { z } from "zod";

const MWResponse = MWError.or(z.array(MWError.or(z.any())).length(1));

export class HttpClient {
  baseURL: string | undefined;

  constructor(baseURL: string | undefined) {
    this.baseURL = baseURL;
  }

  private authHeaders() {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      return {
        Authorization: `Bearer ${jwt}`,
      };
    }
    return { Authorization: "" };
  }

  private prepare_request(input: any, headers = {}, method = "POST") {
    const body = {
      richiesta: [input],
      formatoOutput: "JSON",
    };

    const requestOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
        ...this.authHeaders(),
      },
      body: JSON.stringify(body),
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
    if ("errorCode" in mwResp) {
      throw mwResp as Err;
    }
    return t.parse(mwResp);
  }

  post<
    TT extends z.ZodRawShape,
    TUN extends z.UnknownKeysParam,
    TCAT extends z.ZodTypeAny,
    TO,
    TI,
    T extends z.ZodObject<TT, TUN, TCAT, TO, TI>
  >(endPoint: string, body: object = {}, t: T): Promise<TO> {
    const _url = this.baseURL + endPoint;

    return fetch(_url, this.prepare_request(body))
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        const resp: TO = this.parse_response(json, t);

        return resp;
      })
      .catch((err) => {
        throw err as Err;
      });
  }
}
