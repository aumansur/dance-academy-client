import { Link, NavLink } from "react-router-dom";
// import logo from "../../../assets/logo.webp";
import logo from '../../../assets/logo1.png'
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useIsInstructor from "../../../hooks/useIsInstructor";
// import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { useState } from "react";

const Navbar = ({ hideLogOut }) => {
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

    <li> {user ? <button className='  flex items-center  shadow-xl hover:bg-red-800  bg-red-600 text-white py-4 rounded-md px-4' onClick={handleLogOut}>Log Out</button> : <Link to='/login' className="block lg:my-0  px-3 py-2 lg:rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Login </Link>}</li>
    <li> {user && <img className='w-10 h-10 rounded-full sm:text-center ' src={user.photoURL} alt="" />}  </li>


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
