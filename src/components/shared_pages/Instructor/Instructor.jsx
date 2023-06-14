import { Link } from "react-router-dom";
import useInstructor from "../../../hooks/useInstructor";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  const [instructorData, loading] = useInstructor();
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#292F3C] text-white py-20 container">
        <h1 className="text-6xl italic text-center">Popular Instructors</h1>
        <p className="text-[#91463E] text-center font-medium mt-2 text-xl">
          Choose your style
        </p>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-10">
          {instructorData?.slice(0, 6).map((item) => (
            <InstructorCard key={item._id} items={item} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to={"/instructors"}>
            <button className="btn btn-primary">Show All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
