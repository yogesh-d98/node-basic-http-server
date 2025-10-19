//File system
const fs = require('fs'); //file system module

console.log(fs);


if (!fs.existsSync('./docs')) { //checks if folder exits 
    fs.mkdir('./docs', (err) => {  //mkdir - make directory
        if (err) {
            console.log(err.message);
        }
        console.log("folder created")
    })
} else {
    console.log('folder/file not created')
};


console.log('checking mkdir as async func'); //this log will run before creating folder/file if the file/folder is not present already

fs.writeFile('./docs/file.txt', 'checking second file creation', (err) => {  //to create a file -- the second argument is the content of the file .. if its changed for every run the existing content will be overwritten 
    if (err) {
        console.log(err.message);
    } else {
        console.log('file created')
    }
});

if (fs.existsSync('./docs/file.txt')) { //checks if file exits 

    fs.readFile('./docs/file.txt', (err, data) => {
        if (err) {
            console.log(err.message)
        } else if (data) {
            console.log(data)  //prints buffer data if data is not converted to string
            console.log(data.toString());  //prints the actual content of the file
        }
    })

} else {
    console.log('file not found')
}

if (fs.existsSync('./docs/file.txt')) {   //deleting a file

    fs.unlink('./docs/file.txt',(err)=>{
        if(err){
            console.log(err.message)
        } else{
            console.log('file deleted')
        }
    })

 };

if (fs.existsSync('./docs')) {  //deleting a folder
    fs.rmdir('./docs', (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('folder deleted')
        }
    });
}