import { Logistics } from "./logistics/logistics.factory";

class Application {
  // private logistics: Logistics;

  constructor(deliveryType: "road" | "sea") {
    if (deliveryType === "road") {
      console.log("app configurado para logistica terrestre");
    } else {
      console.log("app configurado para logistica maritima");
    }
  }
}
