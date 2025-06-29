import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import NotFound from "../shared/NotFound";
import AboutUs from "../AboutUs/AboutUs";
import Domain from "../Domain/Domain";
import VPSHosting from "../Hosting/VPSHosting";
import ResellerHosting from "../Hosting/ResellerHosting";
import SharedHosting from "../Hosting/SharedHosting";
import Contact from "../Home/Contact";
import DedicatedServer from "../Pages/DedicatedServer";
import SupportPage from "../Pages/Support/SupportPage";
import WHMCS from "../Pages/WHMCS/WHMCS";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import NewsPage from "../Pages/NewsPage/NewsPage";

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
        path: "/contact",
        element: <Contact />,
      },

      // pages..
      {
        path: "/pages/dedicated-server",
        element: <DedicatedServer />,
      },
       {
        path: "/pages/whmcs",
        element: <WHMCS />,
      },
      {
        path: "/pages/support",
        element: <SupportPage />,
      },
       {
        path: "/pages/news",
        element: <NewsPage />,
      },
       {
        path: "/pages/news-details",
        element: <NewsDetails />,
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
