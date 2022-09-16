export type RequestMethod = 'get' | 'post' | 'put' | 'delete';

export type QueryParamsKey = string;

export type QueryParamsValue = string | number | boolean;

export type QueryParams = Record<QueryParamsKey, QueryParamsValue | QueryParamsValue[]>;
