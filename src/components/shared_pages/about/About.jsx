import { Slide } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div className='container py-6 bg-gradient-to-b from-black to-gray-800 text-white px-4'>
      <div className="md:flex  justify-center w-full items-center gap-20">
        <div data-aos="fade-right" className="lg:w-1/2 text-center" >

          <h2 className='lg:text-5xl text-3xl lg:text-left font-bold '>Discover the Beat: Unveiling the Essence of Our Dance Academy</h2>
          <p className="text-center lg:text-left py-8 text-gray-400">Welcome to our vibrant dance academy, a haven for dancers of all ages and abilities to explore their passion for movement, rhythm, and self-expression. We believe that dance is a universal language that transcends boundaries, enabling individuals to communicate their emotions, stories, and dreams through graceful motion</p>
          <button className="btn btn-primary">ABOUT US</button>
        </div>
        <div data-aos="fade-left" className="lg:w-1/2">
          <img className=' mx-auto w-full shadow-lg rounded-md' src="https://kamleshyadav.com/wp/dancev3/dance-multipage/wp-content/uploads/sites/3/2016/11/p4.jpg" alt="" />
        </div>
      </div>


      <Slide>
        <div className="flex flex-col md:flex-row justify-end gap-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className=" text-5xl font-semibold">
              200<span className="text-red-600">+</span>
            </h1>
            <p className="text-xl font-semibold">Dance Class</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className=" text-5xl font-semibold">
              70<span className="text-red-600">+</span>
            </h1>
            <p className="text-xl font-semibold">Instructors</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className=" text-5xl font-semibold">
              24<span className="text-red-600">+</span>
            </h1>
            <p className="text-xl font-semibold">Total Branch</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className=" text-5xl font-semibold">
              360<span className="text-red-600">+</span>
            </h1>
            <p className="text-xl font-semibold">Happy Clients</p>
          </div>
        </div >
      </Slide>
    </div >
  );
};

export default About;
