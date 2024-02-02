import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import { DashboardLayout } from "../Dashboard/DashboardLayout";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SignleBook from "../pages/shared/SignleBook";
import UploadBook from "../Dashboard/UploadBook";
import Dashboard from "../Dashboard/Dashboard";
import ManageBooks from "../Dashboard/ManageBooks";
import ManageUser from "../Dashboard/ManageUser";
import EditBooks from "../Dashboard/EditBooks";

import ErrorPage from "../pages/shared/ErrorPage";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Signup from "../pages/auth/Signup";
import Logout from "../pages/auth/Logout";
// import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {path: "/home",element: <Home /> },
      { path: "/home/shop", element: <Shop />, },
      // { path: "/book/:id", element: <SignleBook />,
      //   loader: ({ params }) => fetch(`http://localhost:5000/books/book/${params.id}`) },
      { path: "/home/about", element: <About/>},
      { path: "/home/blog", element: <Blog/>}
    ]},

  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      // { path: "/admin/dashboard", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>},
      { path: "/admin/dashboard", element: <Dashboard /> },
      { path: "/admin/dashboard/upload", element: <UploadBook /> },
      { path: "/admin/dashboard/manage", element: <ManageBooks /> },
      { path: "/admin/dashboard/manageuser", element: <ManageUser /> },
      { path: "/admin/dashboard/edit-books/:id", element: <EditBooks />,
      loader: ({ params }) => fetch(`http://localhost:5000/books/book/${params.id}`) },
    ]},
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/register",
    element: <Signup/>
  },
  {
    path:"/logout",
    element: <Logout/>
  },
  {
    path:"/forgot-password",
    element: <ForgotPassword/>
  },
  {
    path:"/reset_password/:id",
    element: <ResetPassword/>
  },
  // {
  //   path:"/dashboard",
  //   element: <Dashboard/>
  // },
]);

export default router;

