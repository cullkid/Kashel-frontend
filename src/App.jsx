import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home page/Home";
import SingleProduct from "./pages/singleProduct page/SingleProduct";
import Order from "./pages/orders page/Order";
import MyProduct from "./pages/myProduct page/MyProduct";
import AddProduct from "./pages/addProduct page/AddProduct";
import Massege from "./pages/message page/Message";
import SingleMessage from "./pages/singleMessage page/SingleMessage";
import Product from "./pages/product page/Produt";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

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
          path: "/product",
          element: <Product />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/myproduct",
          element: <MyProduct />,
        },
        {
          path: "/addproduct",
          element: <AddProduct />,
        },
        {
          path: "/message",
          element: <Massege />,
        },
        {
          path: "/message/:id",
          element: <SingleMessage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
