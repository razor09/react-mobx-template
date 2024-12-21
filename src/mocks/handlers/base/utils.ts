import { HttpResponseInit } from 'msw'
import { Error } from '../../../libs/fallback/typings'
import { ResponseStatus } from '../../../libs/http-client/typings'
import { DurationOrMode } from './typings'

export const exceptions = ['', null]

export const durationOrMode: DurationOrMode = 'real'

export const errorPayload: Error = {}

export const errorResponse: HttpResponseInit = {
  status: ResponseStatus.BadRequest,
}
