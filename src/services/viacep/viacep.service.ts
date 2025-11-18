import { HttpClient } from "../../../lib/http-client";
import { question } from "../../question";

export class ViaCepService {
  constructor(private readonly httpClient: HttpClient) {
    httpClient = this.httpClient;
  }

  public async getCep() {
    try {
      const input = await question("Digite um cep: ");
      const endpoint = `/${input}/json`;

      const res = await this.httpClient.get(endpoint);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }
}
