const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
require("./User")

app.use(bodyParser.json())

const UserMong=mongoose.model("user")

const MongoURi="mongodb+srv://romit0226:Romit0226@cluster0.83qrv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(MongoURi,{
    useNewUrlParser:true,
    useUnifiedTopology:true

})
mongoose.connection.on("connected",()=>{
    console.log("Connected to Mongo")
})
mongoose.connection.on("error",(err)=>{
    console.log("Error",err)
})
app.get('/',(req,res)=>{
    UserMong.find({}).then(data=>{
        res.send(data)
    }).catch(
        err=>{
            console.log(err)
        }
    )
   
})


app.post('/send-data',(req,res)=>{
    const userdata= new UserMong({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        DateOB:req.body.DateOB, 
    })
    userdata.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(
        err=>{
            console.log(err)
        }
    )
    
})

app.post('/delete',(req,res)=>{
    UserMong.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)   
        res.send(data)
    }).catch(
        err=>{
            console.log(err)
        }
    )
})

app.post('/update',(req,res)=>{
    UserMong.findByIdAndUpdate(req.body.id,{
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        DateOB:req.body.DateOB, 
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(
        err=>{
            console.log(err)
        }
    )
})





app.listen(3000,()=>{
    console.log("server running")
})