import { binarySearch } from "../search/Binary-Search";

describe("Binary Search", () => {
  it("should find the target in a sorted array and return its index", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 6;
    const index = binarySearch(arr, target);
    expect(index).toBe(5); // 0-based index of element 6
  });

  it("should return -1 if the target is not in the array", () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 4;
    const index = binarySearch(arr, target);
    expect(index).toBe(-1); // target 4 does not exist in the array
  });

  it("should work with a single element array when the element is the target", () => {
    const arr = [42];
    const target = 42;
    const index = binarySearch(arr, target);
    expect(index).toBe(0); // index of the single element
  });

  it("should return -1 for a single element array if it does not contain the target", () => {
    const arr = [42];
    const target = 100;
    const index = binarySearch(arr, target);
    expect(index).toBe(-1); // target does not exist in the array
  });

  it("should return -1 for an empty array", () => {
    const arr: number[] = [];
    const target = 5;
    const index = binarySearch(arr, target);
    expect(index).toBe(-1); // no elements to search
  });

  it("should find the target when it is the first element in the array", () => {
    const arr = [2, 3, 4, 5, 6];
    const target = 2;
    const index = binarySearch(arr, target);
    expect(index).toBe(0); // index of the first element
  });

  it("should find the target when it is the last element in the array", () => {
    const arr = [3, 5, 7, 9, 11];
    const target = 11;
    const index = binarySearch(arr, target);
    expect(index).toBe(4); // index of the last element
  });
});
