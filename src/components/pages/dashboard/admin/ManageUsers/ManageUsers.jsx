import Swal from "sweetalert2";
import useUsers from "../../../../../hooks/useUsers";
import ManageUsersCard from "./ManageUsersCard";

const ManageUsers = () => {
  const [users, loading, refetch] = useUsers();
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  const handleMakeAdmin = (id) => {
    fetch(`https://dance-academy-server-aumansur.vercel.app/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Now User is Admin",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (id) => {
    console.log(id);
    fetch(`https://dance-academy-server-aumansur.vercel.app/users/instructor/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Now User is Instructor",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="py-5 px-10">
      <h1 className="text-4xl mb-10 font-semibold text-center">Manage Users</h1>
      <table className="w-full border text-center">
        <thead className="text-xl bg-primary text-white">
          <tr>
            <th className="p-3 border">#</th>
            <th className="p-3 border">User Name</th>
            <th className="p-3 border">User Email</th>
            <th className="p-3 border">Role</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <ManageUsersCard
              handleMakeAdmin={handleMakeAdmin}
              handleMakeInstructor={handleMakeInstructor}
              key={user?._id}
              index={index}
              user={user}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
