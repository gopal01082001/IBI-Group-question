// // Q2. Explain the output of the above-given code and explain why?
// // for (var i = 0; i < 5; i++) {
// //   setTimeout(() => console.log(i), 100)
// // }
// In the given JavaScript code snippet, a for loop is used to iterate from 0 to 4 (inclusive). Inside the loop, a setTimeout function is called for each iteration, which schedules the execution of an arrow function after a delay of 100 milliseconds. The arrow function simply prints the current value of i to the console.
// However, due to the asynchronous nature of setTimeout, the actual execution of the arrow function is delayed until after the loop finishes. This means that by the time the arrow function is executed, the value of i will be equal to 5 (since the loop stops when i becomes equal to 5).
// Therefore, the output of the above code will be:
// 5
// 5
// 5
// 5
// 5
// The arrow function is called five times, but each time it prints the current value of i, which is 5 when the function is finally executed. This is because the loop has already completed by the time the arrow function runs, and the final value of i after the loop is 5.
// To achieve the desired behavior of printing the values 0 to 4, you can use a closure to capture the current value of i for each iteration. One way to do this is by using let instead of var to declare the loop variable i, which creates a new binding for i in each iteration:
// javascript
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// With this change, the output will be:
// 0
// 1
// 2
// 3
// 4
// Now, each arrow function captures the correct value of i for its corresponding iteration, and the output shows the values 0 to 4 as expected.




