import { ConsumptionTypes } from "./types";

export const api = {
  BASE_URL: "http://localhost:3000", // same server
};

export const endpoints = {
  [ConsumptionTypes.ELECTRICITY]: "/electricity-bill-data",
  [ConsumptionTypes.GAS]: "/gas-bill-data",
  [ConsumptionTypes.WATER]: "/water-bill-data",
};
