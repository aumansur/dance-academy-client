import Swal from "sweetalert2";
import useClasses from "../../../../../hooks/useClasses";

const ManageClass = () => {
  const [classData, loading, refetch] = useClasses();
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  const handleApproveStatus = (id) => {
    fetch(`http://localhost:5000/classes/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data?.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Admin has been Approved Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="py-5 px-10 w-full">
      <h1 className="text-4xl mb-10 font-semibold text-center">
        Manage Classes
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {classData?.map((data) => (
          <div key={data?._id}>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img className="w-full h-60" src={data?.image} alt="Shoes" />
              </figure>
              <div className="card-body font-semibold">
                <h1>{data?.name}</h1>
                <h2>Instructor Name: {data?.instructorName}</h2>
                <h2>Instructor Email: {data?.instructorEmail}</h2>
                <h2>Available Seats: {data?.availableSeats}</h2>
                <h2>Price: {data?.price}</h2>
                <h2>Status: {data?.status}</h2>

                {data?.status === "pending" ? (
                  <div className="flex gap-5">
                    <button
                      onClick={() => handleApproveStatus(data?._id)}
                      className="btn btn-primary"
                    >
                      Approve
                    </button>
                    <button className="btn btn-secondary">Deny</button>
                  </div>
                ) : (
                  <div className="flex gap-5">
                    <button disabled className="btn btn-primary">
                      Approve
                    </button>
                    <button disabled className="btn btn-secondary">
                      Deny
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClass;
