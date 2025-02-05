const UserModel=require("../model/userModel")

const Ragestration=async(req,res)=>{

 const   { name , email , password }=req.body
        
    try {

        const response= await UserModel.create({
                 
          name:name ,
          email:email,
          password:password

        })
        res.status(200).send(response)
        
    } catch (error) {
        console.log(error)
        
    }
    
}

module.exports={
    Ragestration
}