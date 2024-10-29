import { mergeSort } from "../sort/mergeSort";

describe("Merge Sort", () => {
  it("should sort an array of positive numbers in ascending order", () => {
    const arr = [4, 2, 7, 1, 3];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 7]);
  });

  it("should handle an array that is already sorted", () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with negative numbers", () => {
    const arr = [-3, 5, -1, 0, -2];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([-3, -2, -1, 0, 5]);
  });

  it("should handle an array with duplicate elements", () => {
    const arr = [3, 1, 2, 3, 1];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([1, 1, 2, 3, 3]);
  });

  it("should handle an array with a single element", () => {
    const arr = [1];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([1]);
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    const sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([]);
  });
});
