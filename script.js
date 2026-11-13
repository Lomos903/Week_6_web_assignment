
// ======================================
// SPENDWISE BUDGET TRACKER
// ======================================

// Store budget information
let totalBudget = 0;

// Store multiple expenses using an array
let expenses = [];

// Get HTML elements
const budgetForm = document.getElementById("budgetForm");
const expenseForm = document.getElementById("expenseForm");

const budgetInput = document.getElementById("budgetInput");
const expenseName = document.getElementById("expenseName");
const expenseCategory = document.getElementById("expenseCategory");
const expenseAmount = document.getElementById("expenseAmount");

const budgetDisplay = document.getElementById("budgetDisplay");
const expenseDisplay = document.getElementById("expenseDisplay");
const balanceDisplay = document.getElementById("balanceDisplay");
const countDisplay = document.getElementById("countDisplay");

const budgetMessage = document.getElementById("budgetMessage");
const expenseTableBody = document.getElementById("expenseTableBody");
const clearButton = document.getElementById("clearButton");

// Format amounts into Kenyan Shillings
function formatMoney(amount) {
    return "KES " + amount.toFixed(2);
}

// ======================================
// SET BUDGET EVENT
// ======================================

budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const enteredBudget = Number(budgetInput.value);

    // Conditional statement to validate budget
    if (!Number.isFinite(enteredBudget) || enteredBudget <= 0) {
        alert("Please enter a valid budget greater than zero.");
        return;
    }

    totalBudget = enteredBudget;

    budgetForm.reset();

    updateDashboard();

    alert("Your budget has been saved successfully!");
});

// ======================================
// ADD EXPENSE EVENT
// ======================================

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = expenseName.value.trim();
    const category = expenseCategory.value;
    const amount = Number(expenseAmount.value);

    // Validate expense details
    if (
        name === "" ||
        category === "" ||
        !Number.isFinite(amount) ||
        amount <= 0
    ) {
        alert("Please enter valid expense details.");
        return;
    }

    // Create a new expense record
    const newExpense = {
        id: Date.now() + Math.random(),
        name: name,
        category: category,
        amount: amount
    };

    // Store the expense in the array
    expenses.push(newExpense);

    // Clear form fields
    expenseForm.reset();

    // Update dashboard and expense records
    updateDashboard();

    alert("Expense added successfully!");
});

// ======================================
// CALCULATE TOTAL EXPENSES
// ======================================

function calculateTotalExpenses() {
    let total = 0;

    // Loop through all expense records
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// ======================================
// UPDATE DASHBOARD
// ======================================

function updateDashboard() {

    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = totalBudget - totalExpenses;

    // Update dashboard using DOM manipulation
    budgetDisplay.textContent = formatMoney(totalBudget);

    expenseDisplay.textContent = formatMoney(totalExpenses);

    balanceDisplay.textContent = formatMoney(remainingBalance);

    countDisplay.textContent = expenses.length;

    // Change balance colour based on spending
    balanceDisplay.style.color =
        remainingBalance < 0 ? "#dc2626" : "#2563eb";

    // Conditional statements for budget feedback
    budgetMessage.className = "message";

    if (totalBudget === 0) {
        budgetMessage.textContent =
            "Please set your budget to get started.";

    } else if (remainingBalance < 0) {
        budgetMessage.textContent =
            "Warning! You have exceeded your budget by " +
            formatMoney(Math.abs(remainingBalance)) + ".";

        budgetMessage.classList.add("danger");

    } else if (remainingBalance === 0) {
        budgetMessage.textContent =
            "You have used your entire budget.";

        budgetMessage.classList.add("warning");

    } else if (totalExpenses >= totalBudget * 0.8) {
        budgetMessage.textContent =
            "Be careful! You have used 80% or more of your budget.";

        budgetMessage.classList.add("warning");

    } else {
        budgetMessage.textContent =
            "Good job! Your spending is within your budget.";

        budgetMessage.classList.add("success");
    }

    // Display all expense records
    displayExpenses();
}

// ======================================
// DISPLAY EXPENSE RECORDS
// ======================================

function displayExpenses() {

    // Remove previous table records
    expenseTableBody.innerHTML = "";

    // Check whether the array is empty
    if (expenses.length === 0) {

        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.colSpan = 4;
        cell.textContent = "No expenses added yet.";

        row.appendChild(cell);
        expenseTableBody.appendChild(row);

        return;
    }

    // Loop through the array and create table rows
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        const categoryCell = document.createElement("td");
        const amountCell = document.createElement("td");
        const actionCell = document.createElement("td");

        nameCell.textContent = expense.name;
        categoryCell.textContent = expense.category;
        amountCell.textContent = formatMoney(expense.amount);

        // Create delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.type = "button";

        // Add event listener to delete individual expense
        deleteButton.addEventListener("click", function() {
            deleteExpense(expense.id);
        });

        actionCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(categoryCell);
        row.appendChild(amountCell);
        row.appendChild(actionCell);

        expenseTableBody.appendChild(row);
    }
}

// ======================================
// DELETE INDIVIDUAL EXPENSE
// ======================================

function deleteExpense(id) {

    // Remove the selected expense from the array
    expenses = expenses.filter(function(expense) {
        return expense.id !== id;
    });

    updateDashboard();
}

// ======================================
// CLEAR ALL EXPENSES EVENT
// ======================================

clearButton.addEventListener("click", function() {

    if (expenses.length === 0) {
        alert("There are no expenses to clear.");
        return;
    }

    const confirmClear = confirm(
        "Are you sure you want to delete all expenses?"
    );

    if (confirmClear) {
        expenses = [];

        updateDashboard();

        alert("All expenses have been cleared.");
    }
});

// ======================================
// INITIAL DASHBOARD DISPLAY
// ======================================

updateDashboard();
