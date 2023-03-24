import { sum } from "../helpers/sum";

describe("sum", () => {
  it("should return the sum of two numbers", () => {
    expect(sum(2, 2)).toBe(4);
  });
});
