import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <p>this is home</p> },
  { path: "/home", element: <p>this is home route</p> },
  { path: "/home/visit", element: <p>this is nested home route</p> },
]);

const Class31 = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default Class31;
