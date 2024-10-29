export class MaxHeap {
  private heap: number[];

  constructor(arr: number[]) {
    this.heap = arr;
    this.heapify();
  }
  private percolateDown(arr: number[], i: number): number[] {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let largest = i;

    if (left < arr.length && arr[largest] < arr[left]) {
      largest = left;
    }

    if (right < arr.length && arr[largest] < arr[right]) {
      largest = right;
    }

    if (i !== largest) {
      [arr[largest], arr[i]] = [arr[i], arr[largest]];
      this.percolateDown(arr, largest);
    }

    return arr;
  }

  private heapify(arr = this.heap): void {
    const length = this.heap.length;
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
      this.percolateDown(this.heap, i);
    }
  }

  public getRoot(): number | null {
    if (this.heap.length === 0) {
      return null;
    }

    const max = this.heap[0];
    const lastElement = this.heap.pop();

    if (this.heap.length > 0 && lastElement !== undefined) {
      this.heap[0] = lastElement;
      this.percolateDown(this.heap, 0);
    }

    return max;
  }

  private percolateUp(index: number): void {
    let parent = Math.floor((index - 1) / 2);

    while (index > 0 && this.heap[parent] > this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  public increaseValue(index: number, newValue: number): void {
    if (newValue <= this.heap[index]) {
      throw new Error("New value must be greater than the current value");
    }

    this.heap[index] = newValue;
    this.percolateUp(index);
  }

  public decreaseValue(index: number, newValue: number): void {
    if (newValue >= this.heap[index]) {
      throw new Error("New value must be less than the current value");
    }

    this.heap[index] = newValue;
    this.percolateDown(this.heap, index);
  }

  public insertElement(value: number): void {
    this.heap.push(value);
    this.percolateUp(this.heap.length - 1);
  }

  public heapSort(): number[] {
    const sortedArray: number[] = [];

    while (this.heap.length > 0) {
      sortedArray.push(this.getRoot()!);
    }

    return sortedArray.reverse();
  }

  public remove(value: number): boolean {
    const index = this.heap.indexOf(value);

    if (index === -1) {
      return false;
    }

    const lastElement = this.heap.pop();
    if (index < this.heap.length) {
      this.heap[index] = lastElement !== undefined ? lastElement : value;
      this.percolateDown(this.heap, index);
    }

    return true;
  }

  public getHeap(): number[] {
    return this.heap;
  }
}

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class MinHeap {
  private heap: number[];

  constructor(arr: number[]) {
    this.heap = arr;
    this.heapify();
  }

  private percolateDown(arr: number[], i: number): number[] {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let smallest = i;

    if (left < arr.length && arr[smallest] > arr[left]) {
      smallest = left;
    }

    if (right < arr.length && arr[smallest] > arr[right]) {
      smallest = right;
    }

    if (i !== smallest) {
      [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
      this.percolateDown(arr, smallest);
    }

    return arr;
  }

  private heapify(arr = this.heap): void {
    const length = this.heap.length;
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
      this.percolateDown(this.heap, i);
    }
  }

  public getRoot(): number | null {
    if (this.heap.length === 0) {
      return null;
    }

    const min = this.heap[0];
    const lastElement = this.heap.pop();

    if (this.heap.length > 0 && lastElement !== undefined) {
      this.heap[0] = lastElement;
      this.percolateDown(this.heap, 0);
    }

    return min;
  }

  private percolateUp(index: number): void {
    let parent = Math.floor((index - 1) / 2);

    while (index > 0 && this.heap[parent] > this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  public increaseValue(index: number, newValue: number): void {
    if (newValue >= this.heap[index]) {
      throw new Error("New value must be less than the current value");
    }

    this.heap[index] = newValue;
    this.percolateUp(index);
  }

  public decreaseValue(index: number, newValue: number): void {
    if (newValue <= this.heap[index]) {
      throw new Error("New value must be greater than the current value");
    }

    this.heap[index] = newValue;
    this.percolateDown(this.heap, index);
  }

  public insertElement(value: number): void {
    this.heap.push(value);
    this.percolateUp(this.heap.length - 1);
  }

  public heapSort(): number[] {
    const sortedArray: number[] = [];

    while (this.heap.length > 0) {
      sortedArray.push(this.getRoot()!);
    }

    return sortedArray;
  }

  public remove(value: number): boolean {
    const index = this.heap.indexOf(value);

    if (index === -1) {
      return false;
    }

    const lastElement = this.heap.pop();
    if (index < this.heap.length) {
      this.heap[index] = lastElement !== undefined ? lastElement : value;
      this.percolateDown(this.heap, index);
    }

    return true;
  }
  public getHeap(): number[] {
    return this.heap;
  }
}
