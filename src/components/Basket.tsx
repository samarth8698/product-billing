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

  const bread = products.find(
    (item) => item.name === "Bread"
  );

  const soup = products.find(
    (item) => item.name === "Soup"
  );

  const breadSaving =
    soup && bread
      ? Math.min(
          soup.quantity,
          bread.quantity
        ) *
        bread.price *
        0.5
      : 0;

  return (
    <div className="flex-1 bg-gray-100 p-5 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-5">
        Basket
      </h2>

      {basketItems.map((item) => {
        const itemPrice =
          item.price * item.quantity;

        let saving = 0;

        if (item.name === "Cheese") {
          saving =
            Math.floor(item.quantity / 2) *
            item.price;
        }

        if (item.name === "Butter") {
          saving =
            item.quantity *
            item.price *
            (1 / 3);
        }

        if (
          item.name === "Bread" &&
          breadSaving > 0
        ) {
          saving = breadSaving;
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

              <span>
                £{item.price.toFixed(2)}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    dispatch(decrement(item.id))
                  }
                  className="bg-blue-500 text-white w-8 h-8 rounded hover:bg-blue-600"
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    dispatch(increment(item.id))
                  }
                  className="bg-blue-500 text-white w-8 h-8 rounded hover:bg-blue-600"
                >
                  +
                </button>
              </div>
            </div>

            <p>
              Item Price: £
              {itemPrice.toFixed(2)}
            </p>

            {saving > 0 && (
              <p className="text-red-500 mt-2">
                Savings £
                {saving.toFixed(2)}
              </p>
            )}

            <p className="mt-2">
              Item Cost £
              {itemCost.toFixed(2)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Basket;