import { brasilApi } from "../../../../common/baseUrl";
import { rl } from "../../../../common/rl";
import { Scripts } from "../../../fetch";

export const banks = async () => {
  const fetchUrl = `${brasilApi}/banks/v1`;

  try {
    const banks = await Scripts.fetchScript(fetchUrl, "GET");
    console.log("\nResultado:\n", banks);
  } catch (error: any) {
    console.error("\n error to search banks:", error.message);
  }

  rl.close();
};

banks();
