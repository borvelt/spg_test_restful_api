import {parse} from '@fast-csv/parse';
import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {AnyObject, Filter} from '@loopback/repository';
import fs from 'fs';
import path from 'path';

export type EnergyConsumption = AnyObject;

@injectable({scope: BindingScope.TRANSIENT})
export class EnergyConsumptionProvider {
  constructor(/* Add @inject to inject parameters */) {}

  formatDate({
    month,
    year,
  }: {
    month: string | number;
    year: string | number;
  }): string {
    return `${year.toString()}-${month.toString().padStart(2, '0')}-01`;
  }

  parseCSVWithTransform<T extends {}>({
    filepath,
    filter,
    transformer,
  }: {
    filepath: ReturnType<typeof path.resolve>;
    filter?: Filter<T>;
    transformer: (row: string[]) => T;
  }): Promise<T[]> {
    return new Promise((resolve, reject) => {
      const filteredData: T[] = [];
      fs.createReadStream(filepath)
        .pipe(parse())
        .on('error', error => reject(error))
        .on('data', (row: string[]) => {
          // I've hacked Where AndClause
          const where: AnyObject | undefined = filter?.where;
          const yearAndMonthFilter = where?.and[0];
          const rowTime = new Date(
            this.formatDate({month: row[5], year: row[6]}),
          ).getTime();
          const filterTimeFrom = new Date(
            this.formatDate({
              month: yearAndMonthFilter.month.between[0],
              year: yearAndMonthFilter.year.between[0],
            }),
          ).getTime();
          const filterTimeTo = new Date(
            this.formatDate({
              month: yearAndMonthFilter.month.between[1],
              year: yearAndMonthFilter.year.between[1],
            }),
          ).getTime();
          if (rowTime > filterTimeFrom && rowTime < filterTimeTo) {
            filteredData.push(transformer(row));
          }
        })
        .on('end', () => resolve(filteredData));
    });
  }

  sort<T extends {month: number; year: number}>(data: T[]) {
    return data.slice(0).sort((a, b) => {
      return (
        new Date(this.formatDate({month: a.month, year: a.year})).getTime() -
        new Date(this.formatDate({month: b.month, year: b.year})).getTime()
      );
    });
  }
}
