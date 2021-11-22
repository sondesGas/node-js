const fs = require("fs");


const myFile = fs.readFileSync(process.argv[2], 'utf8');
const numbLines = myFile.split("\n").length - 1;
console.log(numbLines);
