"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricityConsumption = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const energy_consumption_base_model_1 = require("./energy-consumption-base.model");
let ElectricityConsumption = class ElectricityConsumption extends energy_consumption_base_model_1.EnergyConsumptionBase {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ElectricityConsumption.prototype, "electricityRate", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ElectricityConsumption.prototype, "energyCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ElectricityConsumption.prototype, "transactionCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ElectricityConsumption.prototype, "distributionCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ElectricityConsumption.prototype, "localAccountCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ElectricityConsumption.prototype, "tax", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ElectricityConsumption.prototype, "rateRiders", void 0);
ElectricityConsumption = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ElectricityConsumption);
exports.ElectricityConsumption = ElectricityConsumption;
//# sourceMappingURL=electricity-consumption.model.js.map