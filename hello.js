console.log("hello");


const hello = (name) =>{
    console.log(`hello ${name}`)
};

hello("yogesh");
// console.log(window); // not defined because window is not available in node js env its a dom manipulation object
console.log(global);

setTimeout(()=>{
    console.log("timeout function");
    clearInterval(intervalFunction )
},6000);

const intervalFunction = setInterval(()=>{
    console.log("this is an interval functiion")
},3000);

console.log(__dirname);  //current directory path
console.log(__filename); //current file path