const ClassesCard = ({ item }) => {
  const { image, name } = item;
  return (
    <div className="relative">
      <img className="rounded-lg w-96 h-96" src={image} alt="" />
      <h1
        style={{ clipPath: "polygon(25% 0%, 100% 0, 75% 100%, 0% 100%)" }}
        className="text-center  bg-[#E5AF4C] font-semibold px-4 py-1 w-40 shadow-2xl shadow-white absolute bottom-10 right-0"
      >
        {name}
      </h1>
    </div>
  );
};

export default ClassesCard;
