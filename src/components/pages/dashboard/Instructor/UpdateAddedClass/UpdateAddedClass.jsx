import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateAddedClass = () => {
  const data = useLoaderData();
  const {
    _id,
    name,
    image,
    availableSeats,
    instructorEmail,
    instructorName,
    price,
  } = data;
  const { register, handleSubmit } = useForm();
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
    fetch(
      `http://localhost:5000/dashboard/updateAddedClass/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Class Update SuccessFully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="py-5 px-10">
      <h1 className="text-4xl mb-10 font-semibold text-center">
        Update Added Class
      </h1>

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
            defaultValue={image}
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
            defaultValue={name}
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
            {...register("instructorName", { required: true })}
            defaultValue={instructorName}
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
            {...register("instructorEmail", { required: true })}
            defaultValue={instructorEmail}
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
            defaultValue={availableSeats}
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
            defaultValue={price}
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

export default UpdateAddedClass;
