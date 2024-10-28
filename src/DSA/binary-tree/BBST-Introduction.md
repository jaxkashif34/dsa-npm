# AVL Tree

## Introduction

An **AVL tree** is a type of self-balancing binary search tree (BST). It was named after its inventors Adelson-Velsky and Landis. In an AVL tree, the heights of the two child subtrees of any node differ by at most one. If at any time they differ by more than one, **rebalancing** is performed to restore the property.

## Properties of AVL Tree

1. **Binary Search Tree (BST) Property**:

   - For each node, all the nodes in the left subtree have a value less than the node, and all the nodes in the right subtree have a value greater than the node.

2. **Height Balance Property**:

   - The heights of the left and right subtrees of any node differ by at most 1.
   - For any node `N`, `|height(left subtree) - height(right subtree)| ≤ 1`.

3. **Height of AVL Tree**:

   - In the worst case, the height of an AVL tree is approximately `log₂(n)` where `n` is the number of nodes.

4. **Balance Factor**:

   - The balance factor of a node is the difference between the height of its left and right subtrees:
     `balance_factor = height(left subtree) - height(right subtree)`.
   - A node is balanced if its balance factor is `-1`, `0`, or `1`.
   - If the balance factor is outside this range, the tree needs rebalancing.

5. **Time Complexities**:
   - **Search**: `O(log n)`
   - **Insert**: `O(log n)`
   - **Delete**: `O(log n)`

## Rotations in AVL Tree

Whenever a node is inserted or deleted, the balance factor of one or more nodes may become invalid (i.e., outside the range `[-1, 1]`). To restore the AVL tree property, rotations are used. There are four types of rotations:

1. **Left Rotation (LL Rotation)**
2. **Right Rotation (RR Rotation)**
3. **Left-Right Rotation (LR Rotation)**
4. **Right-Left Rotation (RL Rotation)**

### 1. Left Rotation (LL Rotation)

A **Left Rotation** is performed when a node is inserted into the right subtree of the right child, causing an imbalance.

- **Steps**:
  - Let the unbalanced node be `z`.
  - Set `y` as `z`'s right child.
  - Perform a left rotation by making `y` the new root and `z` the left child of `y`.
  - The left child of `y` becomes the right child of `z`.

  z                                  y
 / \                               /   \
T1   y     Left Rotation (LL)     z     x
    / \   – – – – – – – – – >    / \   / \
   T2   x                      T1  T2 T3  T4
       / \
     T3   T4



### 2. Right Rotation (RR Rotation)
A **Right Rotation** is performed when a node is inserted into the left subtree of the left child, causing an imbalance.

- **Steps**:
  - Let the unbalanced node be `z`.
  - Set `y` as `z`'s left child.
  - Perform a right rotation by making `y` the new root and `z` the right child of `y`.
  - The right child of `y` becomes the left child of `z`.


         z                               y
        / \                             /  \
       y   T4     Right Rotation (RR)  x     z
      / \     – – – – – – – – – >     / \   / \
     x   T3                          T1  T2 T3  T4
    / \
   T1 T2


### 3. Left-Right Rotation (LR Rotation)
A **Left-Right Rotation** is a combination of left and right rotations. It is performed when a node is inserted into the right subtree of the left child.

- **Steps**:
  - Let the unbalanced node be `z`.
  - First, perform a **left rotation** on `y` (left child of `z`), which reduces it to the **LL case**.
  - Then, perform a **right rotation** on `z`.

Step 1: Initial Unbalanced Tree
        z
       / \
      y   T4
     / \
   T1   x
       / \
     T2   T3

Step 2: After Left Rotation on `y`
        z
       / \
      x   T4
     / \
    y   T3
   / \
 T1   T2

Step 3: After Right Rotation on `z`
        x
       / \
      y   z
     / \   \
   T1   T2  T4
        /
     T3



### 4. Right-Left Rotation (RL Rotation)
A **Right-Left Rotation** is a combination of right and left rotations. It is performed when a node is inserted into the left subtree of the right child.

- **Steps**:
  - Let the unbalanced node be `z`.
  - First, perform a **right rotation** on `y` (right child of `z`), which reduces it to the **RR case**.
  - Then, perform a **left rotation** on `z`.


Step 1: Initial Unbalanced Tree
        z
       / \
     T1   y
         / \
       x   T4
      / \
    T2   T3

Step 2: After Right Rotation on `y`
        z
       / \
     T1   x
         / \
       T2   y
           / \
         T3   T4

Step 3: After Left Rotation on `z`
        x
       / \
      z   y
     / \   \
   T1  T2  T4
        \
        T3



## Insertion in AVL Tree

1. Perform a standard BST insertion.
2. Update the balance factor of each node.
3. Perform rotations if any node becomes unbalanced.

### Example of Insertion:
Insert nodes 10, 20, and 30 into an AVL Tree.
- Step 1: Insert 10. Tree is balanced.
- Step 2: Insert 20. Tree is balanced.
- Step 3: Insert 30. The balance factor of node 10 becomes `-2`, so perform a left rotation (LL Rotation).

Final Tree:

    20
   /  \
  10  30


## Deletion in AVL Tree

1. Perform a standard BST deletion.
2. Update the balance factor of each node.
3. Perform rotations if any node becomes unbalanced.

### Example of Deletion:
Delete node 20 from the AVL Tree:


After deletion, node 20 is removed. No rebalancing is needed since the tree is still balanced.

## Summary of Rotation Scenarios

| Imbalance Case     | Condition                                            | Rotation Type    |
|--------------------|------------------------------------------------------|------------------|
| Left-Left (LL)     | Inserted in left subtree of left child               | Right Rotation   |
| Right-Right (RR)   | Inserted in right subtree of right child             | Left Rotation    |
| Left-Right (LR)    | Inserted in right subtree of left child              | Left-Right Rotation (LR)  |
| Right-Left (RL)    | Inserted in left subtree of right child              | Right-Left Rotation (RL)  |

## Conclusion

An AVL tree ensures that the height of the tree remains balanced after every insertion and deletion, maintaining `O(log n)` time complexity for search, insert, and delete operations. Rotations help to restore the balance property in cases where it is violated.
