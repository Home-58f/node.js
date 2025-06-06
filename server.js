// server.js

// Import the built-in 'http' module.
// This module provides functionalities for creating HTTP servers and clients.
const http = require('http');

// Define the port number the server will listen on.
// According to the instruction, it should be 3000.
const PORT = 3000;

// Create an HTTP server.
// The createServer() method takes a callback function that is executed
// every time the server receives a request.
// The callback function receives two arguments: req (request) and res (response).
const server = http.createServer((req, res) => {
  // Set the HTTP header for the response.
  // 'Content-Type': 'text/html' tells the browser that the response body is HTML.
  // 200 is the HTTP status code for "OK".
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send the response body to the client.
  // The instruction specifies '<h1>Hello Node!!!!</h1>\n'.
  res.end('<h1>Hello Node!!!!</h1>\n');
});

// Make the server listen for incoming requests on the specified port.
// The second argument is a callback function that runs once the server starts listening.
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});