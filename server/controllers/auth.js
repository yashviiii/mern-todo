import User from "../models/user.js";
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    if (!req.body.name) {
      return res.json('username req');
    }
    else if(!req.body.email || !req.body.password) {
        return res.json('email req');
    }
  
    try {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
  
      await newUser.save();
      return res.status(201).json('New User Created');
    } catch (err) {
      return next(err);
    }
  };

  export const login = async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
      return res.json('username req');
    }
  
    try {
      const user = await User.findOne({ email: req.body.email }).select(
        'name email password',
      );
      if (!user) {
        return next(
          createError({ status: 404, message: 'User not found with the email' }),
        );
      }
      if (req.body.password != user.password) {
        return next(
          createError({ status: 400, message: 'Password is incorrect' }),
        );
      }
      const payload = {
        id: user._id,
        name: user.name,
      };
      const token = jwt.sign(payload, 'aabbccdd', {
        expiresIn: '1d',
      });
      return res
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .status(200)
        .json({ name: user.name, email: user.email, message: 'login success' });
    } catch (err) {
      return next(err);
    }
  };