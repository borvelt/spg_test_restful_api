export * from './electricity-bill-data.controller';
export * from './gas-bill-data.controller';
export * from './water-bill-data.controller';
export declare type ResponseShape<T> = {
    ok: boolean;
    data: T[];
    error: string;
};
