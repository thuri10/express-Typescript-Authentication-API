import { Request, Response } from "express";
import { LoginService } from "../services/authService";
import { registerUser } from "../services/userService";
//login with email and password
export async function loginHandler(req: Request, res: Response) {
  try {
    const messageResponse = await LoginService(
      req.body.email,
      req.body.password
    );
    req.headers.authorization = messageResponse.accessToken;
    return res.json(messageResponse);
  } catch (err) {
    console.log(err);
  }
}

export async function logoutHandler(req: Request, res: Response) {}

// register New user account
export async function registerNewUserHandler(req: Request, res: Response) {
  try {
    const messageResponse = await registerUser(req.body);
    return res.json(messageResponse);
  } catch (err) {
    console.error(err);
  }
}
