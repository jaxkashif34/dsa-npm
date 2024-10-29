import { countSort, countSortConsiderNegative } from "../sort/countSort";

describe("Count Sort", () => {
  it("should sort an array of positive numbers in ascending order", () => {
    const arr = [4, 2, 2, 8, 3, 3, 1];
    const sortedArr = countSort(arr);
    expect(sortedArr).toEqual([1, 2, 2, 3, 3, 4, 8]);
  });

  it("should handle an empty array", () => {
    expect(countSort([])).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    expect(countSort([5])).toEqual([5]);
  });

  it("should handle an array with all identical elements", () => {
    expect(countSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
  });

  it("should handle an already sorted array", () => {
    const sortedArr = [1, 2, 3, 4, 5];
    expect(countSort(sortedArr)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("Count Sort (with Negative Numbers)", () => {
  it("should sort an array with both positive and negative numbers", () => {
    const arr = [-5, -10, 0, -3, 8, 5, -1, 10];
    const sortedArr = countSortConsiderNegative(arr);
    expect(sortedArr).toEqual([-10, -5, -3, -1, 0, 5, 8, 10]);
  });

  it("should handle an array with only negative numbers", () => {
    const arr = [-3, -5, -2, -8, -6];
    const sortedArr = countSortConsiderNegative(arr);
    expect(sortedArr).toEqual([-8, -6, -5, -3, -2]);
  });

  it("should handle an empty array", () => {
    expect(countSortConsiderNegative([])).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    expect(countSortConsiderNegative([-1])).toEqual([-1]);
  });

  it("should handle an array with all identical elements", () => {
    expect(countSortConsiderNegative([-7, -7, -7])).toEqual([-7, -7, -7]);
  });
});
