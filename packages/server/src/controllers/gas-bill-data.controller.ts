import {service as loopbackService} from '@loopback/core';
import {Filter} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {ResponseShape} from '.';
import {GasConsumption} from '../models';
import {GasBillDataService} from '../services';

export class GasBillDataController {
  constructor(
    @loopbackService(GasBillDataService)
    private service: GasBillDataService,
  ) {}

  @get('/gas-bill-data', {
    responses: {
      '200': {
        description: 'Array of GasConsumption model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(GasConsumption, {
                includeRelations: true,
              }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(GasConsumption)
    filter?: Filter<GasConsumption>,
  ): Promise<ResponseShape<GasConsumption>> {
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
