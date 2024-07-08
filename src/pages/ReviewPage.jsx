import { useParams } from "react-router-dom";
import { ReviewDes, ReviewSec1, ReviewSec3 } from "../sections";
import CreateAnime from "../components/CreateAnime";
import { data2 } from "../constants";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import currentAnimeAtom from "../atoms/CurrentAnime";
import useShowToast from "../hooks/useShowToast";

const ReviewPage = () => {
  const [loading, setLoading] = useState(false);
  const { animeId } = useParams();
  const [currentAnime, setCurrentAnime] = useRecoilState(currentAnimeAtom);
  console.log(animeId);
  const showToast = useShowToast();
  useEffect(() => {
    if (loading) return null;
    setLoading(true);
    const getAnimeData = async () => {
      // if (!currPageData.length) {
      try {
        const res = await fetch(
          `https://anime-db.p.rapidapi.com/anime?page=1&size=1&search=${animeId}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "anime-db.p.rapidapi.com",
              "x-rapidapi-key":
                "cead36adc2msh7b77df59bc69903p10957bjsn8c98388a85c4",
            },
          }
        );
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setCurrentAnime(() => data.data[0]);
        console.log(currentAnime);
      } catch (error) {
        showToast("Error", error, "error");
        setCurrentAnime(null);
      } finally {
        setLoading(false);
      }
      // }
    };
    getAnimeData();
  }, [showToast, setCurrentAnime]);
  // const currPageData = currentAnime[0];
  // console.log(currPageData);
  return (
    <main className=" relative w-full min-h-screen ">
      <section>
        <ReviewSec1 {...currentAnime} />
      </section>
      <section className=" py-16 md:px-28 px-8">
        <ReviewDes {...currentAnime} />
      </section>
      <section className=" relative">
        <ReviewSec3 />
      </section>
    </main>
  );
};

export default ReviewPage;
