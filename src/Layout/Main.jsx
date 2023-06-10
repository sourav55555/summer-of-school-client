
import { useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import useAuth from "../Hooks/useAuth";


const Main = () => {

    const { setAuthDark} = useAuth();
    const [dark , handleDark] = useState(false)

    useEffect(()=>{
        if(dark){
            document.documentElement.classList.add("dark");
            setAuthDark(true);
        }
        else{
            document.documentElement.classList.remove("dark");
            setAuthDark(false);
        }
    }, [dark])


    return (
        <div>
            <Navbar handleDark ={handleDark} dark={dark}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;