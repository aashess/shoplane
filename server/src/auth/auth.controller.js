// src/auth/auth.controller.js
import * as authService from './auth.service.js';

export const register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    if (user.status == 200) {
      res.status(200).json(user.message);
    }
    else 
      res.status(401).json(user.message)

  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const data = await authService.login(req.body);
    if (data.status == 200) {
      res.status(200).json({message: data.message, Token: data.token});
    }
    else {
      res.status(401).json(data.message)
    }
  } catch (err) {
    next(err);
  }
};
