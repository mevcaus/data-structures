describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });


});


describe('unitTest', function() {
  var bigGuy = BinarySearchTree(50);
  for (var i = 0; i < 101; i++) {
    (function (i) {
      if (i < 101) {
        bigGuy.insert(Math.floor(Math.random() * 100));
      }
    })(i);
  }
  var coolArray = [];
  //var currentTree = this;
  bigGuy.depthFirstLog(function(currentTree) {
    //console.log(v);
    // console.log(this.value);
    //coolArray.push(v);
    console.log('current tree is: ' + currentTree);
    coolArray.push(currentTree);
  });
  console.log(coolArray);
  console.log(bigGuy);
  for (var j = 0; j < coolArray.length; j++) {
    (function(j) {
      it('should contain ' + coolArray[j], function() {
        console.log(bigGuy);
        expect(bigGuy.contains(coolArray[j])).to.equal(true);
      });
    })(j); // im hoping htis works? idk man
  }
});