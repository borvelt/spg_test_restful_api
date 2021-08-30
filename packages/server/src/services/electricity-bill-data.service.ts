import {
  BindingScope,
  injectable,
  service as loopbackService,
} from '@loopback/core';
import {Filter} from '@loopback/repository';
import path from 'path';
import {ElectricityConsumption} from '../models';
import {EnergyConsumptionProvider} from './energy-consumption.service';

@injectable({scope: BindingScope.TRANSIENT})
export class ElectricityBillDataService {
  constructor(
    @loopbackService(EnergyConsumptionProvider)
    private service: EnergyConsumptionProvider,
  ) {}

  getAll(
    filter?: Filter<ElectricityConsumption>,
  ): Promise<ElectricityConsumption[]> {
    return this.service.parseCSVWithTransform<ElectricityConsumption>({
      filepath: path.resolve('./data/electricity_bill_data.csv'),
      filter,
      transformer(row) {
        return new ElectricityConsumption({
          consumption: parseInt(row[8]),
          month: parseInt(row[5]),
          year: parseInt(row[6]),
        });
      },
    });
  }

  sort(data: ElectricityConsumption[]) {
    return this.service.sort<ElectricityConsumption>(data);
  }
}
