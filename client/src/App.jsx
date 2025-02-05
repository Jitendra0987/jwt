import {BrowserRouter,Routes, Route} from "react-router-dom";
import Layout from "../Layout";
import Home from "../src/pages/Home";
import Ragistration from "../src/pages/Ragistration";
import Login from "../src/pages/Login";



const App=()=>{
  return(
    
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/home" element={<Home/>}/>
      <Route path="/ragistration" element={<Ragistration/>}/>
      <Route path="/login" element={<Login/>}/>


      </Route>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}
export default App;