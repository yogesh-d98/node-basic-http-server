const imports = require('./data'); //runs the file when require is used

//if only names was expected we can import it as 
const {names} = require('./data');

console.log(imports); //prints entire object

console.log(imports.names); //prints only names

console.log(names); //only prints names as we only imported names

const os = require('os'); //default modules of node js 
console.log(os.homedir()); //prints home directory of current user