import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import NotFound from "../shared/NotFound";
import AboutUs from "../AboutUs/AboutUs";
import Domain from "../Domain/Domain";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
       {
        path: "/about",
        element: <AboutUs />,
      },
        {
        path: "/domain",
        element: <Domain />,
      },
    ],
  },
  
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;