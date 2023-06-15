import Instructor from "../../shared_pages/Instructor/Instructor";
import About from "../../shared_pages/about/About";
import Banner from "../../shared_pages/banner/Banner";
import Classes from "../../shared_pages/classes/Classes";

const Home = () => {
  return (
    <div className="bg-white">
      <Banner />
      <Classes />

      <Instructor />
      <About />
    </div>
  );
};

export default Home;
