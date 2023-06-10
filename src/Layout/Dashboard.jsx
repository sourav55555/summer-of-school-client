import {
  faBookOpenReader,
  faCheckToSlot,
  faCirclePlus,
  faHandPointer,
  faHouse,
  faMoneyBill1Wave,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useIsInstructor from "../Hooks/useIsInstructor";

import "./Dashboard.css";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  const [isInstructor] = useIsInstructor();
  console.log(isInstructor, "instructor");


  const [isStudent , setIsIstudent] = useState(false);

  useEffect( ()=>{
    if(!isAdmin && !isInstructor){
      setIsIstudent(true);
    }
  }, [isAdmin, isInstructor])

  return (
    <div className="flex min-h-screen justify-between">
      <nav className="dashboard h-screen w-[15rem] pt-40 ps-8">
        <ul className="text-base font2 space-y-8 text-white">

          {/* admin dashboard  */}
          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="/dashboard/manageclass"
                  className={({ isActive }) =>
                    isActive
                      ? "actived"
                      : "bg-gradient-to-r border-l-4 border-[#423319] from-[#604a24] to-[rgba(142,110,53,.0)] ps-3 py-3"
                  }
                >
                  <FontAwesomeIcon className="me-2" icon={faBookOpenReader} />{" "}
                  Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageuser"
                  className={({ isActive }) =>
                    isActive
                      ? "actived"
                      : "bg-gradient-to-r border-l-4 border-[#423319] from-[#604a24] to-[rgba(142,110,53,.0)] ps-3 py-3"
                  }
                >
                  <FontAwesomeIcon className="me-2" icon={faUsers} />
                  Manage Users
                </NavLink>
              </li>
            </>
          )}

          {/* instructor dashboard  */}

          {isInstructor && (
            <>
              <li>
                <NavLink
                  to="/dashboard/addclass"
                  className={({ isActive }) =>
                    isActive
                      ? "actived"
                      : "bg-gradient-to-r border-l-4 border-[#423319] from-[#604a24] to-[rgba(142,110,53,.0)] ps-3 py-3"
                  }
                >
                  <FontAwesomeIcon className="me-2" icon={faCirclePlus} />{" "}
                  Add A Class
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/dashboard/myclasses"
                  className={({ isActive }) =>
                    isActive
                      ? "actived"
                      : "bg-gradient-to-r border-l-4 border-[#423319] from-[#604a24] to-[rgba(142,110,53,.0)] ps-3 pe-10 py-3"
                  }
                >
                  <FontAwesomeIcon className="me-2" icon={faUsers} />
                  My Classes
                </NavLink>
              </li>
            </>
          )}
            
          {/* student rout  */}
          {
            isStudent && (
            <>
              <li>
                <NavLink
                  to="/dashboard/myselect"
                  className={({ isActive }) =>
                    isActive
                      ? "actived"
                      : "bg-gradient-to-r border-l-4 border-[#423319] from-[#604a24] to-[rgba(142,110,53,.0)] ps-3 py-3"
                  }
                >
                  <FontAwesomeIcon className="me-2" icon={faHandPointer} />
                  My Selected Classes
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/dashboard/myenroll"
                  className={({ isActive }) =>
                    isActive
                      ? "actived"
                      : "bg-gradient-to-r border-l-4 border-[#423319] from-[#604a24] to-[rgba(142,110,53,.0)] ps-3 py-3"
                  }
                >
                  <FontAwesomeIcon className="me-2" icon={faCheckToSlot} />
                  My Enrolled Classes
                </NavLink>
               </li> 
              <li className="">
                <NavLink
                  to="/dashboard/payments"
                  className={({ isActive }) =>
                    isActive
                      ? "actived"
                      : "bg-gradient-to-r border-l-4 border-[#423319] from-[#604a24] to-[rgba(142,110,53,.0)] ps-3 py-3"
                  }
                >
                  <FontAwesomeIcon className="me-2" icon={faMoneyBill1Wave} />
                  My Payments
                </NavLink>
              </li>
            </>
          )
          }


          <li className="bg-gradient-to-r border-l-4 border-[#423319] from-[#604a24] to-[rgba(142,110,53,.0)] ps-3 py-3">
            <Link className="text-white " to="/">
              <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-3/4 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
