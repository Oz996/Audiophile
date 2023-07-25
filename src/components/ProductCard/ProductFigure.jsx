import './ProductCard.scss'

const ProductFigure = ({data}) => {

  return (
    <figure>
        <img src={data?.image?.desktop} alt={data?.name} />
    </figure>
  )
}

export default ProductFigure