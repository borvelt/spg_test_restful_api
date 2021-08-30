"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricityBillDataController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const services_1 = require("../services");
let ElectricityBillDataController = class ElectricityBillDataController {
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
    rest_1.get('/electricity-bill-data', {
        responses: {
            '200': {
                description: 'Array of ElectricityConsumption model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.ElectricityConsumption, {
                                includeRelations: true,
                            }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ElectricityConsumption)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ElectricityBillDataController.prototype, "find", null);
ElectricityBillDataController = tslib_1.__decorate([
    tslib_1.__param(0, core_1.service(services_1.ElectricityBillDataService)),
    tslib_1.__metadata("design:paramtypes", [services_1.ElectricityBillDataService])
], ElectricityBillDataController);
exports.ElectricityBillDataController = ElectricityBillDataController;
//# sourceMappingURL=electricity-bill-data.controller.js.map