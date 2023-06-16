import { useForm } from "react-hook-form";
import useAuth from "../../../../../hooks/useAuth";
import Swal from "sweetalert2";

const AddClass = () => {
  const { register, handleSubmit } = useForm();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  const onSubmit = (data) => {
    const {
      name,
      image,
      instructorName,
      instructorEmail,
      availableSeats,
      price,
    } = data;
    const info = {
      name,
      image,
      instructorName,
      instructorEmail,
      availableSeats: parseInt(availableSeats),
      price: parseFloat(price),
      status: "pending",
    };
    console.log(info);
    fetch("https://dance-academy-server-aumansur.vercel.app/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Class Added SuccessFully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="py-5 px-10">
      <h1 className="text-4xl mb-10 font-semibold text-center">Add A Class</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full grid grid-cols-2 gap-5 mx-auto bg-white rounded-lg shadow-md p-6"
      >
        <div className="mb-4">
          <label htmlFor="image" className="text-gray-700 font-bold mb-2">
            Class Image:
          </label>
          <input
            {...register("image", { required: true })}
            type="text"
            id="image"
            name="image"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className=" text-gray-700 font-bold mb-2">
            Class Name:
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorName"
            className=" text-gray-700 font-bold mb-2"
          >
            Instructor Name:
          </label>
          <input
            defaultValue={user?.displayName}
            {...register("instructorName", { required: true })}
            type="text"
            id="instructorName"
            name="instructorName"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorEmail"
            className=" text-gray-700 font-bold mb-2"
          >
            Instructor Email:
          </label>
          <input
            defaultValue={user?.email}
            {...register("instructorEmail", { required: true })}
            type="email"
            id="instructorEmail"
            name="instructorEmail"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="availableSeats"
            className=" text-gray-700 font-bold mb-2"
          >
            Available Seats:
          </label>
          <input
            {...register("availableSeats", { required: true })}
            type="number"
            id="availableSeats"
            name="availableSeats"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className=" text-gray-700 font-bold mb-2">
            Price:
          </label>
          <input
            {...register("price", { required: true })}
            type="number"
            id="price"
            name="price"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full col-span-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddClass;
