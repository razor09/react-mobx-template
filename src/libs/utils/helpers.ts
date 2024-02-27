import { PropertyOrList } from './typings'

export const isString = (propertyOrList: PropertyOrList): propertyOrList is string => {
  return typeof propertyOrList === 'string'
}
