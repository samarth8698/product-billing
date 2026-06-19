import { useAppSelector } from "../hooks/useAppSelector";

const BillSummary = () => {
  const products = useAppSelector(
    (state) => state.billing.products
  );

  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const apple = products.find(
    (item) => item.name === "Apple"
  );

  const orange = products.find(
    (item) => item.name === "Orange"
  );

  const banana = products.find(
    (item) => item.name === "Banana"
  );

  const appleSaving = apple
    ? Math.floor(apple.quantity / 4) *
      apple.price
    : 0;

  const orangeSaving =
    orange && orange.quantity >= 2
      ? orange.quantity *
        orange.price *
        0.1
      : 0;

  const bananaSaving = banana
    ? Math.floor(banana.quantity / 5) *
      banana.price
    : 0;

  const totalSavings =
    appleSaving +
    orangeSaving +
    bananaSaving;

  const finalTotal =
    subtotal - totalSavings;

  return (
    <div className="bg-gray-100 p-5 mt-5 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">
        Bill Summary
      </h2>

      <hr className="my-4 border-gray-300" />

      <p className="mb-2">
        <strong>Sub Total:</strong> ₹
        {subtotal.toFixed(2)}
      </p>

      <p className="mb-2 text-red-500">
        <strong>Savings:</strong> ₹
        {totalSavings.toFixed(2)}
      </p>

      <p className="text-lg font-bold text-green-600">
        Total Amount: ₹
        {finalTotal.toFixed(2)}
      </p>
    </div>
  );
};

export default BillSummary;