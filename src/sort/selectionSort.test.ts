import { selectionSort } from "../sort/selectionSort";

describe("Selection Sort", () => {
  it("should sort an array of positive numbers in ascending order", () => {
    const arr = [64, 25, 12, 22, 11];
    const sortedArr = selectionSort(arr);
    expect(sortedArr).toEqual([11, 12, 22, 25, 64]);
  });

  it("should handle an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = selectionSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with negative numbers", () => {
    const arr = [29, -4, 15, 0, -30];
    const sortedArr = selectionSort(arr);
    expect(sortedArr).toEqual([-30, -4, 0, 15, 29]);
  });

  it("should handle an array with duplicate elements", () => {
    const arr = [3, 5, 3, 1, 2];
    const sortedArr = selectionSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 3, 5]);
  });

  it("should handle a single element array", () => {
    const arr = [42];
    const sortedArr = selectionSort(arr);
    expect(sortedArr).toEqual([42]);
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    const sortedArr = selectionSort(arr);
    expect(sortedArr).toEqual([]);
  });
});
