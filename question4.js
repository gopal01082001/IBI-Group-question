// Q4. What is promise chaining? Explain with an example.
// Promise chaining is a technique used in JavaScript to perform a sequence of asynchronous operations in a more readable and organized manner using Promises. Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and allow us to handle the results or errors when they become available.
// With promise chaining, you can chain multiple asynchronous operations together, where the output of one operation becomes the input for the next operation. This avoids the "callback hell" problem, where nested callbacks can lead to unreadable and hard-to-maintain code.
// Here's an example to illustrate promise chaining:
// Let's assume we have a set of asynchronous functions that simulate fetching data from a server. These functions return Promises.
// // Function to fetch user data from the server (returns a Promise)
// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Simulating fetching user data
//       const userData = { id: userId, name: 'John Doe', age: 30 };
//       resolve(userData);
//     }, 1000);
//   });
// }
// // Function to fetch user's orders from the server (returns a Promise)
// function fetchUserOrders(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Simulating fetching user orders
//       const userOrders = [{ id: 1, product: 'Widget' }, { id: 2, product: 'Gadget' }];
//       resolve(userOrders);
//     }, 1500);
//   });
// }
// Now, let's use promise chaining to fetch user data and then fetch the user's orders based on the retrieved user data:
// // Using promise chaining to fetch user data and then user orders
// fetchUserData(123)
//   .then((userData) => {
//     console.log('User Data:', userData);
//     return fetchUserOrders(userData.id); // Return the promise for fetchUserOrders
//   })
//   .then((userOrders) => {
//     console.log('User Orders:', userOrders);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
// In this example, we first call fetchUserData(123) to fetch user data for the user with ID 123. The .then() method is chained to the fetchUserData Promise, and inside it, we receive the userData. We log the user data and then return the Promise returned by fetchUserOrders(userData.id), which fetches the user's orders based on the user ID.
// The second .then() method is then chained to the fetchUserOrders Promise, and inside it, we receive the userOrders and log them to the console.
// By using promise chaining, the code reads in a sequential and clear manner, making it easier to understand the flow of asynchronous operations and how the data is being processed step by step. If any Promise in the chain encounters an error, it will be caught by the .catch() method at the end of the chain, handling any errors that occurred during the entire process.




