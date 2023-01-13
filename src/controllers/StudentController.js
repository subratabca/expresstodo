const StudentModel = require("../models/StudentModel");
var jwt = require('jsonwebtoken');

exports.CreateStudent=(req,res)=>{
    let reqBody=req.body;
    StudentModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.StudentLogin=(req,res)=>{
    let UserName=req.body['UserName'];
    let Password=req.body['Password']
    StudentModel.find({UserName:UserName,Password:Password},(err,data)=>{
      if(err){
          res.status(400).json({status:"fail",data:err})
      }
      else {
          if(data.length>0){

              // Create Auth Token
              let Payload={exp: Math.floor(Date.now() / 1000) + (24*60*60), data:data[0]}
              let token = jwt.sign( Payload,'SecretKey123456789');

              res.status(200).json({status:"success",token:token,data:data[0]})
          }
          else {
              res.status(401).json({status:"unauthorized"})
          }
      }
    })


}

exports.SelectStudent=(req,res)=>{
    let UserName=req.headers['username']
    StudentModel.find({UserName:UserName},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.UpdateStudent=(req,res)=>{
    let UserName=req.headers['username']
    let reqBody=req.body;
    StudentModel.updateOne({UserName:UserName},{$set:reqBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}