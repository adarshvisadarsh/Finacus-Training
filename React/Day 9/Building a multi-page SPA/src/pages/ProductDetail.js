import { useParams } from "react-router";
const ProductDetail = () => {
  const params = useParams();
  console.log(params.ProductID);
  return (
    <section>
      <h1>ProductDetail</h1>
      <p>{params.ProductID}</p>
    </section>
  );
};
export default ProductDetail;
