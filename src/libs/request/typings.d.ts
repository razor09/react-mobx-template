export type RequestMethod = 'get' | 'post' | 'put' | 'delete'

export type QueryParamsKey = string

export type QueryParamsValue = string | number | boolean

export type ErrorCallback<E extends object = object> = (error: E) => void

export interface QueryParams {
  [key: QueryParamsKey]: QueryParamsValue
}

export interface RequestBaseConfig {
  baseUrl: string
  headers: HeadersInit
  credentials: RequestCredentials
}

export interface RequestCallConfig<B extends object, Q extends QueryParams> {
  method: RequestMethod
  endpoint: string
  queryParams?: Q
  body?: B
}
