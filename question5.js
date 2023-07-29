// Q5. What are Higher-Order Components (HOC) in React and how do they work?
// In React, Higher-Order Components (HOC) are a pattern used to enhance the behavior or add additional functionality to existing components. An HOC is a function that takes a component as input and returns a new component with additional props, modified behavior, or other changes.
// The main purpose of HOCs is to promote reusability and separation of concerns in React components. They allow you to encapsulate common logic or cross-cutting concerns, such as data fetching, authentication, logging, or other aspects, into a separate component. This way, you can apply the same functionality to multiple components without duplicating code.
// The typical structure of a Higher-Order Component is as follows:
// const higherOrderComponent = (WrappedComponent) => {
//   // ... Logic and modifications here ...
//   const EnhancedComponent = (props) => {
//     // ... Additional logic and props here ...
//     return <WrappedComponent {...props} />;
//   };
//   return EnhancedComponent;
// };
// Let's break down how HOCs work with an example:
// Suppose we have a simple component called MyComponent that displays a message:
// import React from 'react';
// const MyComponent = (props) => {
//   return <div>{props.message}</div>;
// };
// Now, we want to add a timestamp to the message displayed by MyComponent. We can create an HOC called withTimestamp to achieve this:
// import React from 'react';
// const withTimestamp = (WrappedComponent) => {
//   const EnhancedComponent = (props) => {
//     const timestamp = new Date().toLocaleString();
//     return <WrappedComponent {...props} timestamp={timestamp} />;
//   };
//   return EnhancedComponent;
// };
// In this example, the withTimestamp HOC takes the WrappedComponent (in this case, MyComponent) and returns a new component called EnhancedComponent. Inside EnhancedComponent, we add a timestamp prop with the current timestamp using new Date().toLocaleString().
// Now, we can apply the withTimestamp HOC to MyComponent like this:
// const MyComponentWithTimestamp = withTimestamp(MyComponent);
// Now, MyComponentWithTimestamp is a new component that includes the additional timestamp prop. We can use it just like any other React component:
// const App = () => {
//   return <MyComponentWithTimestamp message="Hello, World!" />;
// };
// When App renders, it will display the message along with the current timestamp:
// Hello, World!
// Timestamp: 7/29/2023, 12:34:56 PM
// This is a basic example of how HOCs work. In real-world scenarios, HOCs can be much more powerful and used to encapsulate complex logic and behavior that can be shared among multiple components, making the codebase more modular and maintainable. However, as React has evolved, other patterns like render props and hooks have become more popular for achieving similar functionality, providing more flexibility and ease of use.


