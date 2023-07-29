// Q1. What are the differences between cookie, local storage and session storage?
// Cookies, local storage, and session storage are all mechanisms available in web browsers to store data on the client-side (i.e., on the user's device). Each of these options has its own characteristics and use cases:
// Cookies:
// Cookies are small pieces of data stored on the client's device by websites. They were originally designed for maintaining session state and tracking user behavior.
// Cookies are sent to the server with every HTTP request, which adds some overhead to network traffic.
// They have an expiration date, after which the browser automatically removes them.
// Cookies have a limited size (usually 4KB), which restricts the amount of data that can be stored.
// Cookies can be set with various attributes such as domain, path, secure flag, and HTTP-only flag.
// Use Cases: Cookies are commonly used for session management (remembering login status), tracking user behavior (e.g., for analytics or advertising purposes), and personalization.
// Local Storage:
// Local Storage is part of the Web Storage API and provides a way to store data on the client's device without an expiration date (permanent storage until explicitly removed).
// Local Storage has a larger storage capacity (usually around 5-10MB) compared to cookies.
// The data stored in local storage is accessible to JavaScript code running on the same domain.
// Local Storage is synchronous, meaning that any read or write operation can potentially block the main thread of the web page.
// Use Cases: Local Storage is used when you need to store larger amounts of data persistently on the client-side, such as user preferences, cached data, or application state.
// Session Storage:
// Session Storage is also part of the Web Storage API and is similar to Local Storage, but with one crucial difference: the data stored in Session Storage is only accessible for the duration of the page session.
// When the user closes the tab or browser, the data stored in Session Storage is cleared, unlike Local Storage, which persists until explicitly removed.
// Like Local Storage, Session Storage has a larger storage capacity compared to cookies (usually around 5-10MB).
// Use Cases: Session Storage is useful when you need to store temporary session-specific data that should be available across page reloads but not across browser sessions.
// In summary, cookies are primarily used for session management and tracking, while Local Storage and Session Storage are used for client-side data storage, with the main distinction being the persistence duration of the data they hold. Local Storage is permanent until explicitly removed, while Session Storage is temporary and cleared after the session ends.




