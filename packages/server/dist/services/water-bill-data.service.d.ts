import { Filter } from '@loopback/repository';
import { WaterConsumption } from '../models';
import { EnergyConsumptionProvider } from './energy-consumption.service';
export declare class WaterBillDataService {
    private service;
    constructor(service: EnergyConsumptionProvider);
    getAll(filter?: Filter<WaterConsumption>): Promise<WaterConsumption[]>;
    sort(data: WaterConsumption[]): WaterConsumption[];
}
