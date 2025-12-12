
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Abc from "./Abc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/abc",
    element: <Abc/>,
  },
]);

const MyRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MyRoutes;
