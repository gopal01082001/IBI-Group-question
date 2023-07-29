// // Q7. Use Array.reduce() method to reverse the following given array
// // const arr = [1, 2, 3, 4, 5]
// In JavaScript, you can use the Array.reduce() method to reverse the given array. The reduce() method applies a callback function to each element of the array, accumulating the result as it goes. Here's how you can use it to reverse the array:
// const arr = [1, 2, 3, 4, 5];
// const reversedArr = arr.reduce((reversed, current) => {
//   reversed.unshift(current);
//   return reversed;
// }, []);
// console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
// In the code above, the reduce() method starts with an initial value of an empty array []. The callback function takes two parameters: reversed (which represents the reversed array accumulated so far) and current (which represents the current element being processed in the original array). The unshift() method is used to add each element at the beginning of the reversed array, effectively reversing the order of elements.
// After the reduce() method completes, the reversedArr will hold the reversed version of the original array arr.




