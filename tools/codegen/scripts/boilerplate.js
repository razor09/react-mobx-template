const { existsSync, readFileSync } = require('fs');
const { resolve } = require('path');

const boilerplate = resolve(__dirname, '../boilerplate');
const appComponentsFolder = resolve(__dirname, '../../../src/components/app');
const uiComponentsFolder = resolve(__dirname, '../../../src/components/ui');
const mocksFolder = resolve(__dirname, '../../../src/mocks');
const storeFolder = resolve(__dirname, '../../../src/store');

const isNewComponent = (name) => {
  return !existsSync(`${appComponentsFolder}/${name}`) && !existsSync(`${uiComponentsFolder}/${name}`);
};

const isNewMocks = (name) => {
  return !existsSync(`${mocksFolder}/${name}`);
};

const isNewStore = (name) => {
  return !existsSync(`${storeFolder}/${name}`);
};

const insertContent = (file, name) => {
  return readFileSync(`${boilerplate}/${file}`).toString().replace(/name/g, name);
};

module.exports = {
  appComponentsFolder,
  mocksFolder,
  storeFolder,
  isNewComponent,
  isNewMocks,
  isNewStore,
  insertContent,
};
