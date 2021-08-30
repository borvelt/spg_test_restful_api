import { AnyObject, Filter } from '@loopback/repository';
import path from 'path';
export declare type EnergyConsumption = AnyObject;
export declare class EnergyConsumptionProvider {
    constructor();
    formatDate({ month, year, }: {
        month: string | number;
        year: string | number;
    }): string;
    parseCSVWithTransform<T extends {}>({ filepath, filter, transformer, }: {
        filepath: ReturnType<typeof path.resolve>;
        filter?: Filter<T>;
        transformer: (row: string[]) => T;
    }): Promise<T[]>;
    sort<T extends {
        month: number;
        year: number;
    }>(data: T[]): T[];
}
