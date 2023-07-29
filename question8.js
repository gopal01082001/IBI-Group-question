// // Q8. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
// // (function() {
// //     console.log(1); 
// //     setTimeout(function(){console.log(2)}, 1000); 
// //     setTimeout(function(){console.log(3)}, 0); 
// //     console.log(4);
// // })();
// When the code is executed, the numbers 1, 4, 3, and 2 will be logged to the console. Here's the order and the reason why:
// console.log(1); - This will be the first statement executed, so it will log 1 to the console.
// setTimeout(function(){console.log(2)}, 1000); - This sets up a timeout for 1000 milliseconds (1 second). The function console.log(2) will be executed after the timeout, so it will log 2 to the console after 1 second.
// setTimeout(function(){console.log(3)}, 0); - This sets up a timeout for 0 milliseconds. Even though it's specified as 0, it doesn't mean the function will be executed immediately. It will be executed as soon as the current execution context is finished, which means it will be executed after all the synchronous code has been executed. In this case, that means after console.log(4) is executed. So, console.log(3) will log 3 to the console.
// console.log(4); - This will be executed before the timeout callbacks as it is a synchronous operation. So, 4 will be logged to the console.
// The final order of logging will be: 1, 4, 3, 2.





