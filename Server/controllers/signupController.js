const Signup=require("../model/signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Secret="sasi@143"

const Signups=async(req,res)=>
{
    const{name,email,password}=req.body;
    try{
        const sign=await Signup.findOne({ email:email});
        const hashpassword = await bcrypt.hash(password,10)
        if(sign){
                 res.status(400).json({ message:"User already exists"});
                }
        else{
            const user=await Signup.create({
                name,
                email,
                password:hashpassword,
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
};
const Logins=async(req,res)=>
    {
        const{email,password}=req.body;
        try{
            const login=await Signup.findOne({ email:email});
            
            if(!login || !(await bcrypt.compare(password,login.password))){
                res.status(400).json({ message:"Invalid Email or password"});
            }
            else{
                const token=await jwt.sign({userId:login._id},Secret,{expiresIn:"30h",});
                res.status(200).json({ message:"User Login Succesfully",token});
               // console.log(token);
              
            }
        }catch (error){
            console.log(error);
        }
    };  

module.exports={Signups,Logins}