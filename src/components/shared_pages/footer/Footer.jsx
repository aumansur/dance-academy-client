import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container flex my-5 flex-col md:flex-row justify-center gap-20 items-center py-8 px-4">
        <div className="">
          <img className="w-48 mx-auto" src={logo} alt="" />
          <div>
            <div className="mt-5 flex gap-5 text-3xl justify-center flex-wrap">
              <span className="p-2 bg-gray-800 text-blue-600 rounded-full shadow-lg">
                <FaGoogle />
              </span>
              <span className="p-2 bg-gray-800 text-blue-600 rounded-full shadow-lg">
                <FaTwitter />
              </span>
              <span className="p-2 bg-gray-800 text-blue-600 rounded-full shadow-lg">
                <FaInstagram />
              </span>
              <span className="p-2 bg-gray-800 text-blue-600 rounded-full shadow-lg">
                <FaLinkedin />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-4 flex flex-row justify-start  w-full">
            <input
              placeholder="Enter Your Email"
              className="bg-gray-100 w-full border outline-none p-2 rounded-lg"
              type="text"
              name=""
            />
            <button className="p-2 font-semibold text-white bg-blue-700 hover:bg-blue-900 rounded-lg -ml-3">
              Send Us
            </button>
          </div>
          <div>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Toy Palace Stores. All rights by
              Mafuz, reserved.
            </p>
            <p className="text-gray-400">123 Main Street, City, State, ZIP</p>
            <p className="text-gray-400">
              Phone: 123-456-7890 | Email: info@example.com
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="border-[0.3px] border-gray-600 shadow-md mt-4 "></div>
        <p className="p-5 text-center text-2xl font-semibold">
          Copyright © 2023 Flaire - Dance School & by Mafuz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
