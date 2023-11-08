import React from "react";
import {createRoot} from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import { createBrowserRouter ,Outlet,RouterProvider,useRouteError} from "react-router-dom";

const Applayout = () => {
  const error=useRouteError();
  console.log(error);
  return (
    <React.Fragment>
      <Header />
      <Outlet/>
      <Footer />
    </React.Fragment>
  );
};

const AppRouter=createBrowserRouter([
  {
    path: "/",
    element:<Applayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }

    ]
  },

  
])


const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
