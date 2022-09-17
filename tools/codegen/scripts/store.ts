import { writeFileSync } from 'fs';
import { insertContent, isNewStore, storeFolder } from './boilerplate';

process.argv
  .filter((_, index) => index > 1)
  .forEach((name) => {
    if (isNewStore(name)) {
      writeFileSync(`${storeFolder}/${name}.ts`, insertContent('store', name));
    }
  });
