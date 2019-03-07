const express = require('express');
const app = express()
const dataHandle = require('./routes/api/dataHandle');

app.get('/',(req,res)=>{
    res.status(200).json({message:"welcome to aerothon data api"})
})


//TODO: data manipulation

app.use('/api/data',dataHandle);
