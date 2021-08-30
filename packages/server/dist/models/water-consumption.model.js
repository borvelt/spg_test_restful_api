"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterConsumption = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const energy_consumption_base_model_1 = require("./energy-consumption-base.model");
let WaterConsumption = class WaterConsumption extends energy_consumption_base_model_1.EnergyConsumptionBase {
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
], WaterConsumption.prototype, "waterRate", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], WaterConsumption.prototype, "waterCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], WaterConsumption.prototype, "waterBasicServiceCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], WaterConsumption.prototype, "totalWaterCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], WaterConsumption.prototype, "sewerRate", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], WaterConsumption.prototype, "sewerCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], WaterConsumption.prototype, "sewerBasicServiceCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], WaterConsumption.prototype, "drianageServiceCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], WaterConsumption.prototype, "totalSewerCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], WaterConsumption.prototype, "tax", void 0);
WaterConsumption = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], WaterConsumption);
exports.WaterConsumption = WaterConsumption;
//# sourceMappingURL=water-consumption.model.js.map