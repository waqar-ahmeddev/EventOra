// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');

// dotenv.config();

// console.log('EMAIL.JS LOADED');

// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     family: 4,
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     }
// });

// const sendBookingEmail = async (userEmail, userName, eventTitle) => {
//     try {
//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: userEmail,
//             subject: `Booking Confirmed: ${eventTitle}`,
//             html: `
//                 <h2>Hi ${userName}!</h2>
//                 <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
//                 <p>Thank you for choosing Eventora.</p>
//             `
//         };

//         console.log('TRYING BOOKING EMAIL...');

//         await transporter.sendMail(mailOptions);

//         console.log('BOOKING EMAIL SENT');

//     } catch (error) {
//         console.error('BOOKING EMAIL ERROR:', error);
//         throw error;
//     }
// };

// const sendOTPEmail = async (userEmail, otp, type) => {
//     console.log('SEND OTP FUNCTION CALLED');
//     console.log('Email:', userEmail);
//     console.log('OTP:', otp);
//     console.log('Type:', type);

//     try {
//         const title =
//             type === 'account_verification'
//                 ? 'Verify your Eventora Account'
//                 : 'Eventora Booking Verification';

//         const msg =
//             type === 'account_verification'
//                 ? 'Please use the following OTP to verify your new Eventora account.'
//                 : 'Please use the following OTP to verify and confirm your event booking.';

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: userEmail,
//             subject: title,
//             html: `
//                 <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//                     <h2>${title}</h2>
//                     <p>${msg}</p>

//                     <div style="
//                         margin: 20px auto;
//                         padding: 15px;
//                         font-size: 24px;
//                         font-weight: bold;
//                         background: #f4f4f4;
//                         width: max-content;
//                         letter-spacing: 5px;
//                     ">
//                         ${otp}
//                     </div>

//                     <p style="color: #999;">
//                         This code expires in 5 minutes.
//                     </p>
//                 </div>
//             `
//         };

//         console.log('TRYING TO SEND OTP EMAIL...');

//         await transporter.sendMail(mailOptions);

//         console.log('OTP EMAIL SENT SUCCESSFULLY');

//     } catch (error) {
//         console.error('OTP EMAIL ERROR:', error);
//         throw error;
//     }
// };

// module.exports = {
//     sendBookingEmail,
//     sendOTPEmail
// };
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');

// dotenv.config();

// console.log('EMAIL.JS LOADED');

// // Railway-friendly Gmail Transporter Configuration
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // Port 587 ke liye false hona chahiye
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '' // Spaces remove karne ke liye safe code
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// const sendBookingEmail = async (userEmail, userName, eventTitle) => {
//     try {
//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: `Booking Confirmed: ${eventTitle}`,
//             html: `
//                 <h2>Hi ${userName}!</h2>
//                 <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
//                 <p>Thank you for choosing Eventora.</p>
//             `
//         };

//         console.log('TRYING BOOKING EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('BOOKING EMAIL SENT');

//     } catch (error) {
//         console.error('BOOKING EMAIL ERROR:', error);
//         throw error;
//     }
// };

// const sendOTPEmail = async (userEmail, otp, type) => {
//     console.log('SEND OTP FUNCTION CALLED');
//     console.log('Email:', userEmail);
//     console.log('OTP:', otp);
//     console.log('Type:', type);

//     try {
//         const title =
//             type === 'account_verification'
//                 ? 'Verify your Eventora Account'
//                 : 'Eventora Booking Verification';

//         const msg =
//             type === 'account_verification'
//                 ? 'Please use the following OTP to verify your new Eventora account.'
//                 : 'Please use the following OTP to verify and confirm your event booking.';

//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: title,
//             html: `
//                 <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//                     <h2>${title}</h2>
//                     <p>${msg}</p>

//                     <div style="
//                         margin: 20px auto;
//                         padding: 15px;
//                         font-size: 24px;
//                         font-weight: bold;
//                         background: #f4f4f4;
//                         width: max-content;
//                         letter-spacing: 5px;
//                     ">
//                         ${otp}
//                     </div>

//                     <p style="color: #999;">
//                         This code expires in 5 minutes.
//                     </p>
//                 </div>
//             `
//         };

//         console.log('TRYING TO SEND OTP EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('OTP EMAIL SENT SUCCESSFULLY');

//     } catch (error) {
//         console.error('OTP EMAIL ERROR:', error);
//         throw error;
//     }
// };

// module.exports = {
//     sendBookingEmail,
//     sendOTPEmail
// };
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');

// dotenv.config();

// console.log('EMAIL.JS LOADED');

// // Production-ready Gmail Transporter Configuration (Port 465 SSL)
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, // Port 465 ke liye true zaroori hai
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '' // Spaces remove karne ke liye safe code
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// const sendBookingEmail = async (userEmail, userName, eventTitle) => {
//     try {
//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: `Booking Confirmed: ${eventTitle}`,
//             html: `
//                 <h2>Hi ${userName}!</h2>
//                 <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
//                 <p>Thank you for choosing Eventora.</p>
//             `
//         };

//         console.log('TRYING BOOKING EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('BOOKING EMAIL SENT');

//     } catch (error) {
//         console.error('BOOKING EMAIL ERROR:', error);
//         throw error;
//     }
// };

// const sendOTPEmail = async (userEmail, otp, type) => {
//     console.log('SEND OTP FUNCTION CALLED');
//     console.log('Email:', userEmail);
//     console.log('OTP:', otp);
//     console.log('Type:', type);

//     try {
//         const title =
//             type === 'account_verification'
//                 ? 'Verify your Eventora Account'
//                 : 'Eventora Booking Verification';

//         const msg =
//             type === 'account_verification'
//                 ? 'Please use the following OTP to verify your new Eventora account.'
//                 : 'Please use the following OTP to verify and confirm your event booking.';

//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: title,
//             html: `
//                 <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//                     <h2>${title}</h2>
//                     <p>${msg}</p>

//                     <div style="
//                         margin: 20px auto;
//                         padding: 15px;
//                         font-size: 24px;
//                         font-weight: bold;
//                         background: #f4f4f4;
//                         width: max-content;
//                         letter-spacing: 5px;
//                     ">
//                         ${otp}
//                     </div>

//                     <p style="color: #999;">
//                         This code expires in 5 minutes.
//                     </p>
//                 </div>
//             `
//         };

//         console.log('TRYING TO SEND OTP EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('OTP EMAIL SENT SUCCESSFULLY');

//     } catch (error) {
//         console.error('OTP EMAIL ERROR:', error);
//         throw error;
//     }
// };

// module.exports = {
//     sendBookingEmail,
//     sendOTPEmail
// };
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');

// dotenv.config();

// console.log('EMAIL.JS LOADED');

// // Production-ready Gmail Transporter Configuration with IPv4 Force
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     family: 4, // 👈 Force IPv4 connection to fix ENETUNREACH error on Railway
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : ''
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// const sendBookingEmail = async (userEmail, userName, eventTitle) => {
//     try {
//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: `Booking Confirmed: ${eventTitle}`,
//             html: `
//                 <h2>Hi ${userName}!</h2>
//                 <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
//                 <p>Thank you for choosing Eventora.</p>
//             `
//         };

//         console.log('TRYING BOOKING EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('BOOKING EMAIL SENT');

//     } catch (error) {
//         console.error('BOOKING EMAIL ERROR:', error);
//         throw error;
//     }
// };

// const sendOTPEmail = async (userEmail, otp, type) => {
//     console.log('SEND OTP FUNCTION CALLED');
//     console.log('Email:', userEmail);
//     console.log('OTP:', otp);
//     console.log('Type:', type);

//     try {
//         const title =
//             type === 'account_verification'
//                 ? 'Verify your Eventora Account'
//                 : 'Eventora Booking Verification';

//         const msg =
//             type === 'account_verification'
//                 ? 'Please use the following OTP to verify your new Eventora account.'
//                 : 'Please use the following OTP to verify and confirm your event booking.';

//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: title,
//             html: `
//                 <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//                     <h2>${title}</h2>
//                     <p>${msg}</p>

//                     <div style="
//                         margin: 20px auto;
//                         padding: 15px;
//                         font-size: 24px;
//                         font-weight: bold;
//                         background: #f4f4f4;
//                         width: max-content;
//                         letter-spacing: 5px;
//                     ">
//                         ${otp}
//                     </div>

//                     <p style="color: #999;">
//                         This code expires in 5 minutes.
//                     </p>
//                 </div>
//             `
//         };

//         console.log('TRYING TO SEND OTP EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('OTP EMAIL SENT SUCCESSFULLY');

//     } catch (error) {
//         console.error('OTP EMAIL ERROR:', error);
//         throw error;
//     }
// };

// module.exports = {
//     sendBookingEmail,
//     sendOTPEmail
// };
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// const dns = require('dns');

// // 💡 Force Node.js to prioritize IPv4 globally for all network calls
// dns.setDefaultResultOrder('ipv4first');

// dotenv.config();

// console.log('EMAIL.JS LOADED');

// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : ''
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// const sendBookingEmail = async (userEmail, userName, eventTitle) => {
//     try {
//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: `Booking Confirmed: ${eventTitle}`,
//             html: `
//                 <h2>Hi ${userName}!</h2>
//                 <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
//                 <p>Thank you for choosing Eventora.</p>
//             `
//         };

//         console.log('TRYING BOOKING EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('BOOKING EMAIL SENT');

//     } catch (error) {
//         console.error('BOOKING EMAIL ERROR:', error);
//         throw error;
//     }
// };

// const sendOTPEmail = async (userEmail, otp, type) => {
//     console.log('SEND OTP FUNCTION CALLED');
//     console.log('Email:', userEmail);
//     console.log('OTP:', otp);
//     console.log('Type:', type);

//     try {
//         const title =
//             type === 'account_verification'
//                 ? 'Verify your Eventora Account'
//                 : 'Eventora Booking Verification';

//         const msg =
//             type === 'account_verification'
//                 ? 'Please use the following OTP to verify your new Eventora account.'
//                 : 'Please use the following OTP to verify and confirm your event booking.';

//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: title,
//             html: `
//                 <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//                     <h2>${title}</h2>
//                     <p>${msg}</p>

//                     <div style="
//                         margin: 20px auto;
//                         padding: 15px;
//                         font-size: 24px;
//                         font-weight: bold;
//                         background: #f4f4f4;
//                         width: max-content;
//                         letter-spacing: 5px;
//                     ">
//                         ${otp}
//                     </div>

//                     <p style="color: #999;">
//                         This code expires in 5 minutes.
//                     </p>
//                 </div>
//             `
//         };

//         console.log('TRYING TO SEND OTP EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('OTP EMAIL SENT SUCCESSFULLY');

//     } catch (error) {
//         console.error('OTP EMAIL ERROR:', error);
//         throw error;
//     }
// };

// module.exports = {
//     sendBookingEmail,
//     sendOTPEmail
// };
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// const dns = require('dns');

// // Force IPv4 globally to prevent IPv6 routing issues on Railway
// dns.setDefaultResultOrder('ipv4first');

// dotenv.config();

// console.log('EMAIL.JS LOADED');

// // Railway-friendly Gmail Transporter (Port 587 with STARTTLS)
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // Port 587 ke liye false hona lazmi hai (STARTTLS upgrade)
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : ''
//     },
//     tls: {
//         rejectUnauthorized: false
//     },
//     connectionTimeout: 15000, // 15 seconds timeout
//     greetingTimeout: 15000,
//     socketTimeout: 15000
// });

// const sendBookingEmail = async (userEmail, userName, eventTitle) => {
//     try {
//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: `Booking Confirmed: ${eventTitle}`,
//             html: `
//                 <h2>Hi ${userName}!</h2>
//                 <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
//                 <p>Thank you for choosing Eventora.</p>
//             `
//         };

//         console.log('TRYING BOOKING EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('BOOKING EMAIL SENT');

//     } catch (error) {
//         console.error('BOOKING EMAIL ERROR:', error);
//         throw error;
//     }
// };

// const sendOTPEmail = async (userEmail, otp, type) => {
//     console.log('SEND OTP FUNCTION CALLED');
//     console.log('Email:', userEmail);
//     console.log('OTP:', otp);
//     console.log('Type:', type);

//     try {
//         const title =
//             type === 'account_verification'
//                 ? 'Verify your Eventora Account'
//                 : 'Eventora Booking Verification';

//         const msg =
//             type === 'account_verification'
//                 ? 'Please use the following OTP to verify your new Eventora account.'
//                 : 'Please use the following OTP to verify and confirm your event booking.';

//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: title,
//             html: `
//                 <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//                     <h2>${title}</h2>
//                     <p>${msg}</p>

//                     <div style="
//                         margin: 20px auto;
//                         padding: 15px;
//                         font-size: 24px;
//                         font-weight: bold;
//                         background: #f4f4f4;
//                         width: max-content;
//                         letter-spacing: 5px;
//                     ">
//                         ${otp}
//                     </div>

//                     <p style="color: #999;">
//                         This code expires in 5 minutes.
//                     </p>
//                 </div>
//             `
//         };

//         console.log('TRYING TO SEND OTP EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('OTP EMAIL SENT SUCCESSFULLY');

//     } catch (error) {
//         console.error('OTP EMAIL ERROR:', error);
//         throw error;
//     }
// };

// module.exports = {
//     sendBookingEmail,
//     sendOTPEmail
// };
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');

// dotenv.config();

// console.log('EMAIL.JS LOADED');

// // Production-safe Transporter (Clean Gmail Service)
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : ''
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// const sendBookingEmail = async (userEmail, userName, eventTitle) => {
//     try {
//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: `Booking Confirmed: ${eventTitle}`,
//             html: `
//                 <h2>Hi ${userName}!</h2>
//                 <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
//                 <p>Thank you for choosing Eventora.</p>
//             `
//         };

//         console.log('TRYING BOOKING EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('BOOKING EMAIL SENT');

//     } catch (error) {
//         console.error('BOOKING EMAIL ERROR:', error);
//         throw error;
//     }
// };

// const sendOTPEmail = async (userEmail, otp, type) => {
//     console.log('SEND OTP FUNCTION CALLED');
//     console.log('Email:', userEmail);
//     console.log('OTP:', otp);
//     console.log('Type:', type);

//     try {
//         const title =
//             type === 'account_verification'
//                 ? 'Verify your Eventora Account'
//                 : 'Eventora Booking Verification';

//         const msg =
//             type === 'account_verification'
//                 ? 'Please use the following OTP to verify your new Eventora account.'
//                 : 'Please use the following OTP to verify and confirm your event booking.';

//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: title,
//             html: `
//                 <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//                     <h2>${title}</h2>
//                     <p>${msg}</p>

//                     <div style="
//                         margin: 20px auto;
//                         padding: 15px;
//                         font-size: 24px;
//                         font-weight: bold;
//                         background: #f4f4f4;
//                         width: max-content;
//                         letter-spacing: 5px;
//                     ">
//                         ${otp}
//                     </div>

//                     <p style="color: #999;">
//                         This code expires in 5 minutes.
//                     </p>
//                 </div>
//             `
//         };

//         console.log('TRYING TO SEND OTP EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('OTP EMAIL SENT SUCCESSFULLY');

//     } catch (error) {
//         console.error('OTP EMAIL ERROR:', error);
//         throw error;
//     }
// };

// module.exports = {
//     sendBookingEmail,
//     sendOTPEmail
// };
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// const dns = require('dns');

// dotenv.config();

// console.log('EMAIL.JS LOADED');

// // Custom DNS Lookup: Forces Nodemailer to use IPv4 only (Fixes ENETUNREACH on Railway)
// const customDnsLookup = (hostname, options, callback) => {
//     return dns.lookup(hostname, { family: 4 }, callback);
// };

// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     lookup: customDnsLookup, // 👈 Ensures IPv4 is used
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : ''
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// const sendBookingEmail = async (userEmail, userName, eventTitle) => {
//     try {
//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: `Booking Confirmed: ${eventTitle}`,
//             html: `
//                 <h2>Hi ${userName}!</h2>
//                 <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
//                 <p>Thank you for choosing Eventora.</p>
//             `
//         };

//         console.log('TRYING BOOKING EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('BOOKING EMAIL SENT');

//     } catch (error) {
//         console.error('BOOKING EMAIL ERROR:', error);
//         throw error;
//     }
// };

// const sendOTPEmail = async (userEmail, otp, type) => {
//     console.log('SEND OTP FUNCTION CALLED');
//     console.log('Email:', userEmail);
//     console.log('OTP:', otp);
//     console.log('Type:', type);

//     try {
//         const title =
//             type === 'account_verification'
//                 ? 'Verify your Eventora Account'
//                 : 'Eventora Booking Verification';

//         const msg =
//             type === 'account_verification'
//                 ? 'Please use the following OTP to verify your new Eventora account.'
//                 : 'Please use the following OTP to verify and confirm your event booking.';

//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: title,
//             html: `
//                 <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//                     <h2>${title}</h2>
//                     <p>${msg}</p>

//                     <div style="
//                         margin: 20px auto;
//                         padding: 15px;
//                         font-size: 24px;
//                         font-weight: bold;
//                         background: #f4f4f4;
//                         width: max-content;
//                         letter-spacing: 5px;
//                     ">
//                         ${otp}
//                     </div>

//                     <p style="color: #999;">
//                         This code expires in 5 minutes.
//                     </p>
//                 </div>
//             `
//         };

//         console.log('TRYING TO SEND OTP EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('OTP EMAIL SENT SUCCESSFULLY');

//     } catch (error) {
//         console.error('OTP EMAIL ERROR:', error);
//         throw error;
//     }
// };

// module.exports = {
//     sendBookingEmail,
//     sendOTPEmail
// };
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// const dns = require('dns');

// dotenv.config();

// console.log('EMAIL.JS LOADED');

// // Custom DNS Lookup function to force IPv4 and bypass Railway IPv6 ENETUNREACH error
// const customDnsLookup = (hostname, options, callback) => {
//     return dns.lookup(hostname, { family: 4 }, callback);
// };

// // Transporter with custom IPv4 lookup handler
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     lookup: customDnsLookup, // 👈 Ensures Nodemailer resolves only IPv4 addresses
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : ''
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// const sendBookingEmail = async (userEmail, userName, eventTitle) => {
//     try {
//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: `Booking Confirmed: ${eventTitle}`,
//             html: `
//                 <h2>Hi ${userName}!</h2>
//                 <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
//                 <p>Thank you for choosing Eventora.</p>
//             `
//         };

//         console.log('TRYING BOOKING EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('BOOKING EMAIL SENT');

//     } catch (error) {
//         console.error('BOOKING EMAIL ERROR:', error);
//         throw error;
//     }
// };

// const sendOTPEmail = async (userEmail, otp, type) => {
//     console.log('SEND OTP FUNCTION CALLED');
//     console.log('Email:', userEmail);
//     console.log('OTP:', otp);
//     console.log('Type:', type);

//     try {
//         const title =
//             type === 'account_verification'
//                 ? 'Verify your Eventora Account'
//                 : 'Eventora Booking Verification';

//         const msg =
//             type === 'account_verification'
//                 ? 'Please use the following OTP to verify your new Eventora account.'
//                 : 'Please use the following OTP to verify and confirm your event booking.';

//         const mailOptions = {
//             from: `"Eventora" <${process.env.EMAIL_USER}>`,
//             to: userEmail,
//             subject: title,
//             html: `
//                 <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//                     <h2>${title}</h2>
//                     <p>${msg}</p>

//                     <div style="
//                         margin: 20px auto;
//                         padding: 15px;
//                         font-size: 24px;
//                         font-weight: bold;
//                         background: #f4f4f4;
//                         width: max-content;
//                         letter-spacing: 5px;
//                     ">
//                         ${otp}
//                     </div>

//                     <p style="color: #999;">
//                         This code expires in 5 minutes.
//                     </p>
//                 </div>
//             `
//         };

//         console.log('TRYING TO SEND OTP EMAIL...');
//         await transporter.sendMail(mailOptions);
//         console.log('OTP EMAIL SENT SUCCESSFULLY');

//     } catch (error) {
//         console.error('OTP EMAIL ERROR:', error);
//         throw error;
//     }
// };

// module.exports = {
//     sendBookingEmail,
//     sendOTPEmail
// };
// const { Resend } = require('resend');
// const dotenv = require('dotenv');

// dotenv.config();

// console.log('EMAIL.JS LOADED WITH RESEND');

// const resend = new Resend(process.env.RESEND_API_KEY);

// const sendBookingEmail = async (userEmail, userName, eventTitle) => {
//     try {
//         console.log('TRYING BOOKING EMAIL VIA RESEND...');
        
//         const data = await resend.emails.send({
//             from: 'Eventora <onboarding@resend.dev>',
//             to: [userEmail],
//             subject: `Booking Confirmed: ${eventTitle}`,
//             html: `
//                 <h2>Hi ${userName}!</h2>
//                 <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
//                 <p>Thank you for choosing Eventora.</p>
//             `
//         });

//         console.log('BOOKING EMAIL SENT VIA RESEND:', data);
//         return data;

//     } catch (error) {
//         console.error('BOOKING EMAIL ERROR (RESEND):', error);
//         throw error;
//     }
// };

// const sendOTPEmail = async (userEmail, otp, type) => {
//     console.log('SEND OTP FUNCTION CALLED VIA RESEND');
//     console.log('Email:', userEmail);
//     console.log('OTP:', otp);

//     try {
//         const title =
//             type === 'account_verification'
//                 ? 'Verify your Eventora Account'
//                 : 'Eventora Booking Verification';

//         const msg =
//             type === 'account_verification'
//                 ? 'Please use the following OTP to verify your new Eventora account.'
//                 : 'Please use the following OTP to verify and confirm your event booking.';

//         const data = await resend.emails.send({
//             from: 'Eventora <onboarding@resend.dev>',
//             to: [userEmail],
//             subject: title,
//             html: `
//                 <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//                     <h2>${title}</h2>
//                     <p>${msg}</p>

//                     <div style="
//                         margin: 20px auto;
//                         padding: 15px;
//                         font-size: 24px;
//                         font-weight: bold;
//                         background: #f4f4f4;
//                         width: max-content;
//                         letter-spacing: 5px;
//                     ">
//                         ${otp}
//                     </div>

//                     <p style="color: #999;">
//                         This code expires in 5 minutes.
//                     </p>
//                 </div>
//             `
//         });

//         console.log('OTP EMAIL SENT SUCCESSFULLY VIA RESEND:', data);
//         return data;

//     } catch (error) {
//         console.error('OTP EMAIL ERROR (RESEND):', error);
//         throw error;
//     }
// };

// module.exports = {
//     sendBookingEmail,
//     sendOTPEmail
// };
// const nodemailer = require('nodemailer');
// const mg = require('nodemailer-mailgun-transport');
// const dotenv = require('dotenv');

// dotenv.config();

// console.log('EMAIL.JS LOADED WITH MAILGUN HTTP API');

// // Mailgun Auth Config
// const auth = {
//     auth: {
//         api_key: process.env.MAILGUN_API_KEY,
//         domain: process.env.MAILGUN_DOMAIN
//     }
// };

// const transporter = nodemailer.createTransport(mg(auth));

// const sendBookingEmail = async (userEmail, userName, eventTitle) => {
//     try {
//         const mailOptions = {
//             from: `Eventora <postmaster@${process.env.MAILGUN_DOMAIN}>`,
//             to: userEmail,
//             subject: `Booking Confirmed: ${eventTitle}`,
//             html: `
//                 <h2>Hi ${userName}!</h2>
//                 <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
//                 <p>Thank you for choosing Eventora.</p>
//             `
//         };

//         console.log('TRYING BOOKING EMAIL VIA MAILGUN...');
//         const info = await transporter.sendMail(mailOptions);
//         console.log('BOOKING EMAIL SENT VIA MAILGUN:', info);
//         return info;

//     } catch (error) {
//         console.error('BOOKING EMAIL ERROR (MAILGUN):', error);
//         throw error;
//     }
// };

// const sendOTPEmail = async (userEmail, otp, type) => {
//     console.log('SEND OTP FUNCTION CALLED VIA MAILGUN');
//     console.log('Sending OTP to:', userEmail);

//     try {
//         const title =
//             type === 'account_verification'
//                 ? 'Verify your Eventora Account'
//                 : 'Eventora Booking Verification';

//         const msg =
//             type === 'account_verification'
//                 ? 'Please use the following OTP to verify your new Eventora account.'
//                 : 'Please use the following OTP to verify and confirm your event booking.';

//         const mailOptions = {
//             from: `Eventora <postmaster@${process.env.MAILGUN_DOMAIN}>`,
//             to: userEmail,
//             subject: title,
//             html: `
//                 <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//                     <h2>${title}</h2>
//                     <p>${msg}</p>

//                     <div style="
//                         margin: 20px auto;
//                         padding: 15px;
//                         font-size: 24px;
//                         font-weight: bold;
//                         background: #f4f4f4;
//                         width: max-content;
//                         letter-spacing: 5px;
//                     ">
//                         ${otp}
//                     </div>

//                     <p style="color: #999;">
//                         This code expires in 5 minutes.
//                     </p>
//                 </div>
//             `
//         };

//         console.log('TRYING TO SEND OTP EMAIL VIA MAILGUN...');
//         const info = await transporter.sendMail(mailOptions);
//         console.log('OTP EMAIL SENT SUCCESSFULLY VIA MAILGUN:', info);
//         return info;

//     } catch (error) {
//         console.error('OTP EMAIL ERROR (MAILGUN):', error);
//         throw error;
//     }
// };

// module.exports = {
//     sendBookingEmail,
//     sendOTPEmail
// };
// const Brevo = require('@getbrevo/brevo');
// const dotenv = require('dotenv');

// dotenv.config();

// const apiInstance = new Brevo.TransactionalEmailsApi();
// const apiKey = apiInstance.authentications['apiKey'];
// apiKey.apiKey = process.env.BREVO_API_KEY;

// const sendOTPEmail = async (userEmail, otp, type) => {
//     try {
//         const title = type === 'account_verification'
//             ? 'Verify your Eventora Account'
//             : 'Eventora Booking Verification';

//         const sendSmtpEmail = new Brevo.SendSmtpEmail();
//         sendSmtpEmail.subject = title;
//         sendSmtpEmail.htmlContent = `
//             <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//                 <h2>${title}</h2>
//                 <p>Your OTP code is:</p>
//                 <h1 style="background: #f4f4f4; padding: 10px; display: inline-block;">${otp}</h1>
//                 <p>This code expires in 5 minutes.</p>
//             </div>
//         `;
//         sendSmtpEmail.sender = { name: "Eventora", email: "waqarkhano145@gmail.com" };
//         sendSmtpEmail.to = [{ email: userEmail }]; // 👈 Dunya ka koi bhi naya user ho, direct OTP jayega!

//         const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
//         console.log('OTP EMAIL SENT SUCCESSFULLY VIA BREVO:', data);
//         return data;
//     } catch (error) {
//         console.error('BREVO EMAIL ERROR:', error);
//         throw error;
//     }
// };

// module.exports = { sendOTPEmail };
// const Brevo = require('@getbrevo/brevo');
// const dotenv = require('dotenv');

// dotenv.config();

// // Updated Brevo API Client Setup
// const apiInstance = new Brevo.TransactionalEmailsApi();

// // Set API Key
// apiInstance.setApiKey(
//     Brevo.TransactionalEmailsApiApiKeys.apiKey,
//     process.env.BREVO_API_KEY
// );

// const sendOTPEmail = async (userEmail, otp, type) => {
//     try {
//         const title =
//             type === 'account_verification'
//                 ? 'Verify your Eventora Account'
//                 : 'Eventora Booking Verification';

//         const sendSmtpEmail = new Brevo.SendSmtpEmail();
//         sendSmtpEmail.subject = title;
//         sendSmtpEmail.htmlContent = `
//             <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//                 <h2>${title}</h2>
//                 <p>Your OTP code is:</p>
//                 <h1 style="background: #f4f4f4; padding: 10px; display: inline-block;">${otp}</h1>
//                 <p>This code expires in 5 minutes.</p>
//             </div>
//         `;
//         sendSmtpEmail.sender = { name: "Eventora", email: "waqarkhano145@gmail.com" };
//         sendSmtpEmail.to = [{ email: userEmail }];

//         const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
//         console.log('OTP EMAIL SENT SUCCESSFULLY VIA BREVO:', data);
//         return data;
//     } catch (error) {
//         console.error('BREVO EMAIL ERROR:', error);
//         throw error;
//     }
// };

// const sendBookingEmail = async (userEmail, userName, eventTitle) => {
//     try {
//         const sendSmtpEmail = new Brevo.SendSmtpEmail();
//         sendSmtpEmail.subject = `Booking Confirmed: ${eventTitle}`;
//         sendSmtpEmail.htmlContent = `
//             <h2>Hi ${userName}!</h2>
//             <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
//             <p>Thank you for choosing Eventora.</p>
//         `;
//         sendSmtpEmail.sender = { name: "Eventora", email: "waqarkhano145@gmail.com" };
//         sendSmtpEmail.to = [{ email: userEmail }];

//         const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
//         console.log('BOOKING EMAIL SENT VIA BREVO:', data);
//         return data;
//     } catch (error) {
//         console.error('BOOKING EMAIL ERROR (BREVO):', error);
//         throw error;
//     }
// };

// module.exports = {
//     sendOTPEmail,
//     sendBookingEmail
// };
const Brevo = require('@getbrevo/brevo');
const dotenv = require('dotenv');

dotenv.config();

// Direct class instantiation for @getbrevo/brevo SDK
const apiInstance = new Brevo.TransactionalEmailsApi();

// Set API key configuration
apiInstance.setApiKey(
    Brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY
);

const sendOTPEmail = async (userEmail, otp, type) => {
    try {
        const title =
            type === 'account_verification'
                ? 'Verify your Eventora Account'
                : 'Eventora Booking Verification';

        const sendSmtpEmail = new Brevo.SendSmtpEmail();
        sendSmtpEmail.subject = title;
        sendSmtpEmail.htmlContent = `
            <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
                <h2>${title}</h2>
                <p>Your OTP code is:</p>
                <h1 style="background: #f4f4f4; padding: 10px; display: inline-block;">${otp}</h1>
                <p>This code expires in 5 minutes.</p>
            </div>
        `;
        sendSmtpEmail.sender = { name: "Eventora", email: "waqarkhano145@gmail.com" };
        sendSmtpEmail.to = [{ email: userEmail }];

        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('OTP EMAIL SENT SUCCESSFULLY VIA BREVO:', data);
        return data;
    } catch (error) {
        console.error('BREVO EMAIL ERROR:', error);
        throw error;
    }
};

const sendBookingEmail = async (userEmail, userName, eventTitle) => {
    try {
        const sendSmtpEmail = new Brevo.SendSmtpEmail();
        sendSmtpEmail.subject = `Booking Confirmed: ${eventTitle}`;
        sendSmtpEmail.htmlContent = `
            <h2>Hi ${userName}!</h2>
            <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
            <p>Thank you for choosing Eventora.</p>
        `;
        sendSmtpEmail.sender = { name: "Eventora", email: "waqarkhano145@gmail.com" };
        sendSmtpEmail.to = [{ email: userEmail }];

        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('BOOKING EMAIL SENT VIA BREVO:', data);
        return data;
    } catch (error) {
        console.error('BOOKING EMAIL ERROR (BREVO):', error);
        throw error;
    }
};

module.exports = {
    sendOTPEmail,
    sendBookingEmail
};