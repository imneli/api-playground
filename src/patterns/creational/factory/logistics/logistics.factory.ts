import { ITransport } from "../transport/transport.interface";

export abstract class Logistics {
  public abstract createTransport(): ITransport;

  public planDelivery() {
    const transport = this.createTransport();

    const res = transport.deliver();
    return `Logistica: Planejando a entrega ${res}`;
  }
}
