
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const UserModel = require("../model/userModel");

const Ragestration=async(req,res)=>{

 const   { name , email , password }=req.body;
 const salt =await bcrypt.genSalt(10);
 const hashedpassword = await bcrypt.hash(password,salt);
        
    try {

        const response= await UserModel.create({     
          name:name ,
          email:email,
          password:hashedpassword

        })
        res.status(200).send(response)
        
    } catch (error) {
        console.log(error)
        
    }
    
}


const UserLogin=async(req,res)=>{
    
      const {email, password }=req.body;

      try {
        const user= await UserModel.findOne({
               email:email
        })
        // console.log(user)
        if(!user){
            res.status(400).json({msg:"email not found"});
            
        }
        const validpassword = await bcrypt.compare(
            password,
            user.password
        );      
        if (!validpassword)
        {
            res.status(400).json({msg:"invalid password"})
        }  
         
       const token = jwt.sign({id:user._id},process.env.SECRET_KEY,{
           expiresIn:3*24*60*60
       })

        res.status(200).json({msg:"user successfully login",
                              token:token
                            
        })  

      } catch (error) {
           console.log(error);
      }

}


const UserAuth=async(req,res)=>{
     const token=req.header("auth-token");
     console.log(token);
     const decoded = jwt.verify(token,process.env.SECRET_KEY);    
     const user=await UserModel.findById(decoded.id);
     res.status(200).send(user)
    
}





module.exports={
    Ragestration,
    UserLogin,
    UserAuth
}