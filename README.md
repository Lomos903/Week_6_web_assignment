
# SpendWise Budget Tracker

## Project Description

SpendWise is a personal budget and expense tracking
application developed using HTML, CSS and JavaScript.

The application helps users manage their money by
setting a budget, recording expenses and monitoring
their remaining balance.

## Improvements Made This Week

The following improvements were made to SpendWise:

1. Added JavaScript conditional statements to check
   budgeting situations.
2. Added arrays to store multiple expense records.
3. Used loops to calculate and display expenses.
4. Added DOM manipulation to update dashboard
   information directly on the webpage.
5. Added event listeners to respond to user actions.
6. Added functionality to delete individual expenses
   and clear all expense records.
7. Added warning messages when spending approaches
   or exceeds the budget.

## How Conditionals Are Used

Conditional statements help the application make
decisions based on the user's financial information.

For example, if expenses exceed the budget, the
application displays a warning message.

If spending is within the budget, it displays a
positive message.

The project uses if, else if and else statements.

## How Arrays Are Used

Arrays are used to store multiple expense records.

The expenses array stores information such as:

- Expense name
- Expense category
- Expense amount
- Expense ID

The push() method adds new expenses, while filter()
removes selected expenses.

## How Loops Are Used

A for loop processes the expense records stored
inside the expenses array.

The loop calculates the total expenses and displays
each expense in the dashboard table.

## How the DOM Is Updated

DOM manipulation allows JavaScript to change the
content of the webpage.

SpendWise uses document.getElementById() to access
HTML elements.

The textContent property updates the budget,
expenses and remaining balance.

The application also creates table rows dynamically
using document.createElement().

## How User Interactions Are Handled

Event listeners allow users to interact with the
application.

The submit event saves the budget and adds expenses.

The click event allows users to delete individual
expenses or clear all expense records.

The preventDefault() method prevents forms from
refreshing the webpage when submitted.

## Challenges Encountered and Solutions

One challenge was calculating total expenses from
multiple records.

I solved this by using an array and a for loop to
calculate the total amount.

Another challenge was updating the dashboard
automatically after adding or deleting expenses.

I solved this by creating an updateDashboard()
function that refreshes the displayed information.

I also used conditional statements to display
appropriate warning messages when the budget
is exceeded.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Git and GitHub

## Conclusion

This project helped me understand how JavaScript
makes websites interactive.

I learned how to use conditionals, arrays, loops,
DOM manipulation and event listeners to develop
a functional personal budget tracking application.
