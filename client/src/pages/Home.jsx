import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate();

    const userAuth=async()=>{
        const token= localStorage.getItem("token");
        if(token){
            let api="http://localhost:8000/user/userauth";
            const tokenresponse= await axios.post(api, null, {headers:{"auth-token":token}});
            // console.log(tokenresponse.data)
            localStorage.setItem("username", tokenresponse.data.name);
            localStorage.setItem("useremail", tokenresponse.data.email)
            navigate("/dashboard")
        }
    }
    
    useEffect(()=>{
               userAuth();
    },[])
    


    return(
        <>
        <h1> this is home page </h1>
        </>
    )
}
export  default Home;