import { quickSort } from "../sort/quickSort";

describe("Quick Sort", () => {
  it("should sort an array of positive numbers in ascending order", () => {
    const arr = [5, 3, 8, 4, 2];
    const sortedArr = quickSort(arr);
    expect(sortedArr).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = quickSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with negative numbers", () => {
    const arr = [-10, 7, -3, 0, 4];
    const sortedArr = quickSort(arr);
    expect(sortedArr).toEqual([-10, -3, 0, 4, 7]);
  });

  it("should handle an array with duplicate elements", () => {
    const arr = [3, 5, 3, 1, 2];
    const sortedArr = quickSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 3, 5]);
  });

  it("should handle a single element array", () => {
    const arr = [1];
    const sortedArr = quickSort(arr);
    expect(sortedArr).toEqual([1]);
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    const sortedArr = quickSort(arr);
    expect(sortedArr).toEqual([]);
  });
});
