import { cep } from "./methods/brasil-api/cep/cep";

class Main {
  static async main() {
    cep("v2");
  }
}

Main.main();
