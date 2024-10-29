import { bubbleSort } from "../sort/bubbleSort";

describe("Bubble Sort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const unsortedArray = [5, 3, 8, 4, 2];
    const sortedArray = bubbleSort(unsortedArray);
    expect(sortedArray).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle an already sorted array", () => {
    const sortedArray = [1, 2, 3, 4, 5];
    expect(bubbleSort(sortedArray)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should handle an array with one element", () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  it("should handle an array with duplicate elements", () => {
    const arrayWithDuplicates = [3, 1, 2, 3];
    expect(bubbleSort(arrayWithDuplicates)).toEqual([1, 2, 3, 3]);
  });
});
