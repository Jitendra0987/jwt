const express=require("express");
const route=express.Router();
const userController=require("../controllers/userController")

route.post("/Ragistration",userController.Ragestration)



module.exports=route;