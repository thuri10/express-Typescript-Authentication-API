//Authentication Service
import bcrypt from "bcrypt";
import UserModel from "../models/user";

import { generateAuthToken, generateRefreshToken } from "../utils/authUtils";

export async function LoginService(email: string, password: string) {
  //compare the password and username
  const user = await UserModel.findOne({ email: email });

  if (user) {
    //check if password is valid
    const validPassword = await bcrypt.compareSync(password, user.password);

    if (validPassword) {
      //generate auth token
      const accessToken = await generateAuthToken(user);
      const refreshToken = await generateRefreshToken(user)
      if (accessToken) {
        return {accessToken}  
    
      } else {
        return { message: ` Unable to generate auth token` };
      }
    } else {
      return {
        message: "Password Provided is incorrect",
      };
    }
  } else {
    return { message: `User with ${email} is not registered` };
  }
}

//Implement LoginService
export async function LogoutService() {}
