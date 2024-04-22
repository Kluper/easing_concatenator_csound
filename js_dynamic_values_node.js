const path = require('path');
const Max = require('max-api');
const fs = require('fs');

Max.addHandler('writeFtgen', (dirPath, fileName, ...values) => {
  const textContent = values.join(' ');
  const fullPath = path.join(dirPath, fileName + '.txt');
  const table = "f " + fileName + " 0 512 -7 " + textContent;

  fs.writeFileSync(fullPath, table);
  Max.post('File '+fileName+'.txt created successfully.');
});