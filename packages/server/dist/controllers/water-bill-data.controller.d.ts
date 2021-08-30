import { Filter } from '@loopback/repository';
import { ResponseShape } from '.';
import { WaterConsumption } from '../models';
import { WaterBillDataService } from '../services';
export declare class WaterBillDataController {
    private service;
    constructor(service: WaterBillDataService);
    find(filter?: Filter<WaterConsumption>): Promise<ResponseShape<WaterConsumption>>;
}
