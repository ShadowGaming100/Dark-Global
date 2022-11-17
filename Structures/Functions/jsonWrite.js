//CODE

module.export = {
function jsonWrite(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(data), (err) => {
      if (err) {
        reject(err);
      }
      resolve(true);
    });
  });
}
}