//express js

const express = require('express');

const app =express();
const morgan = require('morgan');

app.listen(4000);

app.use(morgan('dev')); // a third party middleware for logging req details
// app.use((req,res ,next)=>{  //midleware function setup between req and res
//     console.log('Middleware 1 :Request received');
//     // console.log(req.host);
//     // console.log(req.path);
//     // console.log(req.method);
//     next();  //next need to be declared to move the middleware to the next functions or operations to be done further
// });



app.get('/',(req,res)=>{
// res.status(200).send('hi there from express js');
res.sendFile('./mock-docs/index.html',{root:__dirname}); //__dirname gives the current directory path
});

app.get('/privacypolicy',(req,res)=>{
// res.status(200).send('hi there from express js');
res.sendFile('./mock-docs/privacypolicy.html',{root:__dirname}); //__dirname gives the current directory path
});

app.get('/about',(req,res)=>{
// res.status(200).send('hi there from express js');
res.sendFile('./mock-docs/about.html',{root:__dirname}); //__dirname gives the current directory path
});

// app.use((req,res,next)=>{
//     console.log('middleware 2');
//     next();
// })
app.get('/about-us',(req,res)=>{
    res.redirect('/about');     //redirecting to about url
})


app.use((req,res)=>{    //one of a middleware to handle 404 errors should be writen at the end after all routes
    res.status(404).sendFile('./mock-docs/notfound.html',{root:__dirname});
});