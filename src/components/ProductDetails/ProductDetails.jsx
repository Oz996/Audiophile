import "./ProductDetails.scss";

const ProductDetails = ({ data }) => {
  return (
    <main className="product-card">
      <h2>{data?.name}</h2>
      <p>{data?.description}</p>
      <span className="product-price">${data?.price}</span>
      <div className="flex">
        <button className="add-button">-</button>
        <input type="text" className="add-input" />
        <button className="add-button">+</button>
        <button className="product-button ml">Add To Cart</button>
      </div>
    </main>
  );
};

export default ProductDetails;
