import express from "express";

import {
  deleteUserHandler,
  updateUserHandler,
  getUserDetails,
} from "../controllers/userController";

const router = express.Router();

//pass uuid params
router.get("/:uuid", getUserDetails);
router.delete("/:uuid", deleteUserHandler);
router.put("/:uuid", updateUserHandler);

export default router;
