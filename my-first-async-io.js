const fs = require("fs");
const file = process.argv[2];

fs.readFile(file, "utf8", function (err, myFile) {
  if (err) {
    return console.log(err);
  }
  const numbLines = myFile.split("\n").length - 1;
  console.log(numbLines);
});
