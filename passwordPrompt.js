// Set the hardcoded correct password
const correctPassword = "george";
let userPassword;

// Use a do-while loop to keep asking for the password until it matches the correct one
do {
    // Prompt the user to enter a password
    userPassword = prompt("Enter your password: ");

    // Check if the entered password is correct
    if (userPassword !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (userPassword !== correctPassword);

// Log a success message when the correct password is entered
console.log("Access granted.");