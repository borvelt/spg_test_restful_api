import {
  BindingScope,
  injectable,
  service as loopbackService,
} from '@loopback/core';
import {Filter} from '@loopback/repository';
import path from 'path';
import {GasConsumption} from '../models';
import {EnergyConsumptionProvider} from './energy-consumption.service';

@injectable({scope: BindingScope.TRANSIENT})
export class GasBillDataService {
  constructor(
    @loopbackService(EnergyConsumptionProvider)
    private service: EnergyConsumptionProvider,
  ) {}

  async getAll(
    filter?: Filter<GasConsumption>,
  ): Promise<Array<GasConsumption>> {
    return this.service.parseCSVWithTransform<GasConsumption>({
      filepath: path.resolve('./data/gas_bill_data.csv'),
      filter,
      transformer(row) {
        return new GasConsumption({
          consumption: parseInt(row[8]),
          month: parseInt(row[5]),
          year: parseInt(row[6]),
        });
      },
    });
  }
  sort(data: GasConsumption[]) {
    return this.service.sort<GasConsumption>(data);
  }
}
