const { writeFileSync } = require('fs');
const { storeFolder, isNewStore, insertContent } = require('./boilerplate');

process.argv
  .filter((_, index) => index > 1)
  .forEach((name) => {
    if (isNewStore(name)) {
      writeFileSync(`${storeFolder}/${name}.ts`, insertContent('store', name));
    }
  });
