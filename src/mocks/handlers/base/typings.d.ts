import { DelayMode } from 'msw'
import { StringOrNumber, StringOrNumberOrBoolean } from '../../../libs/utils/typings'

export type MaybeError<T> = T | object

export type DurationOrMode = DelayMode | number

export interface PathParams {
  id: StringOrNumber
}

export interface QueryParams {
  id: StringOrNumberOrBoolean
}

export const enum Count {
  Minimal = 1,
}
