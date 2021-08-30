import { Filter } from '@loopback/repository';
import { ResponseShape } from '.';
import { GasConsumption } from '../models';
import { GasBillDataService } from '../services';
export declare class GasBillDataController {
    private service;
    constructor(service: GasBillDataService);
    find(filter?: Filter<GasConsumption>): Promise<ResponseShape<GasConsumption>>;
}
