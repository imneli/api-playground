export class SortingService {
  private readonly arr = [2, 4, 90, 12, 7];

  constructor() {}

  public async bubbleSort() {
    console.log("\n original arr:", this.arr);

    const sorted = [...this.arr];
    const n = sorted.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (sorted[j] > sorted[j + 1]) {
          [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
        }
      }
    }
    console.log(sorted, "array ordenado");
  }
}
