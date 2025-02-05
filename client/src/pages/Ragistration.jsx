import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import {message} from "antd";

const Ragistration=()=>{
    const [input, setInput]=useState({});


    const handelChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
           setInput(values=>({...values,[name]:value}))
           console.log(input)
    }

         

    const  handelSubmit=async()=>{

        try {
            let api="http://localhost:8000/user/Ragistration";
            const response=await axios.post(api,input)
              message.success("Ragistration sucess fulley")
        } catch (error) {
            console.log(error)
        }
    }





    return(
        <>
        <center>
    <div style={{ backgroundColor:"pink"}}>
     <div style={{width:"500px", height:"600px", paddingTop:"180px",}}>

    <Form.Control type="text" placeholder="username"name='name'  onChange={handelChange}   /> <br />
    <Form.Control type="text" placeholder="email" name='email' onChange={handelChange}  /> <br />
    <Form.Control type="text" placeholder="password" name="password" onChange={handelChange} /> <br />

    <Button variant="success" onClick={handelSubmit}>Submit</Button>
    </div>
    </div>
    </center>
        
        </>
    )
}
export  default Ragistration;