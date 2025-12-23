
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Abc from "./Abc";
import RecipeDetail from "./components/recipeDetail/RecipeDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/abc",
    element: <Abc/>,
  },
  {
    path:"/recipe/:id",
    element:<RecipeDetail />
  }
]);

const MyRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MyRoutes;
