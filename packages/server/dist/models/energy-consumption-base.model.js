"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnergyConsumptionBase = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let EnergyConsumptionBase = class EnergyConsumptionBase extends repository_1.Model {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], EnergyConsumptionBase.prototype, "createdBy", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], EnergyConsumptionBase.prototype, "createdDate", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], EnergyConsumptionBase.prototype, "lastModifiedBy", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], EnergyConsumptionBase.prototype, "lastModifiedDate", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], EnergyConsumptionBase.prototype, "year", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], EnergyConsumptionBase.prototype, "month", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], EnergyConsumptionBase.prototype, "totalCharge", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], EnergyConsumptionBase.prototype, "consumption", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], EnergyConsumptionBase.prototype, "blendedRate", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], EnergyConsumptionBase.prototype, "buildingId", void 0);
EnergyConsumptionBase = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], EnergyConsumptionBase);
exports.EnergyConsumptionBase = EnergyConsumptionBase;
//# sourceMappingURL=energy-consumption-base.model.js.map