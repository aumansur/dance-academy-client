import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { BiHide, BiShow } from "react-icons/bi";
import Swal from "sweetalert2";

const Login = () => {
  const { login, google } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleGoolgeLogin = () => {
    google()
      .then((result) => {
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
  };

  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const onSubmit = (data) => {
    if (data?.email && data?.password) {
      login(data?.email, data?.password)
        .then((result) => {
          const user = result.user;
          console.log(user);
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
            htmlFor="username"
          >
            Email
          </label>
          <input
            {...register("email", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              {...register("password", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="********"
            />
            <span

              onClick={togglePasswordVisibility}
              className=" absolute right-[40px] top-[23px] -translate-y-2/4 text-gray-500"
            >
              {showPassword ? <BiHide size={25} /> : <BiShow size={25} />}
            </span>
          </div>
          <p className="text-sm text-red-400 mt-2">{error}</p>
          <div className="flex justify-between">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Forgot Password?
            </a>
            <p className="text-end text-sm text-gray-500">
              if you are new then{" "}
              <span className="text-red-400 underline">
                <Link to={"/register"}>Register</Link>
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className='my-btn w-full flex items-center justify-center'
            type="submit"
          >
            Sign In
          </button>

        </div>

        <div className="flex items-center">
          <div className="flex-grow border-b border-gray-300"></div>
          <div className="mx-4 text-gray-500 text-sm">Or</div>
          <div className="flex-grow border-b border-gray-300"></div>
        </div>
        <div
          onClick={handleGoolgeLogin}
          className=" cursor-pointer w-full flex items-center justify-center mb-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <span>
            <FaGoogle />
          </span>
          <p className="text-sm ml-4 font-semibold">Continue with Google</p>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default Login;
