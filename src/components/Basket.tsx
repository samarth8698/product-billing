import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
  increment,
  decrement,
} from "../features/billing/billingSlice";

const Basket = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(
    (state) => state.billing.products
  );

  const basketItems = products.filter(
    (item) => item.quantity > 0
  );

  return (
    <div className="flex-1 bg-gray-100 p-5 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-5">
        Basket
      </h2>

      {basketItems.map((item) => {
        const itemPrice =
          item.price * item.quantity;

        let saving = 0;

        if (item.name === "Apple") {
          saving =
            Math.floor(item.quantity / 4) *
            item.price;
        }

        if (
          item.name === "Orange" &&
          item.quantity >= 2
        ) {
          saving = itemPrice * 0.1;
        }

        if (item.name === "Banana") {
          saving =
            Math.floor(item.quantity / 5) *
            item.price;
        }

        const itemCost =
          itemPrice - saving;

        return (
          <div
            key={item.id}
            className="border-b border-gray-300 pb-5 mb-5"
          >
            <div className="flex justify-between items-center mb-3">
              <strong>{item.name}</strong>

              <span>₹{item.price}</span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    dispatch(decrement(item.id))
                  }
                  className="bg-blue-500 text-white w-8 h-8 rounded hover:bg-blue-600 transition"
                >
                  -
                </button>

                <span className="font-medium">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    dispatch(increment(item.id))
                  }
                  className="bg-blue-500 text-white w-8 h-8 rounded hover:bg-blue-600 transition"
                >
                  +
                </button>
              </div>
            </div>

            <p>
              Item Price: ₹
              {itemPrice.toFixed(2)}
            </p>

            {saving > 0 && (
              <p className="text-red-500 mt-2">
                Savings ₹
                {saving.toFixed(2)}
              </p>
            )}

            <p className="mt-2">
              Item Cost ₹
              {itemCost.toFixed(2)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Basket;