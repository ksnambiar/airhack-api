const express = require('express');
const router = express.Router();
const {auth,dataBase} = require('../../../config/config');

router.post('/:plane/addPost',(req,res)=>{
    //let user = auth.currentUser;
    let data = req.body.data;
    let msn = req.params.msn;
    let harness = req.params.harness;
    let weight = req.params.weight;
    let pressure = req.params.pressure;
    let temp = req.params.temp;
    let airport = req.params.airport;
    let fcl = req.params.fcl;
    let fcr = req.params.fcr;
    let fql = req.params.fql;
    let fqr = req.params.fqr;
    let altitude = req.params.altitude;
    let flightno = req.params.flightno;
    let postref
    if(req.body.type==="query"){
        postref=dataBase.ref('plane/'+msn+'/query');
    }else{
    postref=dataBase.ref('plane/'+msn+'/post');
    }
        //let uid=user.uid;
        let newKey=postref.push().key;
        let pushData = {
            //ownerUid:uid,
            ownerName:data.fullName,
            postData:data.post,
            timestamp:Date.now()
        }
        let updates={}
        updates[newKey]=pushData
        postref.update(updates)
            .then(obj=>{
    
                res.status(200).json({message:"added successfully",response:obj});
            })
            .catch(err=>{
                res.status(400).json({error:err})
            })
})


