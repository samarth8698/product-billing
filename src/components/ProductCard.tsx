import { increment } from "../features/billing/billingSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import type { Product } from "../features/billing/types";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  return (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 10px",
      borderBottom: "1px solid #ddd",
    }}
  >
    <span>{product.name}</span>

    <span>₹{product.price}</span>

    <button
      onClick={() =>
        dispatch(increment(product.id))
      }
      style={{
        background: "#5b9cf6",
        color: "white",
        border: "none",
        padding: "6px 12px",
        borderRadius: "4px",
      }}
    >
      Add
    </button>
  </div>
);
};

export default ProductCard;