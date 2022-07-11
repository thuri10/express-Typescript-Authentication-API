import express from "express";

import {
  registerNewUserHandler,
  deleteUserHandler,
  updateUserHandler,
  getUserDetails,
} from "../controllers/userController";

import {LoginHandler} from "../controllers/authController"

const router = express.Router();

router.post("/", registerNewUserHandler);

//pass uuid params to the  functions
router.get("/:uuid", getUserDetails);
router.delete("/:uuid", deleteUserHandler);
router.put("/:uuid", updateUserHandler);

router.post('/login', LoginHandler);


export default router;
