const SliderCard = ({ imgURL }) => {
  return (
    <div className=" mx-4">
      <img
        src={imgURL}
        className="sm:h-24 rounded-xl md:h-32 h-36 lg:h-40 w-full object-cover object-center"
        alt=""
      />
    </div>
  );
};

export default SliderCard;
