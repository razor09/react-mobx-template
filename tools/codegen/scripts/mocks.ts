import { writeFileSync } from 'fs';
import { insertContent, isNewMocks, mocksFolder } from './boilerplate';

process.argv
  .filter((_, index) => index > 1)
  .forEach((name) => {
    if (isNewMocks(name)) {
      writeFileSync(`${mocksFolder}/${name}.ts`, insertContent('mocks', name));
    }
  });
