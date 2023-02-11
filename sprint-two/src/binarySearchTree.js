var BinarySearchTree = function(passedValue) {
  var newTree = {};
  newTree.value = passedValue;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, newTreeMethods);
  return newTree;
};

newTreeMethods = {};

// newTreeMethods.nodeConstructor = function(passedValue) {
//   var newNode = {};
//   newNode.val = passedValue;
//   newNode.left = null;
//   newNode.right = null;
//   return newNode;
// };

newTreeMethods.insert = function(passedValue) {
  if (this.value > passedValue) {
    if (!this.left) {
      this.left = new BinarySearchTree(passedValue);
    } else {
      this.left.insert(passedValue);
    }
  }
  if (this.value < passedValue) {
    if (!this.right) {
      this.right = new BinarySearchTree(passedValue);
    } else {
      this.right.insert(passedValue);
    }
  }
};
// insert is a O(logn) time complexity

newTreeMethods.contains = function(passedValue) {
  if (this.value === passedValue) {
    return true;
  }
  if (this.value > passedValue) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(passedValue);
    }
  }
  if (this.value < passedValue) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(passedValue);
    }
  }
};
// contains is a O(logn) time complexity

newTreeMethods.depthFirstLog = function(cb) {
  // var that = this;
  // cb(that);

  // cb.bind(this);
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
//depthFirstLog is O(n) time complexity
/*
 * Complexity: What is the time complexity of the above functions?
 */
