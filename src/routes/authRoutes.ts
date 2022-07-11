import express from "express";

import {
  loginHandler,
  logoutHandler,
  registerNewUserHandler,
} from "../controllers/authController";
const router = express.Router();

router.post("/register", registerNewUserHandler); //register new user
router.post("/login", loginHandler); //Handle login request
router.post("/logout", logoutHandler); //Logout user

export default router;
