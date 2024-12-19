# Missing Error Handling in Express.js Route

This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling for invalid or missing user IDs. The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Bug

The original code attempts to fetch a user based on an ID passed in the request parameters. However, it does not handle the cases where:

1. The `userId` is not a valid number.
2. No user with the given ID exists.

This can lead to unexpected errors or crashes.

## Solution

The corrected code includes checks to ensure the `userId` is a number and to handle the case where the user is not found. It returns appropriate HTTP status codes (400 for bad request and 404 for not found) and JSON responses to inform the client about the error.

## How to run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `node bug.js` and `node bugSolution.js`.