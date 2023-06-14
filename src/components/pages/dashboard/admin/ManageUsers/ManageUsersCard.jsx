const ManageUsersCard = ({
  user,
  index,
  handleMakeAdmin,
  handleMakeInstructor,
}) => {
  return (
    <tr>
      <td className="border p-2">{index + 1}</td>
      <td className="border p-2">{user?.name}</td>
      <td className="border p-2">{user?.email}</td>
      <td className="border p-2">{user?.role}</td>
      <td className="border p-2">
        <div className="flex justify-center gap-3">
          {user?.role === "instructor" ? (
            <button disabled className="btn btn-primary">
              Instructor
            </button>
          ) : (
            <button
              onClick={() => handleMakeInstructor(user?._id)}
              className="btn btn-primary"
            >
              Instructor
            </button>
          )}

          {user?.role === "admin" ? (
            <button disabled className="btn btn-primary">
              Admin
            </button>
          ) : (
            <button
              onClick={() => handleMakeAdmin(user?._id)}
              className="btn btn-primary"
            >
              Admin
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default ManageUsersCard;
