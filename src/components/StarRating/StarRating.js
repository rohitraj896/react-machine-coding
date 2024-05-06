import { useState } from "react";
import "./StarRating.css";

const StarRating = () => {
  const LIMIT = 5;
  const [rating, setRating] = useState(3);

  const handleClick = e => {
    setRating(+e.target.getAttribute("data"));
  };
  return (
    <div onClick={handleClick}>
      {[...Array(LIMIT).keys()].map(i => (
        <span
          key={i}
          data={i + 1}
          className={i < rating ? "star rated" : "star"}
        ></span>
      ))}
    </div>
  );
};

export default StarRating;
