import { useContext, useState } from "react";
import { createContext, FC } from "react";
import { ConsumptionTypes } from "../EnergyConsumption/types";
import { FilterContextProps, FiltersStateShape } from "./types";

/**
 * filter context has a useState structure
 * we  need to save a filters data to share with components like withApi
 */

const defaultState: FiltersStateShape = {
  types: {
    [ConsumptionTypes.ELECTRICITY]: true,
    [ConsumptionTypes.GAS]: false,
    [ConsumptionTypes.WATER]: false,
  },
  from: {
    month: 10,
    year: 2012,
  },
  to: {
    month: 12,
    year: 2013,
  },
};
export const FiltersContext = createContext<FilterContextProps>({
  filters: defaultState,
  setFilters: () => {},
});

const Provider: FC = ({ children }) => {
  const [filters, setFilters] = useState<FiltersStateShape>(defaultState);
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

// energyConsumption hook which provides EnergyConsumptionContext for consumers.
export const useFilters = () => useContext(FiltersContext);

export default Provider;
