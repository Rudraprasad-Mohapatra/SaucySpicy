import "./App.scss"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./componenets/Layout";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Products } from "./pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ]

  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
