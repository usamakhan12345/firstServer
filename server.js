const express = require('express');
const app = express();
const port = 3000; 

 

app.get( '/',(req,res)=>{
    res.send('<h1>Hello Usama you are on Home Page</h1>');
})

app.get('/contact',(req,res)=>
{
     res.send(`<h1>Hello Usama on Contact Page</h1>`);
})

app.get('/about',(req,res)=>
{
     res.send(`<h1>Hello Usama on About Page</h1>`);
})



app.listen(port,()=>
{
    console.log(" Program Start ");
})