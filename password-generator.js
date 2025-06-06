// password-generator.js

// Import the 'generate-password' package.
const generatePassword = require('generate-password');

/**
 * Generates a random password and prints it to the console.
 * The password will be 10 characters long, include numbers, symbols,
 * uppercase letters, and exclude similar characters (like 'l' and '1').
 */
function generateAndLogPassword() {
  // Use generatePassword.generate() method to create a password based on options.
  const password = generatePassword.generate({
    length: 12,       // The length of the password
    numbers: true,    // Include numbers (0-9)
    symbols: true,    // Include symbols (!@#$%^&*...)
    uppercase: true,  // Include uppercase letters (A-Z)
    lowercase: true,  // Include lowercase letters (a-z)
    excludeSimilarCharacters: true, // Exclude characters that look similar (e.g., 'l' and '1', 'O' and '0')
  });

  // Print the generated password to the console.
  console.log("Generated Password:", password);
}

// Call the function to generate and log a password when the script runs.
generateAndLogPassword();