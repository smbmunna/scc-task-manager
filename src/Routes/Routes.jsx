import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      children:[
        {
            path: "/",
            element: <Home/>
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
  ]);

export default router;