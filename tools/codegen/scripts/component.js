const { mkdirSync, writeFileSync } = require('fs');
const { appComponentsFolder, isNewComponent, insertContent } = require('./boilerplate');

process.argv
  .filter((_, index) => index > 1)
  .forEach((name) => {
    if (isNewComponent(name)) {
      const folder = `${appComponentsFolder}/${name}`;

      mkdirSync(folder);

      writeFileSync(`${folder}/${name}.tsx`, insertContent('component', name));
      writeFileSync(`${folder}/${name}.d.ts`, insertContent('model', name));
      writeFileSync(`${folder}/${name}.scss`, insertContent('style', name));
      writeFileSync(`${folder}/index.ts`, insertContent('index', name));
    }
  });
