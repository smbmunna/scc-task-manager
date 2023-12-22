import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layouts/Dashboard";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import ViewTasks from "../Pages/Dashboard/ViewTasks/ViewTasks";
import PrivateRoutes from "./PrivateRoutes";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      children:[
        {
            path: "/",
            element:<PrivateRoutes> <Home/></PrivateRoutes>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/registration', 
            element: <Registration/>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
      children: [
        {
         path:'create-task',
         element: <PrivateRoutes><CreateTask/></PrivateRoutes>
        },
        {
          path: 'view-task',
          element: <PrivateRoutes><ViewTasks/></PrivateRoutes>
        }
      ]
    }
  ]);

export default router;