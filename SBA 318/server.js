const express = require("express");
const path=require('path')
const gameRoutes=require('./app') 

const app=express()
const PORT=3008;

app.use(express.urlencoded({ extended:true }));
app.use( express.json( ) );
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine', 'ejs');
app.set( 'views', path.join(__dirname ) );

app.get('/',(req,res)=>{
res.redirect('/games')
});

app.use('/games',gameRoutes );

app.listen(PORT,()=>{
console.log(`server is running http://localhost:${PORT}`)
})