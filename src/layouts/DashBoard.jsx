import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useIsInstructor from "../hooks/useIsInstructor";
import Navbar from "../components/shared_pages/navbar/Navbar";
import useAuth from "../hooks/useAuth";
import { MdClass, MdSupervisedUserCircle } from 'react-icons/md';
import { RiUserFollowFill } from 'react-icons/ri';
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
            <img className="w-16 h-16 border-4 border-orange-400 rounded-full" src={user?.photoURL} alt="" />
          </div>
          <h1 className="text-3xl pc font-semibold mb-10">Dashboard</h1>

          {isInstructor || isAdmin || (
            <ul className="space-y-2">
              <li className="border-b pb-2 font-medium">
                <NavLink
                  to={"/dashboard/selectedClasses"}
                  className={({ isActive }) =>
                    isActive ? "pc" : ""
                  }
                >
                  <div className="flex items-center"><MdClass size={25} /> <span>  My Selected Class</span></div>
                </NavLink>
              </li>
              <li className="border-b pb-2 font-medium">
                <NavLink
                  to={"/dashboard/enrolledClasses"}
                  className={({ isActive }) =>
                    isActive ? "pc" : ""
                  }
                >
                  <div className="flex items-center"><RiUserFollowFill size={25} /> <span>  My Selected Class</span></div>
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
                    isActive ? "pc" : ""
                  }
                >
                  <div className="flex items-center"><MdClass size={25} /> <span>  Manage Class</span></div>
                </NavLink>
              </li>
              <li className="border-b pb-2 font-medium">
                <NavLink
                  to={"/dashboard/manageUsers"}
                  className={({ isActive }) =>
                    isActive ? "pc" : ""
                  }
                >
                  <div className="flex items-center"><MdSupervisedUserCircle size={25} /> <span>  Manage Users</span></div>
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
                    isActive ? "pc" : ""
                  }
                >
                  <div className="flex items-center"><MdClass size={25} /> <span>  Add a Class</span></div>
                </NavLink>
              </li>
              <li className="border-b pb-2 font-medium">
                <NavLink
                  to={"/dashboard/myClasses"}
                  className={({ isActive }) =>
                    isActive ? "pc" : ""
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
