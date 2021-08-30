import { EnergyConsumptionBase } from './energy-consumption-base.model';
export declare class WaterConsumption extends EnergyConsumptionBase {
    waterRate: number;
    waterCharge: number;
    waterBasicServiceCharge: number;
    totalWaterCharge: number;
    sewerRate: number;
    sewerCharge: number;
    sewerBasicServiceCharge: number;
    drianageServiceCharge: number;
    totalSewerCharge: number;
    tax: number;
    constructor(data?: Partial<WaterConsumption>);
}
export interface WaterConsumptionRelations {
}
export declare type WaterConsumptionWithRelations = WaterConsumption & WaterConsumptionRelations;
