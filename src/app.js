import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// 7
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// 9 lazy loading 

const Grocery = lazy(()=>import ('./components/Grocery'))


// 7: route configuration

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<Body />,
      },
      {
        path:'/grocery',
        element:(
          <Suspense fallback=
            {<h1>Loading...</h1>}>
              <Grocery />
            </Suspense>

        ),
      },
      {
        path:'/about',
        element:<About />,
      },
      {
        path:'/contact',
        element: <Contact />
      },
      //7  dynamic route path
      {
        path:'/restaurants/:resId',
        element: <RestaurantMenu />
      },
      
  ],
    errorElement:<Error />,
  },
  
  // {
  //   path:'/*',
  //   element: <AppLayout />
  // }
])




const root = ReactDOM.createRoot(document.getElementById("root"));
// 7
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
