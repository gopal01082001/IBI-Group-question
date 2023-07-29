// Q6. What is callback hell? Explain different ways to solve callback hell with examples each.
// Callback hell, also known as the pyramid of doom, is a term used in asynchronous programming when dealing with multiple nested callbacks, leading to code that becomes deeply nested and difficult to read, understand, and maintain. This situation often arises in languages like JavaScript, where asynchronous operations are common and callbacks are used to handle the results of those operations.
// Here's an example of callback hell in JavaScript:
// asyncFunc1(function(result1) {
//   asyncFunc2(result1, function(result2) {
//     asyncFunc3(result2, function(result3) {
//       // More nested callbacks...
//     });
//   });
// });
// As the number of asynchronous operations increases, this nesting can become highly convoluted and lead to bugs, making the codebase hard to maintain.
// There are several ways to mitigate or eliminate callback hell. Let's explore some of them with examples:
// Using Promises:
// Promises offer a more structured approach to handle asynchronous operations. Instead of nesting callbacks, you can chain the promises using then() and handle errors with catch(). Promises provide a cleaner and more organized code flow.
// Example:
// asyncFunc1()
//   .then(result1 => asyncFunc2(result1))
//   .then(result2 => asyncFunc3(result2))
//   .then(result3 => {
//     // Code to handle the final result
//   })
//   .catch(error => {
//     // Handle any errors that occurred in the chain
//   });
// Using Async/Await:
// Async/await is a syntactic sugar built on top of Promises that allows you to write asynchronous code in a more synchronous style, making it easier to read and write.
// async function asyncOperation() {
//   try {
//     const result1 = await asyncFunc1();
//     const result2 = await asyncFunc2(result1);
//     const result3 = await asyncFunc3(result2);
//     // Code to handle the final result
//   } catch (error) {
//     // Handle any errors that occurred during the async operations
//   }
// }
// Using Libraries:
// Several libraries have been developed to handle asynchronous operations and reduce callback hell. One popular example is async.js, which provides functions like async.waterfall to execute a series of asynchronous tasks in sequence.
// Example using async.js:
// const async = require('async');
// async.waterfall([
//   asyncFunc1,
//   asyncFunc2,
//   asyncFunc3
// ], function (err, result) {
//   if (err) {
//     // Handle error
//   } else {
//     // Code to handle the final result
//   }
// });
// Using ES6 Modules and async/await with try/catch:
// With modern JavaScript using ES6 modules and async/await, you can create separate functions for each async operation and handle errors with a try/catch block.
// Example:
// import { asyncFunc1, asyncFunc2, asyncFunc3 } from 'some-module';

// async function performAsyncOperations() {
//   try {
//     const result1 = await asyncFunc1();
//     const result2 = await asyncFunc2(result1);
//     const result3 = await asyncFunc3(result2);
//     // Code to handle the final result
//   } catch (error) {
//     // Handle any errors that occurred during the async operations
//   }
// }
// performAsyncOperations();
// By using these methods, you can significantly improve the readability and maintainability of your asynchronous code and avoid the dreaded callback hell.




