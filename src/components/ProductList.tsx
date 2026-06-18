import ProductCard from "./ProductCard";
import { useAppSelector } from "../hooks/useAppSelector";

const ProductList = () => {
  const products = useAppSelector(
    (state) => state.billing.products
  );

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;