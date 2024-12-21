import { DefaultBodyType, delay, http, HttpHandler, HttpResponse, PathParams } from 'msw'
import { Resource } from '../../../libs/api/typings'
import { MaybeError } from '../base/typings'
import { parsePathParams, parseQueryParams } from '../base/url-parser'
import { durationOrMode } from '../base/utils'
import { mock } from './mock'

export const handlers: HttpHandler[] = [
  http.get<PathParams, DefaultBodyType, MaybeError<object[]>>(Resource.Base, async (info) => {
    const { id } = parseQueryParams(info.request.url)
    const items = mock.all(id)
    await delay(durationOrMode)
    return HttpResponse.json(items)
  }),
  http.get<PathParams, DefaultBodyType, MaybeError<object>>(Resource.Base, async (info) => {
    const { id } = parsePathParams(info.params)
    const object = mock.one(id)
    await delay(durationOrMode)
    return HttpResponse.json(object)
  }),
  http.post<PathParams, object, MaybeError<object>>(Resource.Base, async (info) => {
    const body = await info.request.json()
    const object = mock.create(body)
    await delay(durationOrMode)
    return HttpResponse.json(object)
  }),
  http.put<PathParams, object, MaybeError<object>>(Resource.Base, async (info) => {
    const { id } = parsePathParams(info.params)
    const body = await info.request.json()
    const object = mock.update(id, body)
    await delay(durationOrMode)
    return HttpResponse.json(object)
  }),
  http.delete<PathParams, DefaultBodyType, MaybeError<object>>(Resource.Base, async (info) => {
    const { id } = parsePathParams(info.params)
    const object = mock.delete(id)
    await delay(durationOrMode)
    return HttpResponse.json(object)
  }),
]
