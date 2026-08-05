const User = require('../models/user'); // Capital 'U' standard convention hai
const bcrypt = require('bcryptjs');
const OTP = require('../models/OTP');
const { sendOTPEmail } = require('../utils/email'); 
const jwt = require('jsonwebtoken');

// Token generation helper
const generateToken = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;  

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const newUser = new User({ 
            name, 
            email, 
            password: hashedPassword, 
            isVerified: false, 
            role: 'user'
        });
        await newUser.save();

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        console.log(`Generated OTP for ${email}: ${otp}`);

        await OTP.create({ email, otp, action: 'account_verification' });
        await sendOTPEmail(email, otp, 'account_verification');

        res.status(201).json({ message: 'User created successfully. Please check your email for the OTP to verify your account.' });
    } catch (error) {
        res.status(400).json({ message: 'Server error', error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    if (!user.isVerified && user.role === 'user') {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        await OTP.deleteMany({ email, action: 'account_verification' });
        await OTP.create({ email, otp, action: 'account_verification' });
        await sendOTPEmail(email, otp, 'account_verification');

        return res.status(400).json({ message: 'Account not verified. Please verify your account using the OTP sent to your email.' });
    }

    // Token generate
    const token = generateToken(user._id, user.email, user.role);

    res.json({ 
        message: 'Login successful', 
        user: { 
            id: user._id,
            name: user.name, 
            email: user.email, 
            role: user.role,
            token 
        } 
    });
};
exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    const otpRecord = await OTP.findOne({ email, otp, action: 'account_verification' });
    if (!otpRecord) {
        return res.status(400).json({ message: 'Invalid OTP' });
    }
    await OTP.deleteOne({ email, otp, action: 'account_verification' });
    const user = await User.findOneAndUpdate({ email }, { isVerified: true }, { new: true });
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }
    const token = generateToken(user._id, user.email, user.role);
    res.json({ 
        message: 'OTP verified successfully', 
        user: { 
            id: user._id,
            name: user.name, 
            email: user.email, 
            role: user.role,
            token 
        } 
    });
};