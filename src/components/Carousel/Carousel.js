/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import "./Carousel.css";

const IMAGES = [
  "https://www.w3schools.com/html/pic_trulli.jpg",
  "https://www.w3schools.com/html/img_girl.jpg",
  "https://www.w3schools.com/html/img_chania.jpg",
];
const Carousel = () => {
  const [active, setActive] = useState(0);

  const handlePrevious = () => {
    setActive(active => (active - 1 < 0 ? IMAGES.length - 1 : active - 1));
  };
  const handleNext = () => {
    setActive(active => (active + 1) % IMAGES.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel">
      <button className="carousel_button left" onClick={handlePrevious}>
        &larr;Previous
      </button>
      <img width={300} height={300} src={IMAGES[active]} alt="Image title" />
      <button className="carousel_button right" onClick={handleNext}>
        Next&rarr;
      </button>
    </div>
  );
};

export default Carousel;
