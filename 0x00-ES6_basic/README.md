0x00. ES6 Basics
This repository contains projects that cover basic concepts of ES6 (ECMAScript 2015). The tasks in this project are designed to teach and reinforce the use of new features introduced in ES6, like arrow functions, template literals, destructuring, and more.

Table of Contents
Project Description
Learning Objectives
Project Requirements
Setup Instructions
File Structure
Tasks
Resources
License
Project Description
This project is part of the alx-frontend-javascript curriculum. The focus is on learning and implementing modern JavaScript syntax (ES6). It includes tasks that will help you to become more proficient with newer JavaScript features such as const and let, block-scoped variables, arrow functions, template literals, rest and spread operators, and more.

Learning Objectives
By the end of this project, you should be able to explain and implement the following concepts:

What ES6 is and why it was introduced.
New features in ES6, such as:
Block-scoped variables (let, const)
Arrow functions
Default parameters
Rest and spread operators
Template literals
Destructuring assignments
The difference between const and let.
How to use string interpolation with template literals.
How to iterate over objects and arrays using iterators (for...of).
How to use ES6 object property shorthand and method properties.
Project Requirements
All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
Code must adhere to the Airbnb JavaScript Style Guide.
ESLint will be used to ensure code quality.
All files must end with a new line.
The project must include a README.md file.
All functions must be exported and tested with Jest.
Setup Instructions
Install Node.js (v12.11.x):

bash
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
node -v
npm -v
Install dependencies: Inside your project directory, run:

bash
Copy code
npm install
Configuration Files:

babel.config.js for Babel configuration
.eslintrc.js for ESLint configuration
These files have been provided in the project directory.

File Structure
csharp
Copy code
📦 alx-frontend-javascript
 ┣ 📂 0x00-ES6_basic
 ┃ ┣ 📜 0-constants.js
 ┃ ┣ 📜 1-block-scoped.js
 ┃ ┣ 📜 2-arrow.js
 ┃ ┣ 📜 3-default-parameter.js
 ┃ ┣ 📜 4-rest-parameter.js
 ┃ ┣ 📜 5-spread-operator.js
 ┃ ┣ 📜 6-string-interpolation.js
 ┃ ┣ 📜 7-getBudgetObject.js
 ┃ ┣ 📜 8-getBudgetCurrentYear.js
 ┃ ┣ 📜 9-getFullBudget.js
 ┃ ┣ 📜 10-loops.js
 ┃ ┣ 📜 11-createEmployeesObject.js
 ┃ ┣ 📜 12-createReportObject.js
 ┃ ┣ 📜 100-createIteratorObject.js
 ┃ ┣ 📜 101-iterateThroughObject.js
 ┣ 📜 README.md
 ┣ 📜 package.json
 ┣ 📜 babel.config.js
 ┗ 📜 .eslintrc.js
Tasks
0. Const or Let? [0-constants.js]
Modify the function to use const and let for variable declarations.
1. Block Scope [1-block-scoped.js]
Modify variables inside a function to avoid overwriting.
2. Arrow Functions [2-arrow.js]
Convert a traditional function to ES6 arrow function syntax.
3. Parameter Defaults [3-default-parameter.js]
Use ES6 default parameters to refactor a function.
4. Rest Parameter Syntax [4-rest-parameter.js]
Refactor a function to use the rest parameter syntax.
5. Spread Operator [5-spread-operator.js]
Use the spread operator to concatenate arrays and strings.
6. Template Literals [6-string-interpolation.js]
Use ES6 template literals for string interpolation.
7. Object Property Shorthand [7-getBudgetObject.js]
Use ES6 shorthand syntax for object properties.
8. Computed Property Names [8-getBudgetCurrentYear.js]
Use ES6 computed property names.
9. Method Properties [9-getFullBudget.js]
Use ES6 method properties in an object.
10. For...of Loops [10-loops.js]
Refactor a function to use for...of instead of for...in.
11. Iterators [11-createEmployeesObject.js]
Write a function that creates an object with an iterator.
12. Create a Report Object [12-createReportObject.js]
Create a report object containing employees and departments.
13. Create Iterator Object [100-createIteratorObject.js]
Create an iterator to loop through employees in a report.
14. Iterate Through Object [101-iterateThroughObject.js]
Write a function to iterate through report employees, returning a string.
Resources
ECMAScript 6 - ECMAScript 2015
Arrow functions
Rest parameter
ES6 Template Literals
For...of Loop
License
This project is licensed under the MIT License.

