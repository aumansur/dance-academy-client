import { Link, NavLink } from "react-router-dom";
// import logo from "../../../assets/logo.webp";
import logo from '../../../assets/logo1.png'
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useIsInstructor from "../../../hooks/useIsInstructor";
// import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";

const Navbar = ({ hideLogOut }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme])

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");

    } else {
      setTheme("light");
    }
  }
  // const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useIsInstructor();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  let path;
  if (isAdmin) {
    path = "/dashboard/manageClasses";
  } else if (isInstructor) {
    path = "/dashboard/addClasses";
  } else {
    path = "/dashboard/selectedClasses";
  }

  const handleLogOut = () => {
    logout()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };



  const navItems = <>

    <li className="block lg:my-0  px-3 py-4 lg:rounded-md text-sm font-medium text-white ">  <NavLink
      to={"/"}
      className={({ isActive }) => (isActive ? "text-[#E5AF4C]" : "")}
    >Home </NavLink></li>
    <li className="block lg:my-0  px-3 py-4 lg:rounded-md text-sm font-medium text-white ">    <NavLink
      to={"/instructors"}
      className={({ isActive }) => (isActive ? "text-[#E5AF4C]" : "")}
    >
      Instructors
    </NavLink></li>
    <li className="block lg:my-0  px-3 py-4 lg:rounded-md text-sm font-medium text-white "> <NavLink
      to={"/classes"}
      className={({ isActive }) => (isActive ? "text-[#E5AF4C]" : "")}
    >
      Classes
    </NavLink></li>
    <li className="block lg:my-0  px-3 py-4 lg:rounded-md text-sm font-medium text-white ">   {user && (
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? "text-[#E5AF4C]" : ""
        }
      >
        Dashboard
      </NavLink>
    )}
    </li>
    <li className="block lg:my-0  px-3 py-4 lg:rounded-md text-sm font-medium text-white ">  <NavLink
      to={"/register"}
      className={({ isActive }) => (isActive ? "text-[#E5AF4C]" : "")}
    >Sign Up </NavLink></li>

    {hideLogOut ? (
      ""
    ) : (
      <li>
        {user ? (
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 rounded-full"
              src={user?.photoURL}
              alt="userImg"
            />
            <button
              onClick={handleLogOut}
              className="flex items-center  shadow-xl hover:bg-red-800  bg-red-600 text-white py-4 rounded-md px-4"
            >
              LogOut
            </button>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="btn">
              login
            </button>
          </Link>
        )}
      </li>
    )}


    {/* <li> {user && <img className='w-10 h-10 rounded-full sm:text-center ' src={user.photoURL} alt="" />}  </li> */}

  </>
  return (
    <nav className="bg-gray-600 fixed top-0 z-10 bg-opacity-60 w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6 text-black`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>



              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6 text-black`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex lg:items-center justify-start  lg:justify-between  sm:items-stretch sm:justify-start">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img className='w-32' src={logo} alt="" />
              <h3 className='text-[#E5AF4C] uppercase text-2xl font-semibold'>Academy</h3>

            </div>
            {/* Navigation links */}
            <div className="hidden sm:block sm:ml-6">

              <ul className='flex space-x-4 items-center '>
                {navItems}

                <li>
                  <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input onChange={handleThemeToggle} className="w-0 bg-transparent" type="checkbox" />

                    {/* sun icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                  </label></li>

              </ul>

            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-gray-700`}>

        <ul className='px-2 pt-2 pb-3 space-y-1'>
          {navItems}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
