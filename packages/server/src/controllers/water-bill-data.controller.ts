import {service as loopbackService} from '@loopback/core';
import {Filter} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {ResponseShape} from '.';
import {WaterConsumption} from '../models';
import {WaterBillDataService} from '../services';

export class WaterBillDataController {
  constructor(
    @loopbackService(WaterBillDataService)
    private service: WaterBillDataService,
  ) {}

  @get('/water-bill-data', {
    responses: {
      '200': {
        description: 'Array of WaterConsumption model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(WaterConsumption, {
                includeRelations: true,
              }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(WaterConsumption)
    filter?: Filter<WaterConsumption>,
  ): Promise<ResponseShape<WaterConsumption>> {
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
