import useMyAddedClass from "../../../../../hooks/useMyAddedClass";
import MyClassesCard from "./MyClassesCard";

const MyClass = () => {
  const [addedClassData, Addedloading] = useMyAddedClass();
  if (Addedloading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="py-5 px-10">
      <h1 className="text-4xl mb-10 font-semibold text-center">
        My Added Classes
      </h1>
      <table className="w-full border text-center">
        <thead className="text-xl bg-primary text-white">
          <tr>
            <th className="p-3 border">#</th>
            <th className="p-3 border">Class Name</th>
            <th className="p-3 border">status</th>
            <th className="p-3 border">Enrolled Students</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {addedClassData?.map((item, index) => (
            <MyClassesCard key={item?._id} index={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClass;
