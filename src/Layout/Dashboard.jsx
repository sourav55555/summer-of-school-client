import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <nav className="dashboard">
        <ul>
          <li>
            <NavLink
              to="/dashboard/manageclasses"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Manage Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
