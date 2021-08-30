import {
  BindingScope,
  injectable,
  service as loopbackService,
} from '@loopback/core';
import {Filter} from '@loopback/repository';
import path from 'path';
import {WaterConsumption} from '../models';
import {EnergyConsumptionProvider} from './energy-consumption.service';

@injectable({scope: BindingScope.TRANSIENT})
export class WaterBillDataService {
  constructor(
    @loopbackService(EnergyConsumptionProvider)
    private service: EnergyConsumptionProvider,
  ) {}

  getAll(filter?: Filter<WaterConsumption>): Promise<WaterConsumption[]> {
    return this.service.parseCSVWithTransform<WaterConsumption>({
      filepath: path.resolve('./data/water_bill_data.csv'),
      filter,
      transformer(row) {
        return new WaterConsumption({
          consumption: parseInt(row[8]),
          month: parseInt(row[5]),
          year: parseInt(row[6]),
        });
      },
    });
  }

  sort(data: WaterConsumption[]) {
    return this.service.sort<WaterConsumption>(data);
  }
}
