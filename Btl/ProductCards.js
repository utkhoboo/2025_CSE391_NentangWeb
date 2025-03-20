const ProductCards = ({ name, image, description }) => { 
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  );
};

export default ProductCards; 
