import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserClass from "./components/UserClass";
import AboutClass from "./components/AboutClass";
// import Grocery from "./components/Grocery";
const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {

  //Chunking
  //Code Splitting
  //Dynamic Bundling
  //Lazy Loading
  //on demand loading

  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/about",
        element: <AboutClass/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading..........</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
