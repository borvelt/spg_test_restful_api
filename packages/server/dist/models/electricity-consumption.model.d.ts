import { EnergyConsumptionBase } from './energy-consumption-base.model';
export declare class ElectricityConsumption extends EnergyConsumptionBase {
    electricityRate: number;
    energyCharge: number;
    transactionCharge: number;
    distributionCharge: number;
    localAccountCharge: number;
    tax: number;
    rateRiders: number;
    constructor(data?: Partial<ElectricityConsumption>);
}
export interface ElectricityConsumptionRelations {
}
export declare type ElectricityConsumptionWithRelations = ElectricityConsumption & ElectricityConsumptionRelations;
