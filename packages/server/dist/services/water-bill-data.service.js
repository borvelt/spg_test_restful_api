"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterBillDataService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const path_1 = tslib_1.__importDefault(require("path"));
const models_1 = require("../models");
const energy_consumption_service_1 = require("./energy-consumption.service");
let WaterBillDataService = class WaterBillDataService {
    constructor(service) {
        this.service = service;
    }
    getAll(filter) {
        return this.service.parseCSVWithTransform({
            filepath: path_1.default.resolve('./data/water_bill_data.csv'),
            filter,
            transformer(row) {
                return new models_1.WaterConsumption({
                    consumption: parseInt(row[8]),
                    month: parseInt(row[5]),
                    year: parseInt(row[6]),
                });
            },
        });
    }
    sort(data) {
        return this.service.sort(data);
    }
};
WaterBillDataService = tslib_1.__decorate([
    core_1.injectable({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__param(0, core_1.service(energy_consumption_service_1.EnergyConsumptionProvider)),
    tslib_1.__metadata("design:paramtypes", [energy_consumption_service_1.EnergyConsumptionProvider])
], WaterBillDataService);
exports.WaterBillDataService = WaterBillDataService;
//# sourceMappingURL=water-bill-data.service.js.map