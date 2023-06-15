const InstructorsCard = ({ items }) => {
  const { image, name, email } = items;
  return (
    <>

      {/* <div className="border p-5 rounded-md">
        <img className="w-full h-96 rounded-md shadow-sm" src={image} alt="" />
        <h3 className="text-xl font-semibold mt-3">Instructor_Name: {name}</h3>
        <p className="text-gray-600">Email: {email}</p>
      </div> */}
      {/* new */}
      <div className="card  bg-base-100 shadow-xl">
        <figure><img className="w-full h-96" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Instructor Name: {name}</h2>
          <p className="text-gray-600">Email: {email}</p>

        </div>
      </div></>

  );
};

export default InstructorsCard;
