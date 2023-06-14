import { Link } from "react-router-dom";
import error from "../../../assets/errorImg/error.jpg";

const Error = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mt-10 flex justify-center">
        <img className="w-[70vw] h-[80vh]" src={error} alt="" />
      </div>
      <Link to={"/"}>
        <div className="w-32 mx-auto border text-center mb-12 bg-red-500 p-3 rounded-lg text-white hover:bg-red-600 font-semibold">
          <button className="">Go To Home</button>
        </div>
      </Link>
    </div>
  );
};

export default Error;
