# Smoothie Recipes Management System

 Developed a secure recipe management system with user authentication using Node.js and Express.js.
 Implemented user signup, login, and logout functionalities.The system features robust authentication to ensure only registered users can access recipe details.
 
## Table of contents

- [Features](#Features)
- [Installation](#Installation)
- [Usage](#Usage)
- [Tech Stack](#Tech-stack)




## Features

-User Authentication: Signup, login, and logout functionality.
-Secure Authentication: Uses bcrypt.js for password hashing and JWT for token-based authentication.
-Recipe Browsing: Users can browse and refer to smoothie recipes after logging in.
-Access Control: Only authenticated users can view recipe details.
- Error Handling: Proper validation for invalid login credentials and authentication failures.

## Installation

1.Clone the repository:
`git clone https://github.com/PanchamiML/authenticationsmoothie.git`
2.Navigate to the project directory:
`cd recipe-management-system`
3.Install dependencies:
`npm install`
4.Start the server:
`npm start`

## Usage

-Open http://localhost:3000 in your browser to access the app.
-Users can sign up, log in, and log out securely.
-Open http://localhost:3000/login in your browser to access the login page directly.
-Open http://localhost:3000/signup in your browser to access the signup page directly.
-After authentication, users can browse and access smoothie recipes.
-Handles authentication failures with meaningful error messages.

## Tech Stack

-Frontend:HTML,CSS,Bootstrap,JavaScript
-Backend: Node.js, Express.js
-Authentication: bcrypt.js, JWT

## Contributing

## License







