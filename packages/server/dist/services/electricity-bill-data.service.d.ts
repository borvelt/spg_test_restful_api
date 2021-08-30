import { Filter } from '@loopback/repository';
import { ElectricityConsumption } from '../models';
import { EnergyConsumptionProvider } from './energy-consumption.service';
export declare class ElectricityBillDataService {
    private service;
    constructor(service: EnergyConsumptionProvider);
    getAll(filter?: Filter<ElectricityConsumption>): Promise<ElectricityConsumption[]>;
    sort(data: ElectricityConsumption[]): ElectricityConsumption[];
}
