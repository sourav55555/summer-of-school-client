import { faBookOpenReader, faHouse, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import "./Dashboard.css"

const Dashboard = () => {

    const [isAdmin] = useAdmin();

  return (
    <div className="flex min-h-screen justify-between">
      <nav className="dashboard h-screen w-[15rem] pt-40 ps-8">
        <ul className="text-lg font2 space-y-8 text-white">
          {isAdmin && <>
          <li>
            <NavLink
              to="/dashboard/manageclass"
              className={({ isActive }) => (isActive ? "actived" : "bg-gradient-to-r border-l-4 border-[#423319] from-[#604a24] to-[rgba(142,110,53,.0)] ps-3 py-3")}
            >
             <FontAwesomeIcon className="me-2" icon={faBookOpenReader} /> Manage Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "actived" : "bg-gradient-to-r border-l-4 border-[#423319] from-[#604a24] to-[rgba(142,110,53,.0)] ps-3 py-3")}
            >
              <FontAwesomeIcon className="me-2" icon={faUsers} />Manage Users
            </NavLink>
          </li>
          </>}
          <li className="bg-gradient-to-r border-l-4 border-[#423319] from-[#604a24] to-[rgba(142,110,53,.0)] ps-3 py-3">
            <Link className="text-white " to="/"><FontAwesomeIcon icon={faHouse} /> Home</Link>
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
