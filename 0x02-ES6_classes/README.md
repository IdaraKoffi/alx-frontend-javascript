ES6 Classes Project
This project focuses on implementing and understanding ES6 Classes. Each task builds on using classes to model real-world scenarios and enforce object-oriented programming (OOP) principles. The project is organized into multiple tasks, each demonstrating the use of classes and their features in JavaScript.

Learning Objectives
By completing this project, you will:

Understand and implement classes in ES6.
Use extends to create inheritance between classes.
Implement encapsulation using getters and setters.
Utilize static methods for common utility functions within classes.
Understand and use Symbol to implement private properties.
Project Structure
The project contains several JavaScript files that each correspond to a specific task demonstrating the usage of classes and their features.

Files Overview
0-classroom.js

Defines a simple class ClassRoom that models a classroom with a constructor that accepts maxStudentsSize as an argument.
1-classroom.js

Defines a function that returns an array of ClassRoom objects.
2-hbtn_course.js

Defines the class HolbertonCourse with attributes such as name, length, and students. This file demonstrates the use of getters and setters for attributes and ensures validation of input types.
3-currency.js

Defines a class Currency that models currency with name and code properties. Includes methods for formatting and retrieving currency information.
4-pricing.js

Implements a Pricing class to handle price calculations in a specific currency. Also includes a static method for converting prices between different currencies.
5-building.js

A Building class that defines the blueprint for a building. Demonstrates abstract methods in JavaScript and class inheritance.
6-sky_high.js

Extends the Building class to model skyscrapers, introducing additional properties such as floors.
7-airport.js

Defines an Airport class that models airports with properties like name and code. Overrides the toString method for string representation of an airport.
8-hbtn_class.js

Defines a class HolbertonClass that models a class with attributes like size and location. Demonstrates the use of custom Symbol properties for private class attributes.
9-hoisting.js

Discusses and demonstrates class hoisting in JavaScript by creating two classes, one defined normally and the other with variable hoisting.
10-car.js

Demonstrates inheritance in JavaScript by defining a Car class that extends a Vehicle class. The Car class adds specific behavior and properties such as the brand of the car.
100-evcar.js

Extends the Car class to create an EVCar class that models electric cars, adding properties for the range of the car in addition to inherited properties from Car.
Usage
To run any of the scripts:

Clone the repository.
Navigate to the project directory.
bash
Copy code
cd 0x02-ES6_classes
Ensure you have Node.js installed on your machine. Install dependencies:
bash
Copy code
npm install
Run any specific file:
bash
Copy code
node <filename>.js
For example, to run 3-currency.js:

bash
Copy code
node 3-currency.js
Linting
The project uses eslint with the Airbnb style guide. To lint your code, run:

bash
Copy code
npm run lint
This will check all .js files in the root directory and ensure that the code conforms to the required style guide.
