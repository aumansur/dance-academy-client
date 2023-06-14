const InstructorsCard = ({ items }) => {
  const { image, name, email } = items;
  return (
    <div className="border p-5 rounded-md">
      <img className="w-full h-96 rounded-md shadow-sm" src={image} alt="" />
      <h3 className="text-xl font-semibold mt-3">Instructor_Name: {name}</h3>
      <p className="text-gray-600">Email: {email}</p>
    </div>
  );
};

export default InstructorsCard;
