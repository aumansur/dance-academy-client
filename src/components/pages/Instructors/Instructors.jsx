import useInstructor from "../../../hooks/useInstructor";
import InstructorsCard from "./InstructorsCard";

const Instructors = () => {
  const [instructorData, loading] = useInstructor();

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="">
      <div
        className="w-screen h-52 relative text-white"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)),linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('https://i.ibb.co/pzkygxH/img-4523-1660715415.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h1 className="absolute bottom-10 left-10 text-3xl font-semibold">
          All Instruction Collection
        </h1>
      </div>
      <div className="container grid grid-cols-3 gap-10 my-20">
        {instructorData?.map((item) => (
          <InstructorsCard items={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
