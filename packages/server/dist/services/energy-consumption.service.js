"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnergyConsumptionProvider = void 0;
const tslib_1 = require("tslib");
const parse_1 = require("@fast-csv/parse");
const core_1 = require("@loopback/core");
const fs_1 = tslib_1.__importDefault(require("fs"));
let EnergyConsumptionProvider = class EnergyConsumptionProvider {
    constructor( /* Add @inject to inject parameters */) { }
    formatDate({ month, year, }) {
        return `${year.toString()}-${month.toString().padStart(2, '0')}-01`;
    }
    parseCSVWithTransform({ filepath, filter, transformer, }) {
        return new Promise((resolve, reject) => {
            const filteredData = [];
            fs_1.default.createReadStream(filepath)
                .pipe(parse_1.parse())
                .on('error', error => reject(error))
                .on('data', (row) => {
                // I've hacked Where AndClause
                const where = filter === null || filter === void 0 ? void 0 : filter.where;
                const yearAndMonthFilter = where === null || where === void 0 ? void 0 : where.and[0];
                const rowTime = new Date(this.formatDate({ month: row[5], year: row[6] })).getTime();
                const filterTimeFrom = new Date(this.formatDate({
                    month: yearAndMonthFilter.month.between[0],
                    year: yearAndMonthFilter.year.between[0],
                })).getTime();
                const filterTimeTo = new Date(this.formatDate({
                    month: yearAndMonthFilter.month.between[1],
                    year: yearAndMonthFilter.year.between[1],
                })).getTime();
                if (rowTime > filterTimeFrom && rowTime < filterTimeTo) {
                    filteredData.push(transformer(row));
                }
            })
                .on('end', () => resolve(filteredData));
        });
    }
    sort(data) {
        return data.slice(0).sort((a, b) => {
            return (new Date(this.formatDate({ month: a.month, year: a.year })).getTime() -
                new Date(this.formatDate({ month: b.month, year: b.year })).getTime());
        });
    }
};
EnergyConsumptionProvider = tslib_1.__decorate([
    core_1.injectable({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__metadata("design:paramtypes", [])
], EnergyConsumptionProvider);
exports.EnergyConsumptionProvider = EnergyConsumptionProvider;
//# sourceMappingURL=energy-consumption.service.js.map