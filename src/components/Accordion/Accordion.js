import { useState } from "react";

const products = [
  { category: "Electronics", item: "Mobile" },
  { category: "dairy", item: "Milk" },
  { category: "fruits", item: "Mango" },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {products.map((product, index) => (
        <div
          style={{ display: "flex" }}
          key={index}
          onClick={() => handleClick(index)}
        >
          <div>
            <h1>{product.category}</h1>
          </div>
          {activeIndex === index && (
            <div style={{ marginLeft: "10px" }}>{product.item}</div>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordion;
