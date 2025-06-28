const User = require('../models/user');

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        res.status(200).json({
            message: 'Login successful',
            data: {
                user,
            },
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(200).json({ message: 'Internal server error' });
    }
};
