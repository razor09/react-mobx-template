import { ProxyConfigArray } from 'webpack-dev-server'
import { Args } from './typings'

export const host = 'localhost'
export const port = 4200
export const origin = ''

const baseUrl = ''
const baseUrlOrPath = baseUrl || '/'

export const isDevelopment = (args: Args): boolean => {
  return args.mode === 'development'
}

export const isProduction = (args: Args): boolean => {
  return args.mode === 'production'
}

export const isMocksOn = (args: Args): boolean => {
  return isDevelopment(args) && args.name === 'mocks'
}

const isMocksOff = (args: Args): boolean => {
  return isDevelopment(args) && args.name !== 'mocks'
}

export const getBaseUrl = (args: Args): string => {
  return isMocksOn(args) ? '' : baseUrl
}

export const getProxyConfigArray = (args: Args): ProxyConfigArray => {
  if (isMocksOff(args)) {
    return [
      {
        context: baseUrlOrPath,
        target: origin.concat(baseUrlOrPath),
      },
    ]
  }
}
