import Header from "./src/component/Header";
import Footer from "./src/component/Footer";
import { Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
    <Header/>
    <Outlet/>
    <Footer/>

        </>
    )
}
export default Layout;