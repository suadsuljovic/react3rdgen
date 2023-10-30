import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";
import Product from "./Prouct";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/product",
    element: (
      <Layout>
        <Product />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
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
