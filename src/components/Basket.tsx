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
    <div
      style={{
        flex: 1,
        background: "#f5f5f5",
        padding: "20px",
      }}
    >
      <h2>Basket</h2>

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
            style={{
              borderBottom: "1px solid #ddd",
              paddingBottom: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <strong>{item.name}</strong>

              <span>₹{item.price}</span>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <button
                  onClick={() =>
                    dispatch(decrement(item.id))
                  }
                  style={{
                    background: "#5b9cf6",
                    color: "white",
                    border: "none",
                    width: "30px",
                    height: "30px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(increment(item.id))
                  }
                  style={{
                    background: "#5b9cf6",
                    color: "white",
                    border: "none",
                    width: "30px",
                    height: "30px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
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
              <p
                style={{
                  color: "red",
                  marginTop: "5px",
                }}
              >
                Savings ₹
                {saving.toFixed(2)}
              </p>
            )}

            <p style={{ marginTop: "5px" }}>
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