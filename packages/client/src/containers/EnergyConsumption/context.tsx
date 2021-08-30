import { useContext, useReducer } from "react";
import { createContext, FC } from "react";
import energyConsumptionReducer from "./reducers";
import { ContextProps, EnergyConsumptionStateShape } from "./types";

/**
 * energyConsumption context has a state and a dispatch function
 * we have a state with the shape of `EnergyConsumptionStateShape`
 * dispatch function will get action and call the energyConsumptionReducer and the output of energyConsumptionReducer is our new state(with the same shape).
 */

const defaultState: EnergyConsumptionStateShape = {
  loading: false,
  data: {
    electricity: [],
    gas: [],
    water: [],
  },
  error: "",
};
export const EnergyConsumptionContext = createContext<ContextProps>({
  state: defaultState,
  dispatch: () => {},
});

const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(energyConsumptionReducer, defaultState);
  return (
    <EnergyConsumptionContext.Provider value={{ state, dispatch }}>
      {children}
    </EnergyConsumptionContext.Provider>
  );
};

// energyConsumption hook which provides EnergyConsumptionContext for consumers.
export const useEnergyConsumption = () => useContext(EnergyConsumptionContext);

export default Provider;
