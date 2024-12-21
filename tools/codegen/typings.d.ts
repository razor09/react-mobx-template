export type TypeOfCodegen = 'component' | 'mocks' | 'store'

export type TypeOfFile = TypeOfCodegen | 'typings' | 'style'

export type ValidProcessArgs = [TypeOfCodegen, ...string[]]
