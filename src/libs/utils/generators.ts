import { isString } from './helpers'
import { ClassName, ClassNameCollection } from './typings'

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
