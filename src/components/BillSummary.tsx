import { useAppSelector } from "../hooks/useAppSelector";

const BillSummary = () => {
  const products = useAppSelector(
    (state) => state.billing.products
  );

  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const bread = products.find(
    (item) => item.name === "Bread"
  );

  const cheese = products.find(
    (item) => item.name === "Cheese"
  );

  const soup = products.find(
    (item) => item.name === "Soup"
  );

  const butter = products.find(
    (item) => item.name === "Butter"
  );

  // Cheese Buy 1 Get 1 Free
  const cheeseSaving = cheese
    ? Math.floor(cheese.quantity / 2) *
      cheese.price
    : 0;

  // Soup gives Bread at 50% Off
  const breadSaving =
    soup && bread
      ? Math.min(
          soup.quantity,
          bread.quantity
        ) *
        bread.price *
        0.5
      : 0;

  // Butter 1/3 Off
  const butterSaving = butter
    ? butter.quantity *
      butter.price *
      (1 / 3)
    : 0;

  const totalSavings =
    cheeseSaving +
    breadSaving +
    butterSaving;

  const finalTotal =
    subtotal - totalSavings;

  return (
    <div className="bg-gray-100 p-5 mt-5 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">
        Bill Summary
      </h2>

      <hr className="my-4 border-gray-300" />

      <p className="mb-2">
        <strong>Sub Total:</strong> £
        {subtotal.toFixed(2)}
      </p>

      {cheeseSaving > 0 && (
        <p className="mb-1 text-red-500">
          Cheese Saving: £
          {cheeseSaving.toFixed(2)}
        </p>
      )}

      {breadSaving > 0 && (
        <p className="mb-1 text-red-500">
          Bread Saving: £
          {breadSaving.toFixed(2)}
        </p>
      )}

      {butterSaving > 0 && (
        <p className="mb-1 text-red-500">
          Butter Saving: £
          {butterSaving.toFixed(2)}
        </p>
      )}

      <p className="mb-2 text-red-500">
        <strong>Savings:</strong> £
        {totalSavings.toFixed(2)}
      </p>

      <p className="text-lg font-bold text-green-600">
        Total Amount: £
        {finalTotal.toFixed(2)}
      </p>
    </div>
  );
};

export default BillSummary;