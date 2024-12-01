import { ClassName, ClassNameCollection, Indentation, Pipe, Property, PropertyOrList } from './typings'

export const isString = (propertyOrList: PropertyOrList): propertyOrList is string => {
  return typeof propertyOrList === 'string'
}

export const isArray = (propertyOrList: PropertyOrList): propertyOrList is Property[] => {
  return Array.isArray(propertyOrList)
}

export const stringify = (value: PropertyOrList, space?: Indentation): string => {
  return JSON.stringify(value, space && null, space)
}

export const toInteger = (value: string): number => {
  return compose(value).pipe(Number).pipe(Math.ceil).pipe(Math.abs).result() || 0
}

export const compose = <T>(value: T): Pipe<T> => {
  return {
    pipe: (callback) => {
      const result = callback(value)
      return compose(result)
    },
    result: () => value,
  }
}

export const generateClassName = (className: ClassName, classNameCollection?: ClassNameCollection): string => {
  const result = isString(className) ? className : className.join(' ')
  if (classNameCollection) {
    return Object.keys(classNameCollection).reduce((value, className) => {
      return classNameCollection[className] ? `${value} ${className}` : value
    }, result)
  } else {
    return result
  }
}
