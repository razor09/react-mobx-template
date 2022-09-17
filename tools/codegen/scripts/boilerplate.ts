import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { File } from './typings';

const boilerplate = resolve(__dirname, '../boilerplate');
const appComponentsFolder = resolve(__dirname, '../../../src/components/app');
const uiComponentsFolder = resolve(__dirname, '../../../src/components/ui');
const mocksFolder = resolve(__dirname, '../../../src/mocks');
const storeFolder = resolve(__dirname, '../../../src/store');

const isNewComponent = (name: string): boolean => {
  return !existsSync(`${appComponentsFolder}/${name}`) && !existsSync(`${uiComponentsFolder}/${name}`);
};

const isNewMocks = (name: string): boolean => {
  return !existsSync(`${mocksFolder}/${name}`);
};

const isNewStore = (name: string): boolean => {
  return !existsSync(`${storeFolder}/${name}`);
};

const insertContent = (file: File, name: string): string => {
  return readFileSync(`${boilerplate}/${file}`).toString().replace(/name/g, name);
};

export { appComponentsFolder, mocksFolder, storeFolder, isNewComponent, isNewMocks, isNewStore, insertContent };
