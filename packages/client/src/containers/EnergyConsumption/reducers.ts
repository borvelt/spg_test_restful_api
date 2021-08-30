import {
  EnergyConsumptionActionTypes,
  EnergyConsumptionAction,
  EnergyConsumptionStateShape,
} from "./types";

const energyConsumptionReducer = (
  state: EnergyConsumptionStateShape,
  action: EnergyConsumptionAction
): EnergyConsumptionStateShape => {
  if (action.type === EnergyConsumptionActionTypes.Request) {
    return { ...state, loading: true };
  }

  if (action.type === EnergyConsumptionActionTypes.Success) {
    return {
      ...state,
      data: action.payload,
      loading: false,
    };
  }

  if (action.type === EnergyConsumptionActionTypes.Failed) {
    return { ...state, loading: false, error: `${action.payload}` };
  }

  return state;
};

export default energyConsumptionReducer;
