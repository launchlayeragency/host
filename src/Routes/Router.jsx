import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import NotFound from "../shared/NotFound";
import AboutUs from "../AboutUs/AboutUs";
import Domain from "../Domain/Domain";
import VPSHosting from "../Hosting/VPSHosting";
import ResellerHosting from "../Hosting/ResellerHosting";
import SharedHosting from "../Hosting/SharedHosting";


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
            //hosting...
         {
        path: "/hosting/shared",
        element: <SharedHosting />,
      },
       {
        path: "/hosting/reseller",
        element: <ResellerHosting />,
      },

       {
        path: "/hosting/vps",
        element: <VPSHosting />,
      },
      //domain
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