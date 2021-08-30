import { Dispatch, SetStateAction } from "react";
import {
  ConsumptionTypes,
  EnergyConsumptionActionTypes,
  EnergyConsumptionPayloadTypes,
} from "../EnergyConsumption/types";

export type FilterContextProps = {
  filters: FiltersStateShape;
  setFilters: Dispatch<SetStateAction<FiltersStateShape>>;
};

export type FiltersStateShape = {
  types: Record<ConsumptionTypes, boolean>;
  from: {
    month: number;
    year: number;
  };
  to: {
    month: number;
    year: number;
  };
};

export type WithApiProps = {
  fetchEnergyConsumptionRequest: () => void;
  fetchEnergyConsumptionSuccess: (
    x: EnergyConsumptionPayloadTypes[EnergyConsumptionActionTypes.Success]
  ) => void;
  fetchEnergyConsumptionFailed: (
    e: EnergyConsumptionPayloadTypes[EnergyConsumptionActionTypes.Failed]
  ) => void;
  currentFilters: FiltersStateShape;
};
