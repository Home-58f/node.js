// email-sender.js

// Import the 'nodemailer' package.
const nodemailer = require('nodemailer');

// --- IMPORTANT: Configure your email credentials ---
// You should ideally use environment variables for these,
// especially for production. For this example, we'll put them directly.
// For Gmail, you might need to generate an "App password" from your Google Account security settings.
// Go to Google Account -> Security -> App passwords.
const senderEmail = 'your_email@gmail.com'; // Your email address
const senderPassword = 'your_app_password'; // Your generated App Password (NOT your regular email password)

// Create a transporter object using the default SMTP transport.
// This object is responsible for sending the email.
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use 'gmail' for Gmail or specify host/port for other services
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});

// Define the email options (who it's from, who it's to, subject, body).
const mailOptions = {
  from: senderEmail,         // Sender address
  to: 'recipient_email@example.com', // Recipient address (can be your own email for testing)
  subject: 'Hello from Node.js!',   // Subject line
  text: 'This is a test email sent from a Node.js application using Nodemailer.', // Plain text body
  html: '<b>This is a test email sent from a Node.js application using Nodemailer.</b>', // HTML body
};

// Send the email.
// The sendMail() method sends the email.
// It returns a promise or accepts a callback function to handle success or error.
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    // If there's an error, log it.
    console.error('Error sending email:', error);
  } else {
    // If successful, log the info about the sent email.
    console.log('Email sent: ' + info.response);
  }
});

console.log("Attempting to send email..."); // This will appear before the sendMail callback