const  mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    Name:{type:String},
    FatherName:{type:String},
    Email:{type:String},
    MobileNumber:{type:String},
    City:{type:String},
    UserName:{type:String,unique:true},
    Password:{type:String},
},{versionKey:false});
const StudentModel=mongoose.model('students',DataSchema);
module.exports=StudentModel