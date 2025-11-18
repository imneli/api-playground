class RetryHandler<T> {
  private readonly maxRetries: number;
  private delayMs: number;

  constructor(maxRetries: number = 5, delayMs: number = 1000) {
    this.maxRetries = maxRetries;
    this.delayMs = delayMs;
  }

  private async delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private shouldRetry(error: any): boolean {
    if (error.message?.includes("HTTP Error 4")) {
      console.warn(
        "[RetryHandler] Erro 4x detectado. Não haverá nova tentativa."
      );
      return false;
    }
    return true;
  }

  public async execute(fn: () => Promise<T>): Promise<T> {
    let attempts = 0;
    let lastError: any;

    while (attempts < this.maxRetries) {
      try {
        return await fn();
      } catch (err) {
        lastError = err;
        attempts++;

        if (attempts >= this.maxRetries || !this.shouldRetry(err)) {
          console.error(
            `[RetryHandler] Parando após ${attempts} tentativas. Erro final:`,
            err
          );
          throw err;
        }

        console.warn(
          `[RetryHandler] Tentativa ${attempts} falhou. Tentando novamente em ${this.delayMs}ms...`
        );

        await this.delay(this.delayMs);
      }
    }

    throw lastError;
  }
}
