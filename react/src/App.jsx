import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import HomeLayout from "./layout/HomeLayout";
import FetchAPI from "./pages/FetchAPI";
import SinglePage from "./pages/SinglePage";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/service",
          element: <ServicePage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
    // {
    //   path: "/admin",
    //   element: <AdminLayout />,
    //   children: [
    //     {
    //       path: "",
    //       element: <Dashboard />,
    //     },
    //     {
    //       path: "/admin/user-management",
    //       element: <UserManagement />,
    //     },
    //   ],
    // },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/api",
      element: <FetchAPI />,
    },
    {
      path: "/products/:id",
      element: <SinglePage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> */}
    </>
  );
};

export default App;
