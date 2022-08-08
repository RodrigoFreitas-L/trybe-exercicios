import fs from 'fs/promises';

const changeFile = (fileName, fileContent) => {
  fs.writeFile(fileName, fileContent);
  return 'ok';
}

export default changeFile;