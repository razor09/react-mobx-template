import { Resource } from '../api/typings'
import { StringOrNumber, StringOrNumberOrBoolean } from '../utils/typings'

export type RequestMethod = 'get' | 'post' | 'put' | 'delete'

export type ErrorCallback<E extends object> = (error: E) => void

export type OnReadStream = (stream: Stream) => void

export type Endpoint = Resource | [Resource, ...StringOrNumber[]]

export interface QueryParams {
  [key: string]: StringOrNumberOrBoolean
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
