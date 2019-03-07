const express = require('express');
const router = express.Router();
const {dataBase} = require('../../../config/config');

//adding data to MSN
router.post('/planes/addFlight',(req,res)=>{
    //let user = auth.currentUser
    let data = req.body;
    let msn = data["msn"]
    delete data["msn"];
    let msnRef = dataBase.ref('planes/MSN/'+msn+'/');
    msnRef.once('value').then(snapshot=>{
        let data1 = snapshot.val()
        let updates={}
        if(data1===null){
            updates['0']=data;
            msnRef.update(updates).then(obj=>{
                res.status(200).json({message:"added successfully",data:obj})
            })
            .catch(err=>{
                res.status(400).json({error:err})
            })
        }else{
            updates[data1.length]=data;
            msnRef.update(updates).then(obj=>{
                res.status(200).json({message:"added successfully",data:obj})
            }).catch(obj=>{
                res.status(200).json({error:err})
            })
        }
    })
    .catch(err=>{
        res.status(400).json({error:err})
    })
})

module.exports = router;