import { Dispatch, SetStateAction } from "react";
import { ConsumptionTypes } from "../EnergyConsumption/types";

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
