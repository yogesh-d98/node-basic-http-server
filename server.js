//server setup

const http = require('http'); //http module
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req, res) => {
    // console.log('req made');
    // console.log(req.url); //url of the req made -> shows the end point important for routing
    // console.log(req.method);

    res.setHeader('content-type', 'text/html') //setting header -> giving info about the type of response
    // res.write('<h1>response from server</h1>'); //res.write is not recommended for sending res..  
    // res.write('check my response');
    console.log(req.url);

    let path = './mock-docs/'
    if ( req.url == '/') {
        path += 'index.html';
        res.statusCode = 200; //setting status code for success
    }else if(req.url == '/home' ){
        res.setHeader('Location','/'); //redirecting / to /home 
        res.statusCode = 301; //setting status code for redirect
    } 
    else if (req.url == '/about') {
        path += 'about.html';
        res.statusCode = 200;
    } else if (req.url == '/privacypolicy') {
        path += 'privacypolicy.html';
        res.statusCode = 200;
    } else {
        path += 'notfound.html'; //page not found
        res.statusCode = 404; //setting status code for not found page
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err.message);
            res.end(); //if error occurs end the response
        } else {
            // res.write(data); //sending the html file as response
            // res.end();

            res.end(data); // instead of using res.write and res.end separately we can use res.end to send the data and end the response in one go
        }
    })
    // res.end(); //end the response
});

server.listen(4000, 'localhost', () => {
    console.log('listening on port 4000');
    console.log(_.random(15,25));
});
