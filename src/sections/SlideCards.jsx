import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderCards } from "../constants";
import SliderCard from "../components/SliderCard";
import { CiCircleChevRight } from "react-icons/ci";

const SlideCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CiCircleChevRight />,
    prevArrow: <CiCircleChevRight />,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CiCircleChevRight />,
    prevArrow: <CiCircleChevRight />,
  };
  return (
    <>
      <div className=" inline sm:hidden ">
        <div className=" slider-container ">
          <Slider {...settings}>
            {sliderCards.map((card) => (
              <SliderCard key={card.name} imgURL={card.imgURL} />
            ))}
          </Slider>
        </div>
      </div>
      <div className=" sm:inline hidden ">
        <div className=" slider-container ">
          <Slider {...settings2}>
            {sliderCards.map((card) => (
              <SliderCard key={card.name} imgURL={card.imgURL} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SlideCards;
