import { describe, it, expect } from "vitest";
import reducer, {
  increment,
  decrement,
  clearBill,
} from "./billingSlice";

describe("billingSlice", () => {
  it("increments quantity", () => {
    const state = reducer(
      {
        products: [
          {
            id: 1,
            name: "Apple",
            price: 50,
            quantity: 0,
          },
        ],
      },
      increment(1)
    );

    expect(state.products[0].quantity).toBe(1);
  });

  it("decrements quantity", () => {
    const state = reducer(
      {
        products: [
          {
            id: 1,
            name: "Apple",
            price: 50,
            quantity: 2,
          },
        ],
      },
      decrement(1)
    );

    expect(state.products[0].quantity).toBe(1);
  });

  it("clears bill", () => {
    const state = reducer(
      {
        products: [
          {
            id: 1,
            name: "Apple",
            price: 50,
            quantity: 5,
          },
        ],
      },
      clearBill()
    );

    expect(state.products[0].quantity).toBe(0);
  });
});