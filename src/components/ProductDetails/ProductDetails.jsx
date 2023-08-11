import useCartStore from "../../zustand/cartStore";
import "./ProductDetails.scss";

const ProductDetails = ({ data }) => {
  const addToCart = useCartStore((state)=> state.addToCart)
  return (
    <main className="product-card">
      <div className="new-div">
        <span className="new">New product</span>
        <h2>{data?.name}</h2>
      </div>
      <p>{data?.description}</p>
      <span className="product-price">${data?.price}</span>
      <div className="flex">
        <button className="add-button">-</button>
        <input type="text" className="add-input" value={1}/>
        <button className="add-button">+</button>
        <button className="product-button ml" onClick={() => addToCart(data)}>Add To Cart</button>
      </div>
    </main>
  );
};

export default ProductDetails;
