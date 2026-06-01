const mongoose=require("mongoose")
const progressSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    challenge:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Challenge"
    },
    progress:{
        type:Number,
        default:0
    }
},{timestamps:true})

module.exports=mongoose.model("Progress", progressSchema)