

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    this._storage[index] = [];
  }
  for (var i = 0; i < this._storage[index].length; i++) {
    var tuple = this._storage[index][i];
    if (tuple[0] === k) {
      this._storage[index][i] = [k, v];
      return;
    }
  }
  this._storage[index].push([k, v]);
};
// insert is an O(n) time complexity if your hash table has a small amount of indices and a large number of inputs, but approaches O(1) as the tables indices grow
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    var tuple = this._storage[index][i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};
// retrieve is an O(n) time complexity if your hash table has a small amount of indices and a large number of inputs, but approaches O(1) as the tables indices grow
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    var tuple = this._storage[index][i];
    if (tuple[0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
};
// remove is an O(n) time complexity if your hash table has a small amount of indices and a large number of inputs, but approaches O(1) as the tables indices grow


/*
 * Complexity: What is the time complexity of the above functions?
 */
