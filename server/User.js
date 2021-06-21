const mongoose=require("mongoose")

const UserSch=new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    DateOB:String,

})

mongoose.model("user",UserSch)