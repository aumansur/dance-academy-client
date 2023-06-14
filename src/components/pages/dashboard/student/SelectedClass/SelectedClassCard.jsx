import { Link } from "react-router-dom";

const SelectedClassCard = ({ item, handleDelete, index }) => {
  return (
    <tr className="text-center">
      <td className="border p-2">{index + 1}</td>
      <td className="border flex justify-center p-2">
        <img className="w-20 h-20 rounded-full" src={item?.image} alt="" />
      </td>
      <td className="border p-2">{item?.name}</td>
      <td className="border p-2">{item?.instructorName}</td>
      <td className="border p-2">${item?.price}</td>
      <td className="border p-2">
        <div className="flex gap-3 justify-center">
          <Link to={`/dashboard/payment/${item?._id}`}>
            <button className="btn btn-primary">Pay</button>
          </Link>
          <button
            onClick={() => handleDelete(item?._id)}
            className="btn btn-secondary"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SelectedClassCard;
