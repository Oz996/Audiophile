import "./Row.scss";

const Row = ({ data }) => {


  return (
    <section className="grid-row-3">
      {data?.others?.map((product, index) => (
        <div key={index}>
          <div className="row-div">
            <figure>
              <img src={product?.image?.desktop} alt={product?.name} />
            </figure>
            <h2>{product?.name}</h2>
            <button>See product</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Row;
