import jwt from "jsonwebtoken";
import "dotenv/config";
import { Types } from "mongoose";
import { User } from "../models/user";

export async function generateAuthToken(user: User & { _id: Types.ObjectId }) {
  return jwt.sign(
    { firstName: user.firstName, lastName: user.lastName, email: user.email },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "5m",
    }
  );
}

//implement Refresh Token for API later
export async function generateRefreshToken(user: User & { _id: Types.ObjectId }) {
  return jwt.sign(
    { firstName: user.firstName, lastName: user.lastName, email: user.email },
    process.env.SECRET_KEY as string,
    { 
      expiresIn: "1y",
    }
  );
}
