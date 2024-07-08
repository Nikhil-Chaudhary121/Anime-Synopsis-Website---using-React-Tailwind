import { Link } from "react-router-dom";
const ContentCard = ({ imgURL, name, date }) => {
  return (
    <div className=" w-[100%] lg:h-[30rem] sm:h-[25rem] h-[18rem] p-2 rounded-xl bg-stone-100">
      <Link to={`/${name}`}>
        <div className="w-full h-[85%] ">
          <img
            src={imgURL}
            className="w-[100%] h-full  object-cover object-center rounded-lg"
            alt=""
          />
        </div>
      </Link>
      <div className=" mt-3 px-2 ">
        <p className=" font-gilroy font-bold leading-4 whitespace-nowrap overflow-hidden">
          {name}
        </p>
        <p className=" font-montserrat font-semibold w-60 leading-2 ">{date}</p>
      </div>
    </div>
  );
};

export default ContentCard;
