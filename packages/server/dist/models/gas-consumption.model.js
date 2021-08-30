"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasConsumption = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const energy_consumption_base_model_1 = require("./energy-consumption-base.model");
let GasConsumption = class GasConsumption extends energy_consumption_base_model_1.EnergyConsumptionBase {
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
], GasConsumption.prototype, "gasCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], GasConsumption.prototype, "demandCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], GasConsumption.prototype, "deliveryCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], GasConsumption.prototype, "rateRiders", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], GasConsumption.prototype, "minucipalFranchiseeFee", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], GasConsumption.prototype, "carbonTax", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], GasConsumption.prototype, "adminFee", void 0);
GasConsumption = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], GasConsumption);
exports.GasConsumption = GasConsumption;
//# sourceMappingURL=gas-consumption.model.js.map