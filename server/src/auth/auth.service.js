// src/auth/auth.service.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const register = async ({ name, email, password, role }) => {
  try {
    const EmailFind = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (EmailFind) return {message: "Email already registered"}

    const hashedPassword = bcrypt.hashSync(password, 10);

    const result = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: name,
        role: role === "ADMIN" ? "ADMIN" : "CUSTOMER"
      },
    });
    return {status: 200, message: "User Created!!"}
  } catch (error) {
    console.error("Error Occured", error);
    return {message: "User not crated!!"}
  }
};


//------------------------ login endpoint -----------------------------
export const login = async ({ email, password }) => {
  let userFind;
  try {
    userFind = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!userFind) {
      return {message: "User Not Found!!"}
    }
    const isPasswordValid = await bcrypt.compare(password, userFind.password);

    if (!isPasswordValid) {
      return {message: "Unsuccessful Login! Incorrect Password"}
    }

    // JWT Token

    const token = jwt.sign(
      { userId: userFind.id, email: userFind.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return {
      message: "Successful Login! CONGRATULATIONS.",
      token: token,
      status: 200,
    };
  } catch (error) {
    console.error("Error during login.", error);

    return "Login Failed Dur to Server";
  }
};
