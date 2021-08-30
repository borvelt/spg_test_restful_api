"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterBillDataController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const services_1 = require("../services");
let WaterBillDataController = class WaterBillDataController {
    constructor(service) {
        this.service = service;
    }
    async find(filter) {
        try {
            const data = await this.service.getAll(filter);
            const sortedData = this.service.sort(data);
            return {
                ok: true,
                data: sortedData,
                error: '',
            };
        }
        catch (e) {
            return {
                ok: false,
                data: [],
                error: e.toString(),
            };
        }
    }
};
tslib_1.__decorate([
    rest_1.get('/water-bill-data', {
        responses: {
            '200': {
                description: 'Array of WaterConsumption model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.WaterConsumption, {
                                includeRelations: true,
                            }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.WaterConsumption)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WaterBillDataController.prototype, "find", null);
WaterBillDataController = tslib_1.__decorate([
    tslib_1.__param(0, core_1.service(services_1.WaterBillDataService)),
    tslib_1.__metadata("design:paramtypes", [services_1.WaterBillDataService])
], WaterBillDataController);
exports.WaterBillDataController = WaterBillDataController;
//# sourceMappingURL=water-bill-data.controller.js.map