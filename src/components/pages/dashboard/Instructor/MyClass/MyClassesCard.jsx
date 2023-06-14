import { Link } from "react-router-dom";

const MyClassesCard = ({ item, index }) => {
  return (
    <tr>
      <td className="border p-2">{index + 1}</td>
      <td className="border p-2">{item?.name}</td>
      <td className="border p-2">{item?.status}</td>
      <td className="border p-2">0</td>
      <td className="border p-2">
        <div className="flex gap-4 justify-center">
          <button className="btn btn-secondary">Feedback</button>
          <Link to={`/dashboard/updateAddedClass/${item?._id}`}>
            <button className="btn btn-primary">update</button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default MyClassesCard;
