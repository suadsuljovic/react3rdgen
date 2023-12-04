import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import UserContextProvider from "./UserContextProvider";
// pravimo register, login, home page
// da napravite rute za to i napravite komponenete za svaku rutu
// / => home; /register => register; /login => login

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <Home />
      </UserContextProvider>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const Class31 = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default Class31;
