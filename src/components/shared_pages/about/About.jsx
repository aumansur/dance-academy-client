import { Slide } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div className="container py-12">
      <div className=" mt-20 mb-10 flex flex-col md:flex-row gap-10 items-center">
        <div data-aos="fade-up" className="  md:w-[55%]">
          <h4 className="text-2xl font-semibold text-[#6369F8] mb-4">
            WHO WE ARE
          </h4>
          <h1 className="text-5xl leading-[60px] font-semibold mb-2">
            BEST DANCE SCHOOL &<br />
            STUDIO SINCE 1992
          </h1>
          <p className="text-[17px] text-gray-600 mb-5">
            This also meant we needed to provide a learning environment run by
            experienced and successful coaches. However, our most important goal
            was to create a welcoming atmosphere and community in which everyone
            feels a sense of belonging.
          </p>
          <button className="btn btn-primary">ABOUT US</button>
        </div>
        <div className="md:w-[45%] relative">
          <div data-aos="fade-up-left" className="md:w-[95%] mt-8">
            <img
              className="rounded-xl"
              src="https://i.ibb.co/TwFvsVD/the-group-of-modern-ballet-dancers-2021-08-26-17-40-44-utc-1.jpg"
              alt=""
            />
          </div>
          <img
            className="absolute -z-10 top-0 right-0 w-60"
            src="https://i.ibb.co/df8Xw9q/line-pattern-01.png"
            alt=""
          />
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
        </div>
      </Slide>
    </div>
  );
};

export default About;
