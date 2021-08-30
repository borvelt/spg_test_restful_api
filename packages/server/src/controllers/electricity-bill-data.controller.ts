import {service as loopbackService} from '@loopback/core';
import {Filter} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {ResponseShape} from '.';
import {ElectricityConsumption} from '../models';
import {ElectricityBillDataService} from '../services';

export class ElectricityBillDataController {
  constructor(
    @loopbackService(ElectricityBillDataService)
    private service: ElectricityBillDataService,
  ) {}

  @get('/electricity-bill-data', {
    responses: {
      '200': {
        description: 'Array of ElectricityConsumption model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ElectricityConsumption, {
                includeRelations: true,
              }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ElectricityConsumption)
    filter?: Filter<ElectricityConsumption>,
  ): Promise<ResponseShape<ElectricityConsumption>> {
    try {
      const data = await this.service.getAll(filter);
      const sortedData = this.service.sort(data);
      return {
        ok: true,
        data: sortedData,
        error: '',
      };
    } catch (e) {
      return {
        ok: false,
        data: [],
        error: e.toString(),
      };
    }
  }
}
