import { getUser, deleteUser, updateUser } from "../services/userService";
import { Request, Response } from "express";

//delete an existing user account
export async function deleteUserHandler(req: Request, res: Response) {
  try {
    const messageResponse = await deleteUser(req.params.uuid);
    return res.json(messageResponse);
  } catch (err) {
    console.error(err);
  }
}

// update existing user details
export async function updateUserHandler(req: Request, res: Response) {
  try {
    const messageResponse = await updateUser(req.params.uuid);
    return res.json(messageResponse);
  } catch (err) {
    console.log(err);
  }
}

//Return user details using uuid
export async function getUserDetails(req: Request, res: Response) {
  try {
    const messageResponse = await getUser(req.params.uuid);
    if (!messageResponse) {
      return res.json({
        message: `User with UserID ${req.params.uuid} does not exist`,
      });
    }
    return res.json(messageResponse);
  } catch (err) {
    console.error(err);
  }
}
