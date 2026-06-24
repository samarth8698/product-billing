import { describe, it, expect } from "vitest";
import reducer, {
  increment,
  decrement,
  clearBill,
} from "./billingSlice";

describe("billingSlice", () => {
  it("should increment product quantity", () => {
    const state = reducer(
      {
        products: [
          {
            id: 1,
            name: "Bread",
            price: 1.1,
            quantity: 0,
          },
        ],
      },
      increment(1)
    );

    expect(state.products[0].quantity).toBe(1);
  });

  it("should decrement product quantity", () => {
    const state = reducer(
      {
        products: [
          {
            id: 1,
            name: "Bread",
            price: 1.1,
            quantity: 2,
          },
        ],
      },
      decrement(1)
    );

    expect(state.products[0].quantity).toBe(1);
  });

  it("should not decrement below zero", () => {
    const state = reducer(
      {
        products: [
          {
            id: 1,
            name: "Bread",
            price: 1.1,
            quantity: 0,
          },
        ],
      },
      decrement(1)
    );

    expect(state.products[0].quantity).toBe(0);
  });

  it("should clear all product quantities", () => {
    const state = reducer(
      {
        products: [
          {
            id: 1,
            name: "Bread",
            price: 1.1,
            quantity: 2,
          },
          {
            id: 2,
            name: "Milk",
            price: 0.5,
            quantity: 3,
          },
        ],
      },
      clearBill()
    );

    expect(state.products[0].quantity).toBe(0);
    expect(state.products[1].quantity).toBe(0);
  });
});