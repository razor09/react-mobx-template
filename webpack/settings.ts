import { ProxyConfigArray } from 'webpack-dev-server'
import { Args } from './typings'

export const host = 'localhost'
export const port = 4200
export const origin = ''

const baseUrl = ''
const baseUrlOrPath = baseUrl || '/'

export const getIsDevelopment = (args: Args): boolean => {
  return args.mode === 'development'
}

export const getIsProduction = (args: Args): boolean => {
  return args.mode === 'production'
}

export const getIsMocksOn = (args: Args): boolean => {
  return getIsDevelopment(args) && args.name === 'mocks'
}

export const getIsMocksOff = (args: Args): boolean => {
  return getIsDevelopment(args) && args.name !== 'mocks'
}

export const getBaseUrl = (args: Args): string => {
  return getIsMocksOn(args) ? '' : baseUrl
}

export const getProxy = (args: Args): ProxyConfigArray => {
  if (getIsMocksOff(args)) {
    return [
      {
        context: baseUrlOrPath,
        target: origin.concat(baseUrlOrPath),
      },
    ]
  }
}
