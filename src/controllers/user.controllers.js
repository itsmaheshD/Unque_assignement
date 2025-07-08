import User from '../models/user.models.js';
//import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  if(!name||!email||!password||!role){
    return res.status(400).json({message:"All required"});
  }
  try {
    const user = await User.create({ name, email, password, role });
    return  res.status(201).json({ id: user._id, name: user.name, role: user.role });
  } catch {
   return  res.status(400).json({ message: 'Useready exists' });
  }
};
