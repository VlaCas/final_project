// Import necessary libraries.
import nodemailer from "nodemailer"; // Library for sending emails.
import { config } from 'dotenv'; // Library for loading environment variables from a .env file.

config();

export const sendEmail = (to, subject, html, res) => {
  // Create an email transporter using nodemailer library.
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USERNAME_EMAIL,
      pass: process.env.PASSWORD_EMAIL
    }
  });

  // Define options for our email.
  const mailOptions = {
    from: '"Vladimir Castillo" <vladimircastillo.vc19.ec@gmail.com>', 
    to: to,
    subject: subject,
    html: html
  };

  // Send the email using the email transporter and the defined options.
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(400).send('Failed to send email.'); 
    } else {
      //console.log('Correo enviado: ' + info.response);
      res.status(200).send('Email sent successfully!'); 
    }
  });
}

// // Create a POST route for sending emails.
// app.post('/sendEmail', (req, res) => {
//   // Extract necessary data from request body.
//   const { to, subject, html } = req.body;

//   // Create an email transporter using nodemailer library.
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.USERNAME_EMAIL,
//       pass: process.env.PASSWORD_EMAIL
//     }
//   });

//   // Define options for our email.
//   const mailOptions = {
//     from: '"Vladimir Castillo" <vladimircastillo.vc19.ec@gmail.com>', 
//     to: to,
//     subject: subject,
//     html: html
//   };

//   // Send the email using the email transporter and the defined options.
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Failed to send email.'); 
//     } else {
//       //console.log('Correo enviado: ' + info.response);
//       res.status(200).send('Email sent successfully!'); 
//     }
//   });
// });

// // Export our application so it can be used in other files.
// module.exports = app;







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







// // Import necessary libraries.
// import { express } from "express"; // Node.js framework for web applications. 
// import { nodemailer } from "nodemailer"; // Library for sending emails.
// import { config } from 'dotenv'; // Library for loading environment variables from a .env file.

// config();

// // Create an instance of our web application.
// const app = express();

// // Add middleware for Express to parse JSON in incoming requests.
// app.use(express.json());

// // Create a POST route for sending emails.
// app.post('/sendEmail', (req, res) => {
//   // Extract necessary data from request body.
//   const { to, subject, html } = req.body;

//   // Create an email transporter using nodemailer library.
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.USERNAME_EMAIL,
//       pass: process.env.PASSWORD_EMAIL
//     }
//   });

//   // Define options for our email.
//   const mailOptions = {
//     from: '"Vladimir Castillo" <vladimircastillo.vc19.ec@gmail.com>', 
//     to: to,
//     subject: subject,
//     html: html
//   };

//   // Send the email using the email transporter and the defined options.
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Failed to send email.'); 
//     } else {
//       //console.log('Correo enviado: ' + info.response);
//       res.status(200).send('Email sent successfully!'); 
//     }
//   });
// });

// // Export our application so it can be used in other files.
// module.exports = app;