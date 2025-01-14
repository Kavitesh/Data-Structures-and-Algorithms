const { Node } = require("../helper");

function cloneGraphDfs(node) {
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

function cloneGraphBfs(node) {
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

module.exports = { cloneGraphDfs, cloneGraphBfs } 
