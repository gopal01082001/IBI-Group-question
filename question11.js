// Q11. Check the below given code, if there are any issues, fix them and explain the output
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((acc, num) => {
//   if (num % 2 === 0) {
//     acc.evens.push(num);
//   } else {
//     acc.odds.push(num);
//   }
//   return acc;
// });
// console.log(result);
// The given code has a small issue in its initialization of the accumulator. It doesn't provide an initial value for the accumulator, which can lead to incorrect results and possible errors. Let's fix the code and explain the output:
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((acc, num) => {
//   if (num % 2 === 0) {
//     acc.evens.push(num);
//   } else {
//     acc.odds.push(num);
//   }
//   return acc;
// }, { evens: [], odds: [] }); // Provide initial value as an object with evens and odds properties
// console.log(result);
// { evens: [2, 4], odds: [1, 3, 5] }
// The reduce() function is used to iterate through the numbers array.
// The initial value for the accumulator is provided as an object with evens and odds properties, both initialized as empty arrays.
// During each iteration, the code checks if the current number is even or odd.
// If the current number is even, it is pushed into the evens array in the accumulator.
// If the current number is odd, it is pushed into the odds array in the accumulator.
// The final result is an object with evens and odds arrays containing even and odd numbers, respectively, from the numbers array.
// The output will be:
// { evens: [2, 4], odds: [1, 3, 5] }
// This output correctly separates the even and odd numbers from the numbers array and organizes them into different arrays within the result object.



