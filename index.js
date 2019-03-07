const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const addData = require('./routes/api/post/post');
const dataHandle = require('./routes/api/dataHandle');
app.get('/',(req,res)=>{
    res.status(200).json({message:"welcome to aerothon data api"})
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//TODO: data manipulation

app.use('/api/data',dataHandle);
app.use('/api/add',addData)



const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("airhack-api running on port "+port)
})