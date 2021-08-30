import {
  EnergyConsumptionAction,
  EnergyConsumptionActionTypes,
  EnergyConsumptionPayloadTypes,
} from "./types";

// action creators
// because we have an api request we need three actions.
export const fetchEnergyConsumptionRequest = (): EnergyConsumptionAction => ({
  type: EnergyConsumptionActionTypes.Request,
});
export const fetchEnergyConsumptionSuccess = (
  payload: EnergyConsumptionPayloadTypes[EnergyConsumptionActionTypes.Success]
): EnergyConsumptionAction => ({
  type: EnergyConsumptionActionTypes.Success,
  payload,
});
export const fetchEnergyConsumptionFailed = (
  payload: EnergyConsumptionPayloadTypes[EnergyConsumptionActionTypes.Failed]
): EnergyConsumptionAction => ({
  type: EnergyConsumptionActionTypes.Failed,
  payload,
});
