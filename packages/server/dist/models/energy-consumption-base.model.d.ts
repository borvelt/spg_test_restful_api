import { Model } from '@loopback/repository';
export declare class EnergyConsumptionBase extends Model {
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    year: number;
    month: number;
    totalCharge: number;
    consumption: number;
    blendedRate: number;
    buildingId?: string;
    constructor(data?: Partial<EnergyConsumptionBase>);
}
export interface EnergyConsumptionBaseRelations {
}
export declare type EnergyConsumptionBaseWithRelations = EnergyConsumptionBase & EnergyConsumptionBaseRelations;
