// import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 container text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and Company Name */}
          <div className="">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Logo" className="h-8 mr-2" />
              <h3 className="text-xl font-bold"> <span className='text-[#E5AF4C] uppercase text-2xl font-semibold'>Academy</span></h3>
            </div>
            <p className="text-sm">123 Street, City, State</p>
            <p className="text-sm">Phone: 123-456-7890</p>
            <p className="text-sm">Email: info@danceacademy.com</p>
          </div>
          {/* Services */}
          <div className="pl-16">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-400">Online Training</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Offline Training</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Practice</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">caring</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Instructor</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Classes</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">About us</a></li>
            </ul>
          </div>
          {/* Legal Policy */}
          <div className="">
            <h3 className="text-xl font-bold mb-4">Legal Policy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Cookie Policy</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Disclaimer</a></li>
            </ul>
          </div>
          {/* Mail Send */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
            <form className="flex lg:relative">
              <input type="email" className="bg-gray-700 text-gray-200 py-[7px] w-[400px] px-3 rounded-l-md focus:outline-none" placeholder="Enter your email" />
              <button type="submit" className="lg:absolute right-0 flex items-center justify-center my-btn text-white py-5 px-4 rounded-r-md  focus:outline-none">Subscribe</button>
            </form>
          </div>
        </div>

        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Dance academy All rights reserved @ mansur.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
