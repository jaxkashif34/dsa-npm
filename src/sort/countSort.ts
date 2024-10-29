/* 
Performance of count sort does matter when the range of the elements is not too big or 
when the difference between the max and min is too big
There are two main motive in this algo 
1) Find the count of every distinct element in the array
2) calculate the position of each element in the sorted array

e.g Example array [1, 3, 2, 3, 4, 1, 6, 4, 3]

1) get the max element index sized array
2) store the count of every distinct number on its index like this 
e.g = [0, 2, 1, 3, 2, 0, 1]
now we can see that if there are two 1's in the original array then at 1 index we 
have stored 2 and other are also like same 
basically in that array we are storing the count of each number in the original array

But we want to calculate the count of each element plus the count of element before (## WHY? ##)
Assume that if we sort the original array than on which position 2 will stored completely 
depends on how many number of 1's are in the array

So we have to modify our count array in a way that count of current index + previous index count
that will help us determine on which index (actually index is a actual value of original array
in the count array) the what value will store (value in count array is the index in the original 
array)

and at last we have to traverse through the original array because everything we need is completed
by now (has maps) traverse through last and value will represent the index in the modified array
then we need to decrement the value for 0 based indexing and store the original array element 
in the result array
And at last don't forget to decrement the value of a modified count array (that will help to add 
the same value for lower indexes)
*/

export const countSort = (arr: number[]): number[] => {
  if (arr.length === 0) return [];
  // Step 1: Find the maximum value in the input array to determine the size of the countArray
  const max = Math.max(...arr);

  /* 
  Step 2: Create a countArray to store the count of each element.
  We use max + 1 to ensure the array is large enough to hold counts for every element 
  from 0 up to the maximum value in the input array. 
  If max = 5, we need an array of size 6 (indexes 0 to 5).
  We initialize the array with zeros.
  */
  const countArray = new Array(max + 1).fill(0);

  // Step 3: Create a result array to store the sorted output
  const result = new Array(arr.length);

  // Step 4: Count the occurrences of each element in the input array
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]] += 1; // Increment the count for each number
  }

  /* 
  Step 5: Modify the countArray such that each element at index i contains the
  cumulative sum of counts up to index i.
  This way, countArray[i] will tell us the position of the element i in the final sorted array.
  */
  for (let i = 1; i < countArray.length; i++) {
    const currentCount = countArray[i - 1] + countArray[i];
    countArray[i] = currentCount;
  }

  /* 
  Step 6: Build the sorted result array.
  We iterate through the input array in reverse to maintain the stability of the sorting algorithm
  (i.e., preserving the order of elements with the same value in the input array).
  */
  for (let i = arr.length - 1; i >= 0; i--) {
    // Find the correct position of arr[i] in the result array
    let index = countArray[arr[i]];

    /* 
    Step 7: Decrement the index by 1 to convert it from 1-based to 0-based index. 
    Then place arr[i] at that position in the result array.
    */
    result[index - 1] = arr[i];

    // Step 8: Decrement the count for arr[i] in countArray to handle duplicates correctly
    countArray[arr[i]] -= 1;
  }

  // Step 9: Return the sorted result array
  return result;
};

export const countSortConsiderNegative = (arr: number[]): number[] => {
  if (arr.length === 0) return [];
  // Step 1: Find the maximum and minimum values in the input array
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  /* 
  Step 2: Calculate the range of values in the array.
  Range = max - min + 1
  The +1 is to ensure that we include the maximum value itself, as arrays are 0-indexed. 
  This range ensures that our countArray will be able to store counts for all elements 
  from the minimum to the maximum value.
  */
  const range = max - min + 1;

  // Step 3: Create a countArray of size `range` to store the count of each element
  const countArray = new Array(range).fill(0);

  // Step 4: Create a result array to store the sorted output
  const result = new Array(arr.length);

  // Step 5: Populate the countArray by counting occurrences of each element in the input array
  for (let i = 0; i < arr.length; i++) {
    /* 
    We subtract `min` from each element to normalize it. 
    This converts the original values (which may be negative) into positive indexes for the countArray.
    For example:
      arr[i] - min:
      -3 - (-3) = 0
      -2 - (-3) = 1
      -1 - (-3) = 2
       0 - (-3) = 3
       1 - (-3) = 4
       2 - (-3) = 5
    This allows us to map negative values (like -3, -2, etc.) to non-negative indexes (0, 1, 2, etc.).
    */
    countArray[arr[i] - min] += 1;
  }

  /* 
  Step 6: Modify the countArray to contain cumulative counts.
  This helps to determine the final position of each element in the sorted array.
  */
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  /* 
  Step 7: Build the sorted result array by iterating over the input array in reverse order.
  The reverse iteration ensures stability, meaning the relative order of elements with 
  the same value remains unchanged from their original input order.
  */
  for (let i = arr.length - 1; i >= 0; i--) {
    /* 
    We subtract `min` again to retrieve the correct index from the countArray.
    This gives us the position of the current element in the result array.
    */
    let index = countArray[arr[i] - min];

    // Place the element in the correct position of the result array
    result[index - 1] = arr[i];

    // Decrement the count for the current element to handle duplicate values
    countArray[arr[i] - min] -= 1;
  }

  // Step 8: Return the sorted result array
  return result;
};
