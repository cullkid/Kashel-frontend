import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home page/Home";
import Categories from "./pages/categories page/Categories";
import SingleCategory from "./pages/singleCategory page/SingleCategory";
import Order from "./pages/orders page/Order";
import MyCategory from "./pages/myCategory page/MyCategory";
import AddCategory from "./pages/addCategory page/AddCategory";
import Massege from "./pages/message page/Message";
import SingleMessage from "./pages/singleMessage page/SingleMessage";

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
          path: "/category",
          element: <Categories />,
        },
        {
          path: "/category/:id",
          element: <SingleCategory />,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/mycategory",
          element: <MyCategory />,
        },
        {
          path: "/addcategory",
          element: <AddCategory />,
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
