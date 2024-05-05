const ProductCard = ({
  id,
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
}) => {
  return (
    <div className="m-4 p-4 w-62 border border-solid border-black">
      <img className="h-48 w-62 object-contain" src={thumbnail} alt={title} />
      <h1 className="p-2 font-bold text-xl">{title}</h1>
      <h2 className="p-1 text-lg">
        Rs. {price} - discount of {discountPercentage}%
      </h2>
      <p className="p-1 text-md w-72">{description}</p>
    </div>
  );
};

export default ProductCard;
