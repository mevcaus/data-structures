

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var removedValue = this._storage.get(index);
  this._storage.each(function(value, indexWithinStorage, storage) {
    console.log('this is my first argument: ' + value);
    console.log('this is my second argument: ' + indexWithinStorage);
    console.log('this is my third argument: ' + storage);
    if (value === removedValue) {
      storage.splice(indexWithinStorage, 1);
    }
    // we will tackle this tomorrow :)
    // if (superman === value) {
    //   delete this._storage[catwoman];
    // }
  });
  // var popped = this._storage.get(index);
  // console.log('popped is: ' + popped);
  // delete popped;
  // for (var key of this._storage[index].values()) {
  //   if (key[0] === this._storage.retrieve(index)) {
  //     var popped = this._storage[index];
  //     delete this._storage[index];
  //   }
  // }
  // return popped || 'item not found';
  // var deleted;
  // this._storage.each(function(value) {
  //   if (value === index) {
  //     deleted = this._storage[index];
  //     this._storage[index].delete(value);
  //   }
  // });
  // return deleted;


};

/*
 * Complexity: What is the time complexity of the above functions?
 */
