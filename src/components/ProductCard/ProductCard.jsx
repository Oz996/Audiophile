import './ProductCard.scss'

const ProductCard = ({data}) => {
  return (
    <article>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <button>See Product</button>
    </article>
  )
}

export default ProductCard