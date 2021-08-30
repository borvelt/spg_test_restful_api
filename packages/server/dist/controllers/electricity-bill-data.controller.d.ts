import { Filter } from '@loopback/repository';
import { ResponseShape } from '.';
import { ElectricityConsumption } from '../models';
import { ElectricityBillDataService } from '../services';
export declare class ElectricityBillDataController {
    private service;
    constructor(service: ElectricityBillDataService);
    find(filter?: Filter<ElectricityConsumption>): Promise<ResponseShape<ElectricityConsumption>>;
}
