import { Slide } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div className='container py-6 bg-gradient-to-b from-black to-gray-800 text-white px-4'>
      <div className="md:flex justify-center items-center gap-20">
        <div className="w-1/2" >
          <p className='text-2xl'>My specialization</p>
          <h2 className='lg:text-5xl text-3xl lg:w-[500px] font-bold '>I am a software
            <span className='text-green-600 w-96'> engineer</span> who cares
            about the code and the people.</h2>
          <p className="sm:text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
          <button className="btn btn-primary">ABOUT US</button>
        </div>
        <div className="w-1/2">
          <img className=' mx-auto w-2/3 md:w-full shadow-lg rounded-md' src="https://kamleshyadav.com/wp/dancev3/dance-multipage/wp-content/uploads/sites/3/2016/11/p4.jpg" alt="" />
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
