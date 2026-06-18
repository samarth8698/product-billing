import ProductList from "../components/ProductList";
import BillSummary from "../components/BillSummary";
import Basket from "../components/Basket";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Product Billing System
      </h1>

      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h3>Special Offers</h3>

        <p>🍎 Apple: Buy 3 Get 1 Free</p>
        <p>🍊 Orange: 10% Off on 2 or More</p>
        <p>🍌 Banana: Buy 5 Pay For 4</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        {/* Products */}
        <div
          style={{
            width: "30%",
            background: "#f5f5f5",
            padding: "20px",
            border: "1px solid #ddd",
          }}
        >
          <ProductList />
        </div>

        {/* Basket + Summary */}
        <div
          style={{
            width: "70%",
          }}
        >
          <Basket />
          <BillSummary />
        </div>
      </div>
    </div>
  );
};

export default Home;