import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shered/Footer/Footer";
import Navbar from "../Pages/Shered/Navbar/Navbar";



const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;