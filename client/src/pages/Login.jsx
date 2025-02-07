import axios from "axios";
import { useState } from "react";
import { message } from "antd";

import {useNavigate} from "react-router-dom"
const Login=()=>{
    const [email, setEmail]=useState("")
    const [password,setPassword]=useState("")
const navigate=useNavigate();

    const handelSubmit=async()=>{
                
        try {

            let api="http://localhost:8000/user/login";
            const res =await axios.post(api,{email:email, password:password})
                if(res.status==200)
                {
                    message.success(res.data.msg)
                localStorage.setItem("token",res.data.token)
                     navigate("/home")
                }
                //    console.log(res.data) // token chek ki jo back end se aai
    
          } catch (error) {
            message.error(error.response.data.msg)
            
        
         }
         
     }
       


    return(
        <>
      <div className="login-form">
      <input type="text" placeholder="Email" name="email" className="input-field"  onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="password" placeholder="Password" name="password" className="input-field"  onChange={(e)=>{setPassword(e.target.value)}}/>
      <button className="submit-btn" onClick={handelSubmit}>Submit</button>
      </div>
        </>
    )
}
export  default Login;


