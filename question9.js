// Q9. What will the code below output to the console and why?
// var arr1 = "john".split(''); 
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
// Let's go through the code step by step to see what it will output:
// var arr1 = "john".split(''); // arr1 = ['j', 'o', 'h', 'n']
// var arr2 = arr1.reverse(); // arr1 and arr2 both reference the same array, which is ['n', 'h', 'o', 'j']
// var arr3 = "jones".split(''); // arr3 = ['j', 'o', 'n', 'e', 's']
// arr2.push(arr3); // This will add the arr3 array as an element to arr2, so arr2 will be ['n', 'h', 'o', 'j', ['j', 'o', 'n', 'e', 's']]
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); // arr1 is still ['n', 'h', 'o', 'j'], so length=4 and last='j'
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); // arr2 is ['n', 'h', 'o', 'j', ['j', 'o', 'n', 'e', 's']]. 
// // The length will be 5, and the last element is ['j', 'o', 'n', 'e', 's'].
// Output to the console:
// array 1: length=4 last=j
// array 2: length=5 last=j,o,n,e,s
// In array 1, the last element is the character 'j'.
// In array 2, the last element is an array ['j', 'o', 'n', 'e', 's']. When using slice(-1) on an array, it extracts the last element, and since the last element in this case is an array, it displays all the elements of that nested array.



