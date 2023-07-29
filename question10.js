// // Q10. What will the following code's output be in sequence and explain why?
// // function printNumber(num) {
// //   console.log(num);
// // }
// // console.log(1);
// // setTimeout(printNumber, 0, 2);
// // setTimeout(printNumber, 100, 3);
// // console.log(4);
// The output of the code will be as follows:
// console.log(1); - This will be the first statement executed, so it will log 1 to the console.
// setTimeout(printNumber, 0, 2); - This sets up a timeout for 0 milliseconds, which means the printNumber function with the argument 2 will be executed as soon as the current execution context is finished. However, it doesn't mean it will be executed immediately. It will be queued to run after the synchronous code is completed. Since there are no other synchronous operations after this line, it will be executed right away after the console.log(1) line. So, it will log 2 to the console.
// setTimeout(printNumber, 100, 3); - This sets up a timeout for 100 milliseconds, which means the printNumber function with the argument 3 will be executed after a delay of 100 milliseconds. Meanwhile, the rest of the code continues executing.
// console.log(4); - This will be executed after the previous line, so it will log 4 to the console.
// Now, after a delay of 100 milliseconds:
// The first setTimeout with printNumber(3) will be executed, logging 3 to the console.
// So, the final output sequence will be:
// 1
// 2
// 4
// 3
