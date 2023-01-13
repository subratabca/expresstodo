const  mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    UserName:{type:String},
    SchoolName:{type:String},
    Group:{type:String},
    Roll:{type:String},
    Status:{type:String},
    CreateDate:{type:Date},
    UpdateDate:{type:Date}
},{versionKey:false});
const SchoolModel=mongoose.model('schools',DataSchema);
module.exports=SchoolModel