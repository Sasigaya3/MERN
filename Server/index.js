const express=require("express");
const cors=require("cors");
const UserRoute=require("./Routes/user routes");
const { default:Mongoose } = require("mongoose");

const app=express();
Mongoose.connect("mongodb://localhost:27017/")
.then(()=>console.log("mongodb connected successfully"))
.catch((error)=> console.log(error));
app.use(express.json());

const corsOptions ={
    origin: ["http://localhost:5173","http://localhost:5174"],
    methods:["POST","GET"],
    alllowedHeaders:["Content-Type","Authorization"],
    credentials:true,
};

app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello world");
});

app.use("/user",UserRoute);
const Signups=async(req,res)=>
    {
        const{name,email,password}=req.body;
        try{
            const sign=await Signup.findOne({ email:email});
            if(sign){
                     res.status(400).json({ message:"User already exists"});
                    }
            else{
                const user=new Signup.create({
                    name,
                    email,
                    password
                } );if (user){
                    res.status(200).json({ message:'User registered successfully'});
                    console.log("Registration success");
                }else{
                    res.status(400).json({ message:"Error while registering"});
                }
            }
        }catch (error){
            console.log(error);
    
        }
    }
    

        

    app.listen(3000,()=>{
    console.log("server is running")
})