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
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

console.log('EMAIL.JS LOADED');

// Production-safe Transporter (Clean Gmail Service)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : ''
    },
    tls: {
        rejectUnauthorized: false
    }
});

const sendBookingEmail = async (userEmail, userName, eventTitle) => {
    try {
        const mailOptions = {
            from: `"Eventora" <${process.env.EMAIL_USER}>`,
            to: userEmail,
            subject: `Booking Confirmed: ${eventTitle}`,
            html: `
                <h2>Hi ${userName}!</h2>
                <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
                <p>Thank you for choosing Eventora.</p>
            `
        };

        console.log('TRYING BOOKING EMAIL...');
        await transporter.sendMail(mailOptions);
        console.log('BOOKING EMAIL SENT');

    } catch (error) {
        console.error('BOOKING EMAIL ERROR:', error);
        throw error;
    }
};

const sendOTPEmail = async (userEmail, otp, type) => {
    console.log('SEND OTP FUNCTION CALLED');
    console.log('Email:', userEmail);
    console.log('OTP:', otp);
    console.log('Type:', type);

    try {
        const title =
            type === 'account_verification'
                ? 'Verify your Eventora Account'
                : 'Eventora Booking Verification';

        const msg =
            type === 'account_verification'
                ? 'Please use the following OTP to verify your new Eventora account.'
                : 'Please use the following OTP to verify and confirm your event booking.';

        const mailOptions = {
            from: `"Eventora" <${process.env.EMAIL_USER}>`,
            to: userEmail,
            subject: title,
            html: `
                <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
                    <h2>${title}</h2>
                    <p>${msg}</p>

                    <div style="
                        margin: 20px auto;
                        padding: 15px;
                        font-size: 24px;
                        font-weight: bold;
                        background: #f4f4f4;
                        width: max-content;
                        letter-spacing: 5px;
                    ">
                        ${otp}
                    </div>

                    <p style="color: #999;">
                        This code expires in 5 minutes.
                    </p>
                </div>
            `
        };

        console.log('TRYING TO SEND OTP EMAIL...');
        await transporter.sendMail(mailOptions);
        console.log('OTP EMAIL SENT SUCCESSFULLY');

    } catch (error) {
        console.error('OTP EMAIL ERROR:', error);
        throw error;
    }
};

module.exports = {
    sendBookingEmail,
    sendOTPEmail
};