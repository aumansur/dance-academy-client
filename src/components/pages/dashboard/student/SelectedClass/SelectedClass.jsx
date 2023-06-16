import Swal from "sweetalert2";
import useSelectedClass from "../../../../../hooks/useSelectedClass";
import SelectedClassCard from "./SelectedClassCard";

const SelectedClass = () => {
  const [selectedClassesData, loading, refetch] = useSelectedClass();
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://dance-academy-server-aumansur.vercel.app/deleteSelectedClass/${id}`,
          {
            method: "delete",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data?.deletedCount > 0) {
              Swal.fire("Deleted!", "Your post has been deleted.", "success");
            }
            console.log(data);
          });
      }
    });
  };

  return (
    <div className="py-5 px-10">
      <h1 className="text-4xl mb-10 font-semibold text-center">
        Selected Class
      </h1>
      <table className="w-full border text-center">
        <thead className="text-xl bg-primary text-white">
          <tr>
            <th className="p-3 border">#</th>
            <th className="p-3 border">Class Image</th>
            <th className="p-3 border">Class Name</th>
            <th className="p-3 border">Instructor Name</th>
            <th className="p-3 border">Price</th>

            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedClassesData?.map((item, index) => (
            <SelectedClassCard
              key={item?._id}
              refetch={refetch}
              index={index}
              item={item}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClass;
