import { increment } from "../features/billing/billingSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import type { Product } from "../features/billing/types";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-4">
      <span className="font-medium">{product.name}</span>

      <span className="font-medium">
        ₹{product.price}
      </span>

      <button
        onClick={() =>
          dispatch(increment(product.id))
        }
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add
      </button>
    </div>
  );
};

export default ProductCard;