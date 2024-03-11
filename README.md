<img src='./src/assets/picture_investment-calculator.png' alt='logo by investment calculator' title='Logo Investment Calculator' width='70' />

# Investment Calculator

This code represents a React project for an investment calculator. Let's explore the key aspects of this project.

Project Structure:
The project consists of components - App, Header, UserInput, and Result. Each component serves a specific function in the investment calculator. The App component acts as the root component, unifying and managing the state of the other components.

User Input:
The UserInput component is responsible for handling user input. It receives data from the user regarding the initial capital, annual investment, expected return, and investment duration. Changes in the input data are immediately reflected in the state of the App component.

Results Display:
The Result component utilizes the input data to compute investment results and displays them in the form of a table. Each table row represents a year and contains corresponding investment data such as investment value, annual interest, total interest, and invested capital.

Handling Invalid Data:
The project also includes validation for the input data. If the user enters invalid data, such as a negative investment duration, an appropriate error message is displayed.

Overall, this code creates a simple yet effective investment calculator with a user-friendly interface, allowing users to input data and visualize results conveniently.
