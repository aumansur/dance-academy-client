import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/pages/home/Home";
import Error from "../components/pages/error/Error";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import ClassesPage from "../components/pages/Classes/ClassesPage";
import Instructors from "../components/pages/Instructors/Instructors";
import DashBoard from "../layouts/DashBoard";
import SelectedClass from "../components/pages/dashboard/student/SelectedClass/SelectedClass";
import EnrolledClass from "../components/pages/dashboard/student/EnrolledClass/EnrolledClass";
import Payment from "../components/pages/dashboard/student/Payment/Payment";
import ManageClass from "../components/pages/dashboard/admin/ManageClass/ManageClass";
import ManageUsers from "../components/pages/dashboard/admin/ManageUsers/ManageUsers";
import AddClass from "../components/pages/dashboard/Instructor/AddClass/AddClass";
import MyClass from "../components/pages/dashboard/Instructor/MyClass/MyClass";
// import UpdateAddedClass from "../components/pages/dashboard/Instructor/UpdateAddedClass./UpdateAddedClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/classes",
        element: <ClassesPage />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard/selectedClasses",
        element: <SelectedClass />,
      },
      {
        path: "/dashboard/enrolledClasses",
        element: <EnrolledClass />,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/dashboard/payment/${params.id}`
          ),
      },
      {
        path: "/dashboard/manageClasses",
        element: <ManageClass />,
      },
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/addClasses",
        element: <AddClass />,
      },
      {
        path: "/dashboard/myClasses",
        element: <MyClass />,
      },
      // {
      //   path: "/dashboard/updateAddedClass/:id",
      //   element: <UpdateAddedClass />,
      //   loader: ({ params }) =>
      //     fetch(
      //       `http://localhost:5000/dashboard/updateAddedClass/${params.id}`
      //     ),
      // },
    ],
  },
]);
