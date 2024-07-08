const ReviewSec1 = ({ image, status, title, episodes, type }) => {
  // const newTitle = [...title.split(" ")];
  return (
    <section className="relative ">
      <div
        className={` bg-brown overflow-hidden flex md:flex-row flex-col justify-between lg:pt-24 lg:px-28 pt-12 px-12 md:h-[85vh] h-full w-full `}
      >
        <div className="relative flex w-fit h-fit ">
          {/* <div className=" absolute bg-black z-10 opacity-[0.4] h-[80vh] md:w-[65vw] lg:w-[55vw]"></div> */}
          <img
            src={image}
            className="md:h-[80vh] sm:h-[60vh] lg:w-[55vw] md:w-[65vw] w-[100vw]  object-cover opacity-[0.95] object-center"
            alt=""
          />
          {/*    */}
        </div>
        <div className=" flex  flex-col my-10  text-center lg:gap-8 mx-auto  items-center md:gap-4 md:absolute lg:left-[50%] md:left-[45%] sm:left-[50%]  lg:top-44 md:top-[38%] z-20 ">
          <p className=" text-white  font-montserrat lg:text-3xl md:text-2xl sm:text-xl text-[16px] tracking-[0.25em] font-semibold ">
            {type}
          </p>
          <h1 className=" mb-10 text-white lg:text-[7rem] flex flex-col items-center md:text-[5.8rem] sm:text-[6rem] xs:text-[4rem] text-[3.5rem]  leading-none font-[Segoe] font-bold">
            {/* {newTitle.map((word) => (
              <span key={word}>{word}</span>
            ))} */}
            {title}
          </h1>
          <div className=" flex items-center lg:gap-10 md:gap-6">
            <div className=" lg:h-8 md:h-6 h-4 w-36 bg-white"></div>
            <h1 className="text-white md:text-[3rem] sm:text-[2rem] leading-none font-[Segoe] ">
              こんにちは
            </h1>
          </div>
        </div>
        <div className=" hidden  md:flex gap-2 pt-10 cursor-pointer">
          <div className=" h-4 w-4 rounded-full bg-white"></div>
          <div className=" h-4 w-4 rounded-full bg-white"></div>
          <div className=" h-4 w-4 rounded-full bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSec1;
