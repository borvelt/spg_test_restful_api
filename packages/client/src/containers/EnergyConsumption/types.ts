// create Action based on payload
export type Action<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export interface IEnergyConsumption {
  id: string;
  consumption: number;
  month: number;
  year: number;
}

export type EnergyConsumptionStateShape = {
  loading: boolean;
  error: string;
  data: Record<ConsumptionTypes, IEnergyConsumption[]>;
};

export enum EnergyConsumptionActionTypes {
  Request = "FETCH_ENERGY_CONSUMPTIONS_REQUEST",
  Success = "FETCH_ENERGY_CONSUMPTIONS_SUCCESS",
  Failed = "FETCH_ENERGY_CONSUMPTIONS_FAILED",
}

export type EnergyConsumptionPayloadTypes = {
  [EnergyConsumptionActionTypes.Request]: undefined;
  [EnergyConsumptionActionTypes.Success]: EnergyConsumptionStateShape["data"];
  [EnergyConsumptionActionTypes.Failed]: string;
};

export type EnergyConsumptionResponseShape = {
  ok: boolean;
  data: IEnergyConsumption[];
};

export type ContextProps = {
  state: EnergyConsumptionStateShape;
  dispatch: Dispatch;
};

export type EnergyConsumptionAction =
  Action<EnergyConsumptionPayloadTypes>[keyof Action<EnergyConsumptionPayloadTypes>];

export type Dispatch = (action: EnergyConsumptionAction) => void;

export type LoadingProps = {
  loading: boolean;
};

export enum ConsumptionTypes {
  ELECTRICITY = "electricity",
  GAS = "gas",
  WATER = "water",
}
