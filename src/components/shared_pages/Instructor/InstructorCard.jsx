const InstructorCard = ({ items }) => {
  const { image, name, email } = items;
  return (
    <div>
      <img className="w-full h-96 rounded-md shadow-sm" src={image} alt="" />
      <h3 className="text-xl font-semibold mt-3">Instructor_Name: {name}</h3>
      <p className="text-gray-300">Email: {email}</p>
    </div>
  );
};

export default InstructorCard;
