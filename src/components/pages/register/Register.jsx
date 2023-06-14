import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (!(data?.password === data?.confirmPassword)) {
      setError("password and confirm-password is not match");
      return;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(data?.password)) {
      setError(
        "Password have Minimum six char,at least one letter and one number"
      );
      return;
    }
    if (data?.email && data?.name && data?.image) {
      signUp(data?.email, data?.password)
        .then((result) => {
          const user = result.user;
          updateProfile(user, {
            displayName: data?.name,
            photoURL: data?.image,
          })
            .then(() => {
              const info = {
                image: result?.user?.photoURL,
                name: result?.user?.displayName,
                email: result?.user?.email,
                role: "student",
              };
              fetch("http://localhost:5000/users", {
                method: "post",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(info),
              })
                .then((res) => res.json())
                .then((data) => console.log(data));
              setError("");
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 md:w-1/3"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            {...register("name", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            {...register("password", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="********"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photo-url"
          >
            Photo URL
          </label>
          <input
            {...register("image", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photo-url"
            type="text"
            placeholder="Enter photo URL"
          />
          <p className="text-sm text-red-400 mt-2">{error}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
