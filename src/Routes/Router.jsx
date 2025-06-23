import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import NotFound from "../shared/NotFound";
import AboutUs from "../AboutUs/AboutUs";


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
    ],
  },
  
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;