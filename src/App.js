import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";  
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturnatMenu from "./components/ResturantMenu";
import { Provider } from "react-redux";
import appStore from "./Utils/AppStore";
import Cart from "./components/Cart";

const Grocery=lazy(()=>
  import('./components/Grocery'));
const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
    
    </div>
    </Provider>
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
    {
      path: "/grocery",
      element:(<Suspense fallback={<h1>Loading bro ...</h1>}><Grocery/></Suspense>) 
     
    },
    {
      path: "/cart",
      element: <Cart />,
    }
  ],
    errorElement:<Error></Error>
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
