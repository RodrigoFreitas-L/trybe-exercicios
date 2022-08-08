const fs = require('fs').promises;

const arrayToFile = async () => {
  // const string = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  // const createFiles = string.map((stringItem, i) => fs.writeFile(`./file${i + 1}.txt`, stringItem));

  // await Promise.all(createFiles);

  const readFile1 = fs.readFile('./file1.txt', 'utf-8');
  const readFile2 = fs.readFile('./file2.txt', 'utf-8');
  const readFile3 = fs.readFile('./file3.txt', 'utf-8');
  const readFile4 = fs.readFile('./file4.txt', 'utf-8');
  const readFile5 = fs.readFile('./file5.txt', 'utf-8');
  
  const allReadedFiles = [readFile1, readFile2, readFile3, readFile4, readFile5];

  const getAllFiles = await Promise.all(allReadedFiles);
  const joinFiles = getAllFiles.join(' ');

  await fs.writeFile('./allFiles.txt', joinFiles);
}

arrayToFile();