import {
    createBrowserRouter

  } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Classes from "../Pages/Classes/Classes";
import AddClass from "../Pages/DashboardPages/AddClass/AddClass";
import ManageClass from "../Pages/DashboardPages/ManageClasses/ManageClass";
import ManageUsers from "../Pages/DashboardPages/ManageUsers/ManageUsers";
import Myclasses from "../Pages/DashboardPages/MyClasses/Myclasses";
import Myenroll from "../Pages/DashboardPages/Myenroll/Myenroll";
import Checkout from "../Pages/DashboardPages/Myselect/Checkout";
import Myselect from "../Pages/DashboardPages/Myselect/Myselect";
import Payment from "../Pages/DashboardPages/Myselect/Payment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AdminRout from './AdminRout';
import PrivateRout from './PrivateRout';

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
        },
        {
          path: "/classes",
          element: <Classes/>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRout><Dashboard/></PrivateRout>,
      children: [
        {
          path: "manageclass",
          element: <AdminRout><ManageClass/></AdminRout>
        },
        {
          path: "manageuser",
          element: <AdminRout><ManageUsers/></AdminRout>
        },
        {
          path: "addclass",
          element: <AddClass/>
        },
        {
          path: "myclasses",
          element: <Myclasses/>
        },
        {
          path: "myselect",
          element: <Myselect/>
        },
        {
          path: "myenroll",
          element: <Myenroll/>
        },
        {
          path: "payment",
          element: <Checkout/>
        }
        
      ]
    }
]);

export default router