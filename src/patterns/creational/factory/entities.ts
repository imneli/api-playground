import { ITransport } from "./transport/transport.interface";


class Truck implements ITransport {
  public deliver(): string {
    return "entrega sendo feita por terra (caminhao)";
  }
}

class Ship implements ITransport {
  public deliver(): string {
    return "entrega sendo feita por mar (navio)";
  }
}
