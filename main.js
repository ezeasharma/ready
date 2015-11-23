var MergeSort = require('./merge-sort');
var Queue = require('./queue-using-array');
var QuickSort = require('./quick-sort');


// var mergeSort = new MergeSort();
// mergeSort.sort([1,2,3,4]);

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());