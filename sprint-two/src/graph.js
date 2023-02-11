

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};
// addNode is an O(1) time complexity
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};
// contains is an O(1) time complexity
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (var key in this.storage) {
    if (this.storage[key].includes(node)) {
      this.removeEdge(key, node);
    }
  }
  delete this.storage[node];
};
// removeNode is an O(n) time complexity
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].includes(toNode) && this.storage[toNode].includes(fromNode);
};
// hasEdge is an O(n) time complexity
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(Number(fromNode));
};
// addEdge is an O(1) time complexity
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var targetIndex = this.storage[fromNode].indexOf(toNode);
  var fromIndex = this.storage[toNode].indexOf(fromNode);
  this.storage[fromNode].splice(targetIndex, 1);
  this.storage[toNode].splice(fromIndex, 1);
};
// removeEdge is an O(n) time complexity

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key, this.storage[key]);
  }
};
// forEachNode is an O(n) time complexity

/*
 * Complexity: What is the time complexity of the above functions?
 */


