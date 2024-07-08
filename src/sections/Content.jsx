import { useRecoilValue } from "recoil";
import ContentCard from "../components/ContentCard";
import { data } from "../constants";
import feedDataAtom from "../atoms/FeedDataAtom";

const Content = () => {
  const feedData = useRecoilValue(feedDataAtom);
  return (
    <section className=" relative">
      <div
        id="mostwatched"
        className=" mb-10 flex items-center gap-6 justify-center"
      >
        <h1 className=" font-portings font-bold text-center tracking-wide leading-4">
          Most <br />
          Reviewed
        </h1>
        <div className=" h-[2px] w-[60px] bg-slate-gray "></div>
        <p className=" font-gilroy tracking-[0.6em]">Top Anime </p>
      </div>
      <div className=" mt-8 grid gap-6 xl:grid-cols-4 md:grid-cols-3 grid-cols-2  ">
        {data.map((card) => (
          <ContentCard
            key={card.title}
            name={card.title}
            imgURL={card.image}
            date={card.status}
          />
        ))}
      </div>
      {feedData && (
        <>
          <div className=" mt-20 flex items-center gap-6 justify-center">
            <h1 className=" font-portings font-bold text-center tracking-wide leading-4">
              Explore <br />
              More
            </h1>
            <div className=" h-[2px] w-[60px] bg-slate-gray "></div>
            <p className=" font-gilroy tracking-[0.6em]">Top Anime </p>
          </div>
          <div className=" mt-8 grid gap-6 xl:grid-cols-4 md:grid-cols-3 grid-cols-2 ">
            {feedData?.map((card) => (
              <ContentCard
                key={card.title}
                name={card.title}
                imgURL={card.image}
                date={card.status}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Content;
