import { Config } from "@pandacss/dev";

export const conditions: Config["conditions"] = {
  tourTheme: ["data-theme=tour &"],
  ticketTheme: ["data-theme=ticket &"],
  tripleTheme: ["data-theme=triple &"],
};
