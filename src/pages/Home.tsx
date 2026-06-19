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
        <h3 className="text-xl font-semibold mb-3">
          Special Offers
        </h3>

        <p>🍎 Apple: Buy 3 Get 1 Free</p>
        <p>🍊 Orange: 10% Off on 2 or More</p>
        <p>🍌 Banana: Buy 5 Pay For 4</p>
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