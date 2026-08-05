 const user = require('../models/user');

 exports.registerUser = async (req, res) => {
    
   const { name, email, password } = req.body;  

   const userExits = await user.findOne({ email });

   if (userExits) {
     return res.status(400).json({ message: 'User already exists' });
   }

   const salt = await bcrypt.genSalt(10);

   const hashedPassword = await bcrypt.hash(password, salt);

   try {
     const user = new user({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
   } catch (error) {
     res.status(400).json({ message: 'Server error', error: error.message });
   }
 };