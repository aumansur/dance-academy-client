import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const Banner = () => {
  return (
    <>
      <AwesomeSlider className="w-screen h-screen md:h-[93vh]">
        <div
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)),linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('https://cdn.shopify.com/s/files/1/0463/4473/2835/files/slider1-bg_2000x.jpg?v=1614328069')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          className="w-full"
        >
          <div className="text-center w-[95vw] md:w-1/2 mx-auto text-white">
            <h1 className="text-3xl md:text-5xl tracking-[1px] font-semibold md:leading-[60px] mt-20">
              Become A Professional Dancer

            </h1>
            <p className="text-[17px]  text-center mt-3 text-gray-400">
              Dance is a universal language that transcends barriers and allows individuals to express their deepest emotions without uttering a single word.
            </p>
            <div className="flex flex-col md:flex-row md:gap-5 justify-center items-center mt-5">

              <button className="my-btn flex justify-center items-center  ">LEARN MORE</button>
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
          <div className="text-center flex-col justify-center w-[95vw] md:w-1/2 mx-auto text-white">
            <h1 className="text-3xl md:text-5xl tracking-[1px] font-semibold md:leading-[60px] mt-20">
              Become A Professional Dancer
            </h1>
            <p className="text-[17px]  text-center mt-3 text-gray-400">
              Dance is a universal language that transcends barriers and allows individuals to express their deepest emotions without uttering a single word.
            </p>
            <div className="flex flex-col md:flex-row md:gap-5 justify-center items-center mt-5">

              <button className="my-btn flex justify-center items-center ">LEARN MORE</button>
            </div>
          </div>
        </div>
      </AwesomeSlider>
    </>
  );
};

export default Banner;
