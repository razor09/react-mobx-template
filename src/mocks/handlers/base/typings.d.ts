import { DelayMode } from 'msw'
import { ResponseStatus } from '../../../libs/http-client/typings'
import { StringOrNumber, StringOrNumberOrBoolean } from '../../../libs/utils/typings'

export declare const status = ResponseStatus.BadRequest

export type MaybeError<T> = T | FailPayload

export type DurationOrMode = DelayMode | number

export interface PathParams {
  id: StringOrNumber
}

export interface QueryParams {
  id: StringOrNumberOrBoolean
}

export interface FailPayload {
  message: 'default'
}

export const enum Count {
  Minimal = 1,
}
