const express=require("express");
const route=express.Router();
const userController=require("../controllers/userController")

route.post("/Ragistration",userController.Ragestration);
route.post("/login",userController.UserLogin);
route.post("/userauth",userController.UserAuth);



module.exports=route;