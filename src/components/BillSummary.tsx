import { useAppSelector } from "../hooks/useAppSelector";

const BillSummary = () => {
  const products = useAppSelector((state) => state.billing.products);

  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const apple = products.find((item) => item.name === "Apple");

  const orange = products.find((item) => item.name === "Orange");

  const banana = products.find((item) => item.name === "Banana");

  const appleSaving = apple ? Math.floor(apple.quantity / 4) * apple.price : 0;

  const orangeSaving =
    orange && orange.quantity >= 2 ? orange.quantity * orange.price * 0.1 : 0;

  const bananaSaving = banana
    ? Math.floor(banana.quantity / 5) * banana.price
    : 0;

  const totalSavings = appleSaving + orangeSaving + bananaSaving;

  const finalTotal = subtotal - totalSavings;

  return (
    <div
      style={{
        background: "#f5f5f5",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2>Bill Summary</h2>

      <hr />

      <p>
        <strong>Sub Total:</strong> ₹{subtotal.toFixed(2)}
      </p>

      <p>
        <strong>Savings:</strong> ₹{totalSavings.toFixed(2)}
      </p>

      <p>
        <strong>Total Amount:</strong> ₹{finalTotal.toFixed(2)}
      </p>
    </div>
  );
};

export default BillSummary;
