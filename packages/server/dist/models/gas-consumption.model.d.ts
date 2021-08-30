import { EnergyConsumptionBase } from './energy-consumption-base.model';
export declare class GasConsumption extends EnergyConsumptionBase {
    gasCharge: number;
    demandCharge: number;
    deliveryCharge: number;
    rateRiders: number;
    minucipalFranchiseeFee: number;
    carbonTax: number;
    adminFee: number;
    constructor(data?: Partial<GasConsumption>);
}
export interface GasConsumptionRelations {
}
export declare type GasConsumptionWithRelations = GasConsumption & GasConsumptionRelations;
