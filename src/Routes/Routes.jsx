import {
    createBrowserRouter

  } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Signup/>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
      children: [
        {
          path: "manageclasses",
          element: <Ma
        }
      ]
    }
]);

export default router