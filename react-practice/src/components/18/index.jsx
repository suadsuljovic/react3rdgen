import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";
import Product from "./Prouct";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        path: "home",
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const Class18 = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Class18;
