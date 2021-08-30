import { Filter } from '@loopback/repository';
import { GasConsumption } from '../models';
import { EnergyConsumptionProvider } from './energy-consumption.service';
export declare class GasBillDataService {
    private service;
    constructor(service: EnergyConsumptionProvider);
    getAll(filter?: Filter<GasConsumption>): Promise<Array<GasConsumption>>;
    sort(data: GasConsumption[]): GasConsumption[];
}
