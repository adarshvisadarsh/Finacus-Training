import { Link } from "react-router-dom";
const Products = () => {
  return (
  <section>
  <h1>Products</h1>;
        <ul>
          <li>
            <Link to="/Products/p1">book</Link>
          </li>
          <li>
            <Link to="/Products/p2">carpet</Link>
          </li>
        </ul>
      </section>
  )
};

export default Products;
