var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.storage.includes(item)) {
    this.storage.push(item);
  }
};
// O(n)

setPrototype.contains = function(item) {
  if (this.storage.indexOf(item) === -1) {
    return false;
  }
  return true;
};
// O(n)

setPrototype.remove = function(item) {
  var index = this.storage.indexOf(item);
  this.storage.splice(index, 1);
};
// O(n)

/*
 * Complexity: What is the time Zcomplexity of the above functions?
 */
