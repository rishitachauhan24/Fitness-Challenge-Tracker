const mongoose=require('mongoose')
const connectDB=async()=>{
    try{
        const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGO_URI is not defined in environment variables. Please check your Render Dashboard -> Environment section.");
        }
        await mongoose.connect(uri)
        console.log("MongoDB Connected Successfully")
    } catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports=connectDB