import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const Banner = () => {
  return (
    <>
      <AwesomeSlider className="w-screen h-screen md:h-[93vh]">
        <div
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)),linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('https://i.ibb.co/pzkygxH/img-4523-1660715415.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          className="w-full"
        >
          <div className="text-center w-[95vw] md:w-1/2 mx-auto text-white">
            <h1 className="text-3xl md:text-5xl tracking-[1px] font-semibold md:leading-[60px] mt-20">
              IMPROVE YOUR DANCE SKILLS
              <br />
              WITH FLAIRE
            </h1>
            <p className="text-[17px] mt-3 text-gray-300">
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper.
            </p>
            <div className="flex flex-col md:flex-row md:gap-5 justify-center items-center mt-5">
              <button className="btn btn-primary">REGISTER NOW</button>
              <button className="btn ">LEARN MORE</button>
            </div>
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)),linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('https://i.ibb.co/TgdrtSL/dance-overview-2.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          className="w-full"
        >
          <div className="text-center w-[95vw] md:w-1/2 mx-auto text-white">
            <h1 className="text-3xl md:text-5xl tracking-[1px] font-semibold md:leading-[60px] mt-20">
              IMPROVE YOUR DANCE SKILLS
              <br />
              WITH FLAIRE
            </h1>
            <p className="text-[17px] mt-3 text-gray-300">
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper.
            </p>
            <div className="flex flex-col md:flex-row md:gap-5 justify-center items-center mt-5">
              <button className="btn btn-primary">REGISTER NOW</button>
              <button className="btn ">LEARN MORE</button>
            </div>
          </div>
        </div>
      </AwesomeSlider>
    </>
  );
};

export default Banner;
