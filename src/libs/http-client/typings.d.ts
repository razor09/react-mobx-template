import { Resource } from '../api/typings'
import { StringOrNumber } from '../utils/typings'

export type RequestMethod = 'get' | 'post' | 'put' | 'delete'

export type QueryParamsKey = string

export type QueryParamsValue = string | number | boolean

export type ErrorCallback<E extends object> = (error: E) => void

export type OnReadStream = (stream: Stream) => void

export type Endpoint = Resource | [Resource, ...StringOrNumber[]]

export interface QueryParams {
  [key: QueryParamsKey]: QueryParamsValue
}

export interface HttpBaseConfig {
  baseUrl: string
  headers: HeadersInit
  credentials: RequestCredentials
}

export interface HttpCallConfig<Q extends QueryParams, B extends object> {
  method: RequestMethod
  endpoint: Endpoint
  queryParams?: Q
  body?: B
}

export interface Stream {
  value: Uint8Array
  loaded: number
  total: number
  progress: number
}

export interface StreamConfig<Q extends QueryParams> {
  endpoint: Endpoint
  queryParams?: Q
  onReadStream?: OnReadStream
}
