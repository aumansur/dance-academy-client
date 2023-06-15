import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useIsInstructor from "../../../hooks/useIsInstructor";

const ClassPageCard = ({ item, handleSelect }) => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useIsInstructor();
  const { image, name, instructorName, availableSeats, price } = item;

  return (
    <>
      {/* <div className="p-5 border rounded-lg">
        <img className="w-full h-96 rounded-xl" src={image} alt="" />
        <div>
          <div className="flex flex-col my-3 text-xl">
            <h1 className="text-2xl font-bold">{name}</h1>
           
          </div>
          
        </div>
      </div> */}

      {/* new card */}
      <div className="card  bg-base-100 shadow-xl">
        <figure><img className="w-full h-96" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Instructor Name: {instructorName}</p>
          <p>Available Seats: {availableSeats}</p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            {isAdmin || isInstructor || !user ? (
              <button disabled className="btn btn-primary">
                Select
              </button>
            ) : (
              <button
                onClick={() => handleSelect(item)}
                className="btn btn-primary"
              >
                Select
              </button>
            )}
          </div>
        </div>
      </div>
    </>

  );
};

export default ClassPageCard;
