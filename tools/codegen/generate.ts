import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { TypeOfFile, ValidProcessArgs } from './typings'

const boilerplateFolder = resolve('tools/boilerplate')
const appComponentsFolder = resolve('src/components/app')
const iconsComponentsFolder = resolve('src/components/icons')
const uiComponentsFolder = resolve('src/components/ui')
const mocksFolder = resolve('src/mocks')
const storeFolder = resolve('src/store')

const insertContent = (typeOfFile: TypeOfFile, name: string): string => {
  return readFileSync(`${boilerplateFolder}/${typeOfFile}`, 'utf-8').replace(/name/g, name)
}

const isNewComponent = (name: string): boolean => {
  return (
    !existsSync(`${appComponentsFolder}/${name}`) &&
    !existsSync(`${iconsComponentsFolder}/${name}`) &&
    !existsSync(`${uiComponentsFolder}/${name}`)
  )
}

const isNewMocks = (name: string): boolean => {
  return !existsSync(`${mocksFolder}/${name}`)
}

const isNewStore = (name: string): boolean => {
  return !existsSync(`${storeFolder}/${name}`)
}

const createComponent = (name: string): void => {
  if (isNewComponent(name)) {
    const folder = `${appComponentsFolder}/${name}`
    mkdirSync(folder)
    writeFileSync(`${folder}/index.tsx`, insertContent('component', name))
    writeFileSync(`${folder}/typings.d.ts`, insertContent('typings', name))
    writeFileSync(`${folder}/style.scss`, insertContent('style', name))
  }
}

const createMocks = (name: string): void => {
  if (isNewMocks(name)) {
    writeFileSync(`${mocksFolder}/${name}.ts`, insertContent('mocks', name))
  }
}

const createStore = (name: string): void => {
  if (isNewStore(name)) {
    writeFileSync(`${storeFolder}/${name}.ts`, insertContent('store', name))
  }
}

const generate = (): void => {
  const [typeOfCodegen, ...names] = process.argv.filter((_, index) => index > 1) as ValidProcessArgs
  names.forEach((name) => {
    switch (typeOfCodegen) {
      case 'component':
        createComponent(name)
        break
      case 'mocks':
        createMocks(name)
        break
      case 'store':
        createStore(name)
        break
    }
  })
}

generate()
