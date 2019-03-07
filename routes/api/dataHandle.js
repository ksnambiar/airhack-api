const express = require('express');
const router = express.Router();

const {dataBase} = require('../../config/config');


//search by keys()

//all MSN details
router.get('/search/MSN/:value',(req,res)=>{
    let value=req.params.value;
    let airData = dataBase.ref("planes/MSN");
    airData.orderByKey().once('value').then(snapshot=>{
        let dat=snapshot.val()
        let responseData=Object.keys(dat).map(obj=>{
            return obj.includes(value)?obj:null
        })
        res.status(200).json({queryRes:responseData})
    })
    .catch(err=>{
        res.status({error:err})
    })
})

router.get('/search/:para/:value',(req,res)=>{
    let value=req.params.value;
    let param= req.params.para;
    let airData = dataBase.ref('planes/MSN');
    airData.once('value').then(snapshot=>{
        let dat = snapshot.val()
        let keyData = Object.keys(dat);
        let response=[]
        keyData.map(key=>{
            
            let datArray=dat[key]
            datArray.map(obj=>{
                obj[param].includes(value)?response.push(obj[param]):null;
            })
        })
        res.status(200).json({queryData:response})
    }).catch(err=>{
        res.status(400).json({error:err})
    })  
})

//searching by sub parameters


module.exports = router;