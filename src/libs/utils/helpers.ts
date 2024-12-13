import { isArray, isBooleanPattern, isObject, isPrimitive, isString } from './guards'
import { ClassName, ClassNameCollection, StringOrNumber } from './typings'

export const toInteger = (value: string): number => {
  const number = Number(value)
  const ceil = Math.ceil(number)
  return ceil || 0
}

export const toBoolean = (value: StringOrNumber): boolean => {
  if (isString(value)) {
    return isBooleanPattern(value) ? JSON.parse(value) : false
  } else {
    return value === 0 ? false : true
  }
}

export const isEqual = (first: unknown, second: unknown): boolean => {
  if (isPrimitive(first) && isPrimitive(second)) {
    return first === second
  }
  if (isObject(first) && isObject(second)) {
    const firstKeys = Object.keys(first) as never[]
    const secondKeys = Object.keys(second) as never[]
    return isEqual(firstKeys, secondKeys) && firstKeys.every((key) => isEqual(first[key], second[key]))
  }
  if (isArray(first) && isArray(second)) {
    return isEqual(first.length, second.length) && first.every((value) => second.some((other) => isEqual(value, other)))
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
