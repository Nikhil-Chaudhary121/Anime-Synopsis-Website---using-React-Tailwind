const ReviewDes = ({
  image,
  synopsis,
  status,
  genres,
  ranking,
  type,
  episodes,
}) => {
  return (
    <section className="relative">
      <div className=" w-full gap-6 flex flex-col justify-center items-center">
        <h1
          className={` sm:text-[5rem] xs:text-[3.5rem] text-[2.7rem] font-[df] font-semibold text-`}
        >
          Synopsis
        </h1>
        <div className=" w-full h-fit grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="gap-8 flex flex-col h-fit items-end ">
            <div className=" h-[3px] w-full bg-[#345947]"></div>
            <p className=" font-dosis text-2xl text-right font-medium tracking-wide text-second w-[97%] h-fit overflow-hidden">
              {synopsis}
            </p>
            <div className=" h-[3px] w-full bg-[#345947]"></div>
          </div>
          <div className=" w-full h-full">
            <img src={image} className=" w-full h-full object-cover" alt="" />
          </div>
        </div>
        <div className="text-center">
          <p className=" font-rubik mt-16 tracking-wider font-semibold text-second ">
            Episodes : {episodes}
          </p>
          <p className=" font-rubik  tracking-wider font-semibold text-second ">
            Aired : {status}
          </p>
          <p className=" font-rubik tracking-wider font-semibold text-second ">
            Geners : {genres?.map((genre) => genre + " ,")}
          </p>
          <p className=" font-rubik tracking-wider font-semibold text-second ">
            Ranking : {ranking}
          </p>
          <p className="  font-rubik tracking-wider font-semibold text-second ">
            Type : {type}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewDes;
