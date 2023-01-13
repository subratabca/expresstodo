const SchoolModel = require("../models/SchoolModel");


exports.CreateSchool=(req,res)=>{
    let reqBody=req.body;
    let UserName=req.headers['username']
    let SchoolName=reqBody['SchoolName']
    let Group=reqBody['Group']
    let Roll=reqBody['Roll']
    let Status="New"
    let CreateDate=Date.now();
    let UpdateDate=Date.now();

    let PostBody={
        UserName:UserName,
        SchoolName:SchoolName,
        Group:Group,
        Roll:Roll,
        Status:Status,
        CreateDate:CreateDate,
        UpdateDate:UpdateDate
    }

    SchoolModel.create(PostBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.SelectSchool=(req,res)=>{
    let UserName=req.headers['username']
    SchoolModel.find({UserName:UserName},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.UpdateSchool=(req,res)=>{

    let SchoolName=req.body['SchoolName']
    let Group=  req.body['Group']
    let Roll=  req.body['Roll']
    let _id=  req.body['_id']
    let UpdateDate=Date.now();

    let PostBody={
        SchoolName:SchoolName,
        Group:Group,
        Roll:Roll,
        UpdateDate:UpdateDate,
    }

    SchoolModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })

}


exports.UpdateStatus=(req,res)=>{

    let Status=req.body['Status']
    let _id=  req.body['_id']
    let UpdateDate=Date.now();

    let PostBody={
        Status:Status,
        UpdateDate:UpdateDate,
    }

    SchoolModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })

}

exports.RemoveSchool=(req,res)=>{

    let _id=  req.body['_id']

    SchoolModel.remove({_id:_id},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.SelectSchoolByStatus=(req,res)=>{
    let UserName=req.headers['username']
    let Status=  req.body['Status']
    SchoolModel.find({UserName:UserName,Status:Status},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}




exports.SelectSchoolByDate=(req,res)=>{
    let UserName=req.headers['username']
    let FormDate=  req.body['FormDate']
    let ToDate=  req.body['ToDate']

    SchoolModel.find({UserName:UserName,CreateDate:{$gte:new Date(FormDate),$lte:new Date(ToDate)}},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}
