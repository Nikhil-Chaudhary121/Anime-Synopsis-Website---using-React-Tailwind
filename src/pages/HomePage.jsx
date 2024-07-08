import React, { useEffect, useState } from "react";
import { SlideCards, Content, Hero, Footer } from "../sections";
import Nav from "../components/Nav";
import useShowToast from "../hooks/useShowToast";
import { useRecoilState } from "recoil";
import feedDataAtom from "../atoms/FeedDataAtom";

const HomePage = () => {
  const showToast = useShowToast();
  const [feedData, setFeedData] = useRecoilState(feedDataAtom);
  const [loading, setLoading] = useState(false);
  console.log("Home is rendered ");
  useEffect(() => {
    if (loading) return null;
    setLoading(true);
    const getFeedPosts = async () => {
      if (!feedData.length) {
        try {
          const res = await fetch(
            "https://anime-db.p.rapidapi.com/anime?page=1&size=12",
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
          setFeedData(() => data.data);
          console.log(data.data);
        } catch (error) {
          showToast("Error", error, "error");
          setFeedData(null);
        } finally {
          setLoading(false);
        }
      }
    };
    getFeedPosts();
  }, [showToast, setFeedData]);
  return (
    <main className=" relative">
      <section className=" py-20 sm:px-12 px-6">
        <Hero />
      </section>
      <section className=" py-16  sm:px-12 px-6">
        <SlideCards />
      </section>
      <section className=" py-4 px-12">
        <Content />
      </section>
      <section className="  w-full bottom-0 py-12 text-center">
        <Footer />
      </section>
    </main>
  );
};

export default HomePage;
