import User from '../models/user.models.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Invalid credentials: user not found');
    }
    if (user.password !== password) {
      return res.status(400).send('Invalid credentials: incorrect password');
    }
    res.send(`
      Login successful.<br>
      User ID: ${user._id}<br>
      Name: ${user.name}<br>
      Role: ${user.role}
    `);
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send('Server error');
  }
};
