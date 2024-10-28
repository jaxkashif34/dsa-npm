// The MyNode class represents a node in an AVL tree.
// It holds a value, and references to left and right children,
// as well as the height of the node (used for balancing in AVL trees).
class MyNode<T> {
  left: MyNode<T> | null = null; // Left child node (null if no child).
  right: MyNode<T> | null = null; // Right child node (null if no child).
  value: T; // The value held by the node.
  height: number = 1; // The height of the node (used for balancing the AVL tree).

  // Constructor to initialize the node with a given value.
  constructor(value: T) {
    if (!value) throw Error("Please provide a valid value"); // Ensure valid value.
    this.value = value; // Assign the value to the node.
  }
}

// The AVLTree class represents a self-balancing AVL tree that can store
// either numbers or strings (T extends number | string).
export class AVLTree<T extends number | string> {
  root: MyNode<T> | null = null; // The root node of the AVL tree.

  // Helper function to get the height of a given node.
  // Returns 0 if the node is null (i.e., an empty subtree).
  private getHeight(node: MyNode<T> | null): number {
    return node ? node.height : 0;
  }

  // Updates the height of a node based on the heights of its left and right children.
  private updateHeight(node: MyNode<T>): void {
    // Height is 1 plus the maximum height of the left and right subtrees.
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  // Calculates the balance factor of a node, which is the difference in heights
  // between the left and right subtrees. A balance factor greater than 1 or less
  // than -1 indicates that the tree needs rebalancing.
  private getBalanceFactor(node: MyNode<T> | null): number {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  // Right rotation to rebalance the tree when the left subtree is taller.
  private rotateRight(y: MyNode<T>): MyNode<T> {
    /* ## Simple Rule ##  which one side is heavier rotate to the other side */
    const x = y.left!; // Get the left child of y (which becomes the new root).
    const T2 = x.right; // Temporarily store x's right child.

    x.right = y; // Perform rotation: x becomes the new root and y becomes its right child.
    y.left = T2; // y's left child is set to x's original right child.

    // Update the heights of y and x after the rotation.
    this.updateHeight(y);
    this.updateHeight(x);

    // Return the new root after the rotation (which is x).
    return x;
  }

  // Left rotation to rebalance the tree when the right subtree is taller.
  private rotateLeft(x: MyNode<T>): MyNode<T> {
    /* ## Simple Rule ##  which one side is heavier rotate to the other side */
    const y = x.right!; // Get the right child of x (which becomes the new root).
    const T2 = y.left; // Temporarily store y's left child.

    y.left = x; // Perform rotation: y becomes the new root and x becomes its left child.
    x.right = T2; // x's right child is set to y's original left child.

    // Update the heights of x and y after the rotation.
    this.updateHeight(x);
    this.updateHeight(y);

    // Return the new root after the rotation (which is y).
    return y;
  }

  // Rebalance a node if it has become unbalanced due to insertions or deletions.
  private balance(node: MyNode<T>): MyNode<T> {
    // Update the height of the current node before balancing.
    this.updateHeight(node);

    // Get the balance factor of the node.
    const balanceFactor = this.getBalanceFactor(node);

    // If the node is left-heavy (balanceFactor > 1), check if a right rotation is needed.

    /* ## Simple Rule ##  which one side is heavier rotate to the other side */
    if (balanceFactor > 1) {
      // If the left subtree is right-heavy (balanceFactor < 0), perform a left-right rotation.
      if (this.getBalanceFactor(node.left!) < 0) {
        node.left = this.rotateLeft(node.left!);
      }
      // Perform right rotation to rebalance the node.
      return this.rotateRight(node);
    }

    // If the node is right-heavy (balanceFactor < -1), check if a left rotation is needed.
    if (balanceFactor < -1) {
      // If the right subtree is left-heavy (balanceFactor > 0), perform a right-left rotation.
      if (this.getBalanceFactor(node.right!) > 0) {
        node.right = this.rotateRight(node.right!);
      }
      // Perform left rotation to rebalance the node.
      return this.rotateLeft(node);
    }

    // Return the node if no rotations were needed (i.e., it's already balanced).
    return node;
  }

  // Recursive function to insert a new value into the AVL tree.
  // Balances the tree after the insertion.
  private _insert(node: MyNode<T> | null, value: T): MyNode<T> {
    // If the node is null, create a new node with the given value.
    if (node === null) {
      return new MyNode(value);
    }

    // Recursively insert the value in the left subtree if it's smaller.
    if (value < node.value) {
      node.left = this._insert(node.left, value);
    }
    // Recursively insert the value in the right subtree if it's greater.
    else if (value > node.value) {
      node.right = this._insert(node.right, value);
    } else {
      // If the value already exists, return the node as is (no duplicates in AVL tree).
      return node;
    }

    // After insertion, balance the tree and return the (possibly new) root node.
    return this.balance(node);
  }

  // Public method to add a value to the AVL tree.
  add(value: T): void {
    if (!value) throw Error("Please provide a valid value"); // Ensure valid value.
    this.root = this._insert(this.root, value); // Insert the value starting from the root.
  }

  // Recursive function to delete a node from the AVL tree.
  // Balances the tree after the deletion.
  private _deleteNode(node: MyNode<T> | null, value: T): MyNode<T> | null {
    if (!node) return null; // If the node is null, return null (value not found).

    // Recursively delete from the left subtree if the value is smaller.
    if (value < node.value) {
      node.left = this._deleteNode(node.left, value);
    }
    // Recursively delete from the right subtree if the value is greater.
    else if (value > node.value) {
      node.right = this._deleteNode(node.right, value);
    } else {
      // If the node has no children, simply remove it.
      if (!node.left && !node.right) {
        return null;
      }
      // If the node has only a right child, replace the node with the right child.
      if (!node.left) {
        return node.right;
      }
      // If the node has only a left child, replace the node with the left child.
      else if (!node.right) {
        return node.left;
      }
      // If the node has two children, find the in-order successor (smallest value in the right subtree),
      // replace the node's value with the successor's value, and delete the successor.
      const minValueNode = this._getMinValueNode(node.right)!;
      node.value = minValueNode.value;
      node.right = this._deleteNode(node.right, node.value);
    }

    // After deletion, balance the tree and return the (possibly new) root node.
    return this.balance(node);
  }

  // Public method to delete a value from the AVL tree.
  deleteNode(value: T): void {
    this.root = this._deleteNode(this.root, value); // Start deletion from the root.
  }

  // Helper function to find the node with the minimum value in a given subtree.
  private _getMinValueNode(node: MyNode<T>): MyNode<T> | null {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  inOrderTraversal(root = this.root): void {
    if (!root) return;
    if (root.left) this.inOrderTraversal(root.left);
    console.log(root.value);
    if (root.right) this.inOrderTraversal(root.right);
  }

  preOrderTraversal(root = this.root): void {
    if (!root) return;
    console.log(root.value);
    if (root.left) this.preOrderTraversal(root.left);
    if (root.right) this.preOrderTraversal(root.right);
  }

  postOrderTraversal(root = this.root): void {
    if (!root) return;
    if (root.left) this.postOrderTraversal(root.left);
    if (root.right) this.postOrderTraversal(root.right);
    console.log(root.value);
  }
}
