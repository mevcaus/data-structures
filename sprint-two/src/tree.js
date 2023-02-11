var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new "tree"
  var newTree = new Tree(value);
  // new tree has value thats passed in already
  // use this to access the parent and set the new tree as one of its children
  this.children.push(newTree);
};
// O(1)
treeMethods.contains = function(target) {
  // see if target === value
  if (this.value === target) {
    // if yes return true
    return true;
  }
  // if tree has children
  if (this.children.length > 0) {
  // for loop
    for (var i = 0; i < this.children.length; i++) {
      // call contains on every child
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  // if tree value is not target
  // fail case: if tree has no children return false
  return false;

};
// O(n)



/*
 * Complexity: What is the time complexity of the above functions?
 */
