const express = require('express');
const app = express()
const dataHandle = require('./routes/api/dataHandle');

app.get('/',(req,res)=>{
    res.status(200).json({message:"welcome to aerothon data api"})
})


//TODO: data manipulation

app.use('/api/data',dataHandle);


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("airhack-api running on port "+port)
})