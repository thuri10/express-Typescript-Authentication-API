import UserModel, { User } from "../models/user";
import { DocumentDefinition, FilterQuery } from "mongoose";
import bcrypt from "bcrypt";
import "dotenv/config";

export async function registerUser(input: DocumentDefinition<User>) {
  //check if email already registered
  return await UserModel.findOne({ email: input.email }).then(async (user) => {
    if (user) {
      return { message: "Email already registered" };
    } else {
      const salt = await bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(input.password, salt);

      const newUser = new UserModel({
        firstName: input.firstName,
        lastName: input.lastName,
        username: input.username,
        email: input.email,
        role: input.role,
        password: hashPassword,
      });

      await newUser.save();
      return { message: `${input.username} Successfully Registered` };
    }
  });
}

//get user using id
export async function getUser(UserId: string) {
  try {
    const user = await UserModel.findOne({ _id: UserId });
    return user;
  } catch (err) {
    return `Unable to find user with specified ${UserId}`;
  }
}

//delete an user using id
export async function deleteUser(UserId: string) {
  try {
    await UserModel.findOneAndDelete({ _id: UserId });

    return { message: "User deleted successfully" };
  } catch (err) {
    return { message: `Unable to delete user with specified ${UserId}` };
  }
}

export async function updateUser(UserId: string) {
  try {
    const user = await UserModel.findOneAndUpdate({ _id: UserId });

    console.log(user);
    
  } catch (err) {
    console.log(err);
  }
}
