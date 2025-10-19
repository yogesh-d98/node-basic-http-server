//Streams

const fs = require('fs');

const readStream = fs.createReadStream('./mock-docs/HugeFile.txt',{encoding:'utf-8'}); //importing file to read it in streams
const writeStream = fs.createWriteStream('./mock-docs/CopyHugeFile.txt'); //write a huge file using streams
// readStream.on('data',(chunk)=>{
//     // console.log('\nnew buffer\n');
//     // console.log(chunk)
//     // console.log(chunk.toString()); //instead of using to string we can also encoding utf 8 in createReadStream method
//     writeStream.write(chunk);
// });

//if a process of reading a file and writing it is done using streams then it is called piping

readStream.pipe(writeStream);