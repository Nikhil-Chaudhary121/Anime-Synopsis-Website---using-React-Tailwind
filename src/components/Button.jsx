import { FaBookReader } from "react-icons/fa";
const Button = ({ text }) => {
  return (
    <button className=" px-8 py-2 w-full flex justify-between items-center rounded-md text-white font-montserrat font-semibold font-2xl  bg-orange-300 ">
      {text} <FaBookReader />
    </button>
  );
};

export default Button;
