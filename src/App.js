import React from "react";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";  
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturnatMenu from "./components/ResturantMenu";


const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
    
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[ {
      path: "/about",
      element: <About />,
      
    },
    {
      path:'/contact',
      element:<Contact></Contact>,
      
    },
    {
      path: "/",
      element: <Body />,
     
    },
    {
      path: "/resturants/:resId",
      element: <ResturnatMenu />,
     
    },
  ],
    errorElement:<Error></Error>
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
