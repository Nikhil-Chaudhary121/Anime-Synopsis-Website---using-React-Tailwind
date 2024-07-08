import Button from "../components/Button";

const Hero = () => {
  return (
    <section className=" w-full relative">
      <div className=" relative sm:px-6 px-0">
        <div className=" bg-orange-300 rounded-3xl">
          <img
            src="./hero4.png"
            alt="hero"
            className=" rounded-[2rem] h-[18rem] sm:h-[44rem] w-full object-cover object-top"
          />
        </div>
        <div className=" absolute top-10 hidden sm:flex flex-col gap-2 -left-[10px]  ">
          <h1 className="lg:text-[40px] md:text-[32px] sm:text-[28px] text-[16px] w-fit font-gilroy font-[600]  bg-black text-white inline-block px-4 ">
            THE
          </h1>
          <h1 className="lg:text-3xl md:text-[26px] sm:text-[22px] text-[18px] w-fit font-gilroy font-[600]  bg-black text-white inline-block px-4 ">
            WEBSITE WHERE
          </h1>
          <h1 className="lg:text-[4rem] md:text-4xl sm:text-3xl text-2xl w-fit font-gilroy font-[600]  bg-black text-white inline-block px-6 lg:py-4 md:py-2 ">
            YOU CAN GIVE AND
          </h1>
          <h1 className="lg:text-[32px] md:text-[28px] sm:text-[22px] text-[18px] w-fit font-gilroy font-[600]  bg-black text-white inline-block px-4 ">
            READ REVIEWS OF
          </h1>
          <h1 className="lg:text-4xl md:text-[40px] sm:text-[30px] text-[20px] w-fit font-gilroy font-[600]  bg-black text-white inline-block px-4 ">
            ANY ANIME
          </h1>
          <h1 className="lg:text-3xl md:text-[26px] sm:text-[20px] text-[16px] w-fit font-gilroy font-[600]  bg-black text-white inline-block px-4 ">
            READ BEFORE YOU SPEND
          </h1>
        </div>
      </div>
      <div className="  flex absolute xl:justify-between justify-center w-full -bottom-24 items-end sm:pl-10 xl:pr-20 sm:pr-10">
        <div className=" hidden xl:flex flex-col">
          <h1 className=" lg:text-[6rem] text-[4rem] font-bold font-portings leading-[5rem]">
            5
          </h1>
          <h1 className=" font-bold font-gilroy leading-none">2024.3.27</h1>
          <h1 className=" font-bold font-gilroy">ON SALE</h1>
        </div>
        <div className=" z-10 bg-white gap-4 rounded-lg lg:py-16 py-10 px-10 text-center flex flex-col justify-center items-center ">
          <h1 className=" lg:text-[10vw] text-orange-300 md:text-[6rem] sm:text-[5rem] text-[4rem] lg:leading-[3.5rem] md:leading-6 leading-4 mb-8 font-portings font-semibold tracking-[0.6rem]">
            ANI
            <span className="">M</span>E<span className="   ">X</span>
          </h1>
          <p className=" font-gilroy lg:text-[1rem] md:leading-4 sm:leading-2 leading-none md:text-[12px] text-[10px] font-bold">
            THE PLATFORM WHERE YOU CAN FIND ANY ANIME AND THEIR REVIEW{" "}
          </p>
        </div>
        <div className=" hidden -ml-36 xl:flex flex-col gap-5 ">
          <img
            src="./hero.jpg"
            className=" w-48  h-72 object-cover rounded-lg"
            alt=""
          />
          <Button text={"Review Now"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
