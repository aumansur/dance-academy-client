import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useIsInstructor from "../hooks/useIsInstructor";
import Navbar from "../components/shared_pages/navbar/Navbar";
import useAuth from "../hooks/useAuth";

const DashBoard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const { user } = useAuth()
  const [isInstructor, isInstructorLoading] = useIsInstructor();
  const hideLogOut = true;

  if (isInstructorLoading || isAdminLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <Navbar hideLogOut={hideLogOut} />
      <div className="bg-gray-100 pt-[85px] min-h-screen font-popi flex">
        <div className="w-[20%] bg-gray-200 p-5">
          <div className="text-center flex justify-center">
            <img className="w-16 h-16 rounded-full" src={user?.photoURL} alt="" />
          </div>
          <h1 className="text-2xl font-semibold mb-10">Dashboard</h1>

          {isInstructor || isAdmin || (
            <ul className="space-y-2">
              <li className="border-b pb-2 font-medium">
                <NavLink
                  to={"/dashboard/selectedClasses"}
                  className={({ isActive }) =>
                    isActive ? "text-[#6268F5]" : ""
                  }
                >
                  <span>My Selected Class</span>
                </NavLink>
              </li>
              <li className="border-b pb-2 font-medium">
                <NavLink
                  to={"/dashboard/enrolledClasses"}
                  className={({ isActive }) =>
                    isActive ? "text-[#6268F5]" : ""
                  }
                >
                  <span>My Enrolled Class</span>
                </NavLink>
              </li>
            </ul>
          )}
          {isAdmin && (
            <ul className="space-y-2">
              <li className="border-b pb-2 font-medium">
                <NavLink
                  to={"/dashboard/manageClasses"}
                  className={({ isActive }) =>
                    isActive ? "text-[#6268F5]" : ""
                  }
                >
                  <span>Manage Class</span>
                </NavLink>
              </li>
              <li className="border-b pb-2 font-medium">
                <NavLink
                  to={"/dashboard/manageUsers"}
                  className={({ isActive }) =>
                    isActive ? "text-[#6268F5]" : ""
                  }
                >
                  <span>Manage Users</span>
                </NavLink>
              </li>
            </ul>
          )}
          {isInstructor && (
            <ul className="space-y-2">
              <li className="border-b pb-2 font-medium">
                <NavLink
                  to={"/dashboard/addClasses"}
                  className={({ isActive }) =>
                    isActive ? "text-[#6268F5]" : ""
                  }
                >
                  <span>Add a Class</span>
                </NavLink>
              </li>
              <li className="border-b pb-2 font-medium">
                <NavLink
                  to={"/dashboard/myClasses"}
                  className={({ isActive }) =>
                    isActive ? "text-[#6268F5]" : ""
                  }
                >
                  <span>My Class</span>
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <div className="w-[80%] bg-white p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
