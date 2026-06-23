import ProductList from "../components/ProductList";
import BillSummary from "../components/BillSummary";
import Basket from "../components/Basket";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-4xl font-bold text-center mb-5">
        Product Billing System
      </h1>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Special Offers</h2>

        <p>🧀 Cheese: Buy 1 Get 1 Free</p>
        <p>🥫 Soup: Bread at 50% Off</p>
        <p>🧈 Butter: 1/3 Off</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 items-start">
        {/* Products */}
        <div className="w-full lg:w-[30%] bg-gray-100 p-5 border border-gray-300 rounded-lg shadow">
          <ProductList />
        </div>

        {/* Basket + Summary */}
        <div className="w-full lg:w-[70%]">
          <Basket />
          <BillSummary />
        </div>
      </div>
    </div>
  );
};

export default Home;
