import {Injectable} from "@tsed/di";

@Injectable()
export class HttpClient {
  async get<T = any>(url: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(url, {
      method: "GET",
      ...options
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (response.headers.get("content-type")?.includes("application/json")) {
      console.log(response.headers)

      return response.json()
    }

    return response.text() as T;
  }
}