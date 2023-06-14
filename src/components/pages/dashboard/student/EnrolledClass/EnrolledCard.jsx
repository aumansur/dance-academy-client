const EnrolledCard = ({ item, index }) => {
  return (
    <tr>
      <td className="p-2 border">{index + 1}</td>
      <td className="p-2 border">
        <img className="w-20 h-20 rounded-full" src={item?.classImg} alt="" />
      </td>
      <td className="p-2 border">{item?.className}</td>
      <td className="p-2 border">{item?.email}</td>
      <td className="p-2 border">${item?.price}</td>
      <td className="p-2 border">{item?.date}</td>
      <td className="p-2 border">{item?.transactionId}</td>
    </tr>
  );
};

export default EnrolledCard;
