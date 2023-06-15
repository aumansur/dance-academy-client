const ClassesCard = ({ item }) => {
  const { image, name } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">

      <div className="card-body relative">
        <figure> <img className="rounded-lg w-96 h-96" src={image} alt="" /></figure>
        <h2 className="card-title text-center rounded-tl-lg rounded-br-[400px] rounded-tr-[100px] bg-[#E5AF4C] font-semibold px-4 py-1 w-40 shadow-2xl shadow-white absolute bottom-10 right-0">  {name}</h2>

      </div>
    </div>
  );
};

export default ClassesCard;

