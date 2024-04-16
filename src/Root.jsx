import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import  { Toaster } from "react-hot-toast";



const Root = () => {
    return (
        <div className="font-barlow min-h-[calc(100vh-136px)]">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;