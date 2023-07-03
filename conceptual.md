### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  The three main ways of handling asyncronous code in Javascript.
     1. callbacks were the original way of handling async code in js. When the request completeed
	 the callback would be executed.
     2.  Promises. which return resolve or reject when the operation is complete
	 3. Async/Await syntax is built on promises but is syntactically cleaner and easier to understand

- What is a Promise?
Promise represent a future value that may not be available immediately

- What are the differences between an async function and a regular function?
	Regular function run from start to finish. While running they block other code from executing.
	They return a value using a return statement.
	Async function have the abiltity to be put on pause and allow other code to execute while they
	are waiting for a request to complete. They return promises.

- What is the difference between Node.js and Express.js?

express is a framework for for serving web applications.
Node is a standalone javascript engine/interperter that 
runs on your machine. 

- What is the error-first callback pattern?
 Error first callback pattern is a way to format a asyncronous function call
 where there is a conditional that responds that handles an error outcome first.
 and if no error occurs the callback is executed. This was common way to handle async code
 prior to promises.

- What is middleware?
Middleware are functions that run in between the request and  response
of the request/response cycle that occurs on the server  of a web application.

- What does the `next` function do?
It tells express to continute onto the next appropriate function handler for the current 
request.


- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

Problem one is the return statement will execture and potentially return an unresolved promise.
	I would use axios instead of jquery for the calls. 
	I would bundle the calls into a single line using axios.all() this would send all requestst in parralel
	
```js
async function getUsers() {
  const elie = await $.getJSON( 'https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
