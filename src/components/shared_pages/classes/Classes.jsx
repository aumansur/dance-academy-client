import ClassesCard from "./ClassesCard";
import { Link } from "react-router-dom";
import useClasses from "../../../hooks/useClasses";

const Classes = () => {
  const [classData, loading] = useClasses();
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 text-white py-20 container">
      <h1 className="text-6xl italic text-center">Popular Classes</h1>
      <p className="text-[#91463E] text-center font-medium mt-2 text-xl">
        Choose your style
      </p>
      <div className="grid grid-cols-1 px-3 md:px-0 mt-10 md:grid-cols-3 gap-10">
        {classData?.slice(0, 6).map((item) => (
          <ClassesCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center flex justify-center mt-12">
        <Link to={"/classes"}>
          <button className="my-btn flex justify-center items-center ">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Classes;
