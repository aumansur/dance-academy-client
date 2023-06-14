import Swal from "sweetalert2";
import useClasses from "../../../hooks/useClasses";
import ClassPageCard from "./ClassPageCard";
import useAuth from "../../../hooks/useAuth";

const ClassesPage = () => {
  const { user } = useAuth();
  const [classData, loading] = useClasses();
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  const handleSelect = (item) => {
    const {
      name,
      image,
      instructorName,
      instructorEmail,
      availableSeats,
      price,
      status,
    } = item;
    const newItem = {
      name,
      image,
      instructorName,
      instructorEmail,
      availableSeats,
      price,
      status,
      email: user?.email,
    };
    fetch("http://localhost:5000/selectClasses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Item Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
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
          All Dance Classes
        </h1>
      </div>
      <div className="container grid grid-cols-3 gap-5 my-20">
        {classData?.map((item) => (
          <ClassPageCard
            handleSelect={handleSelect}
            item={item}
            key={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
