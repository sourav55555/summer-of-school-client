import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import icon from "../../assets/icons/football.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useIsInstructor from "../../Hooks/useIsInstructor";
import "./Navbar.css";

const Navbar = () => {

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
    <div className="h-28 px-16 w-full bg-transparent z-10 absolute text-white border-b-2 border-[#644b21]">
      <div className="flex items-center justify-between maxWidth mx-auto">
        <Link to="/">
        <div className="flex items-center justify-center font3 p-3 h-32 bg-[#644b21]">
          <img className="h-16 w-16" src={icon} alt="" />
          <h3 className="font-semibold text-2xl icon text-white">
            Summer <span className="block text-sm font-bold">Of</span> Sports
          </h3>
        </div>
        </Link>
        <div>
          <ul className="flex items-center mb-4 justify-center gap-6 font2">
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
          </ul>
        </div>
        <div className="mb-4">
          { user ? <div className="flex gap-6 items-center ">
            
            <Link to="/profile">
              <img className="h-10 w-10 rounded-full border-2 border-[#d29e49]" src={user.photoURL} alt="" />
            </Link>

              <button onClick={() => logout()} className="px-4 py-2 text-black bg-[#fb6d63] border-2 border-black ">Logout</button>

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
