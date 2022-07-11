import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import "dotenv/config";

export const SECRET_KEY: Secret = process.env.SECRET_KEY as string;

export async function tokenVerification(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized access",
      });
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(404).json({ message: err });
      } else {
        next();
      }
    });
  } catch (err) {
    res.status(401).send(`User Not Authenticated`);
  }
}
