const express = require('express');
const router = express.Router();

const {dataBase} = require('../../config/config');

//search by keys()

router.get('/MSN',(req,res)=>{
    let airData = dataBase.ref('planes');
    airData.once('value').then(obj=>{
        res.status(200).json({message:"working"})
    }).catch(err=>{
        res.status(400).json({error:err})
    })
})


module.exports = router;