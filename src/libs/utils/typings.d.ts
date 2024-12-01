export type Indentation = 2 | 4

export type Property = string | number | boolean | null | object

export type PropertyOrList = Property | Property[]

export type ClassName = string | string[]

export type StringOrNumber = string | number

export interface ClassNameCollection {
  [className: string]: boolean
}

export interface Pipe<T> {
  pipe: <R>(callback: (value: T) => R) => Pipe<R>
  result: () => T
}
