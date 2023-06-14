import { Outlet } from "react-router-dom";
import Navbar from "../components/shared_pages/navbar/Navbar";
import Footer from "../components/shared_pages/footer/Footer";

const Main = () => {
  return (
    <div className="font-popi">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
