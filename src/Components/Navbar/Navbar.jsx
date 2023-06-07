import { Link, NavLink } from "react-router-dom";
import icon from "../../assets/icons/football.png";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="h-28 flex items-center justify-between px-16 w-full bg-transparent z-10 fixed text-white border-b-2 border-[#644b21]">
      <div className="flex items-center justify-center font3 p-3 h-32 bg-[#644b21]">
        <img className="h-16 w-16" src={icon} alt="" />
        <h3 className="font-semibold text-2xl icon text-white">
          Summer <span className="block text-sm font-bold">Of</span> Sports
        </h3>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-6 font2">
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
              to="/classes"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Classes
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Link className="parent-btn" to="/login">
            <button className="button1">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
