import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Contract from "../Pages/Contract/Contract";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Shered/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/contract",
            element:<Contract/>
        }
      ]
    },
  ]);

export default router;