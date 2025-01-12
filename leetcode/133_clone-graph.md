# Clone a Graph
[LeetCode](https://leetcode.com/problems/clone-graph/) 
|
[Solution](133_clone-graph.js)
|
Graph

The problem is to create a deep copy of an undirected graph. Each node in the graph contains a value and a list of its neighbors.

## Problem Statement

Given a reference to a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph is represented as a `Node` object:

```javascript
class Node {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors; // Array of Node references
  }
}
```

The graph is represented using adjacency lists, and the input graph is guaranteed to be connected.

---

## Naive Solution: Using DFS and a Map

### Approach
1. Use a map (`oldToNew`) to keep track of cloned nodes. This ensures each node is cloned exactly once.
2. Perform a Depth-First Search (DFS) on the graph:
   - If a node is already cloned, return its clone from the map.
   - Otherwise, clone the current node and recursively clone its neighbors.

### Implementation
```javascript
function cloneGraph(node) {
  if (!node) return null;

  const oldToNew = new Map();

  function dfs(curr) {
    if (oldToNew.has(curr)) return oldToNew.get(curr);

    const copy = new Node(curr.val);
    oldToNew.set(curr, copy);

    for (const neighbor of curr.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  }

  return dfs(node);
}

// Usage Example
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

const clonedGraph = cloneGraph(node1);
console.log(clonedGraph);
```

### Complexity
- **Time Complexity**: `O(V + E)`, where `V` is the number of vertices and `E` is the number of edges. Each node and edge is visited once.
- **Space Complexity**: `O(V)`, due to the recursive call stack and the `oldToNew` map.

---

## Optimized Solution: Using BFS and a Map

### Approach
1. Use a queue to perform Breadth-First Search (BFS).
2. Clone the starting node and add it to the map.
3. For each node in the queue:
   - Clone its neighbors if they haven't been cloned yet.
   - Add the cloned neighbors to the corresponding clone's `neighbors` list.

### Implementation
```javascript
function cloneGraph(node) {
  if (!node) return null;

  const oldToNew = new Map();
  const queue = [node];
  oldToNew.set(node, new Node(node.val));

  while (queue.length > 0) {
    const curr = queue.shift();

    for (const neighbor of curr.neighbors) {
      if (!oldToNew.has(neighbor)) {
        oldToNew.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }
      oldToNew.get(curr).neighbors.push(oldToNew.get(neighbor));
    }
  }

  return oldToNew.get(node);
}

// Usage Example
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

const clonedGraph = cloneGraph(node1);
console.log(clonedGraph);
```

### Complexity
- **Time Complexity**: `O(V + E)`.
- **Space Complexity**: `O(V)`, for the queue and the `oldToNew` map.

---

## Key Takeaways
1. Both DFS and BFS can be used to solve the problem. The choice depends on preference or use case.
2. A map is essential to ensure each node is cloned exactly once and to handle cycles in the graph.
3. BFS might be easier to debug for large graphs due to its iterative nature.
