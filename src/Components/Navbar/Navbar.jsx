import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import icon from "../../assets/icons/football.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useIsInstructor from "../../Hooks/useIsInstructor";
import "./Navbar.css";
import darkimg from '../../assets/sky.png';
import light from '../../assets/brightness.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({handleDark , dark}) => {

  const [isAdmin] = useAdmin();
  const [isInstructor] = useIsInstructor();

  const [dashboardRout, setDashboardRout] = useState("");

  const {user, logout} = useContext(AuthContext);

  const [toggle, setToggle] = useState(false);


  useEffect(()=>{
    if(isAdmin){

      setDashboardRout("manageclass")

    }
    else if(isInstructor){
      setDashboardRout("addclass")
    }
    else{
      setDashboardRout("myselect")
    }
  }, [user, isAdmin, isInstructor])

  // console.log(user?.photoURL, "nav photo")

  return (
    <div className="h-28 md:px-16 px-6 w-full bg-transparent z-50 absolute text-white border-b-2 border-[#644b21]">
      <div className="md:flex items-center justify-between relative maxWidth mx-auto overflow-x-hidden">
      
      <div className="flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center w-fit float-left justify-center font3 px-2 md:px-6 md:h-32 h-28 bg-[#644b21]">
          <img className="md:h-16 h-10 w-10 md:w-16" src={icon} alt="" />
          <h3 className="font-semibold text-lg md:text-2xl icon text-white">
            Summer <span className="block text-sm font-bold">Of</span> Sports
          </h3>
        </div>
        </Link>

        <div className="mb-4 flex items-center gap-2 md:hidden">
            <div className="items-center md:w-auto w-10 flex">
              <button onClick={()=> handleDark(!dark)}>{dark ? <img src={light} className='h-6 w-6'/> :   <img src={darkimg} className='w-6 h-6' /> }
              </button>
            </div>
            <div>
              <FontAwesomeIcon onClick={()=> setToggle(!toggle)} className="w-8 h-8 cursor-pointer" icon={toggle ? faXmark : faBarsStaggered} />
            </div>
          </div>  


      </div>
       
        <div className={`w-full md:w-auto transition-all duration-300 md:block ${toggle ? "" : "hidden" } `}>
          <ul className={`md:bg-transparent transition-all duration-300 bg-[#8e6e35] py-8 md:p-0 flex md:static relative md:flex-row flex-col md:w-auto w-full  items-center mb-4 justify-center gap-6 z-50 font2 
          }
          `}>
            <li>
              <NavLink
                onClick={() => setToggle(!toggle)}
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={() => setToggle(!toggle)}
                to="/instructors"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Instructors
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={() => setToggle(!toggle)}
                to="classes"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Classes
              </NavLink>
            </li>
            <li>
              {
                user && <Link to={`/dashboard/${dashboardRout}`}>Dashboard</Link>
              }
            </li>
            
          
          <li>
          { user ? <div className="flex gap-6 items-center md:hidden">
            
            <Link to="/profile">
              <img className="h-10 w-10 rounded-full border-2 border-[#d29e49]" src={user.photoURL} alt="" />
            </Link>

              <button onClick={() => logout()} className="px-3 py-1 text-black bg-red-400 rounded-lg border-2 border-black ">Logout</button>

          </div> :
            <Link className="parent-btn md:hidden" to="/login">
              <button className="button1">Login</button>
            </Link> 
          }
          </li>
          </ul>
        </div>
        <div className="mb-4 md:flex items-center gap-2 md:gap-6 hidden">
            <div className="items-center md:w-auto w-10 flex">
              <button onClick={()=> handleDark(!dark)}>{dark ? <img src={light} className='h-6 w-6'/> :   <img src={darkimg} className='w-6 h-6' /> }
              </button>
            </div>
           
          { user ? <div className="flex gap-6 items-center ">
            
            <Link to="/profile">
              <img className="h-10 w-10 rounded-full border-2 border-[#d29e49]" src={user.photoURL} alt="" />
            </Link>

              <button onClick={() => logout()} className="px-3  py-1 text-black bg-red-400 rounded-lg border-2 border-black ">Logout</button>

          </div> :
            <Link className="parent-btn" to="/login">
              <button className="button1">Login</button>
            </Link> 
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
