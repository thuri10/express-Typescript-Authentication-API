import express from "express";
import {
  createNewTicketHandler,
  deleteTicketHandler,
  updateTicketHandler,
  getTicketHandler,
} from "../controllers/ticketController";

const router = express.Router();

router.get("/:uuid", getTicketHandler); //get a single ticket
router.delete("/:uuid", deleteTicketHandler); //delete a single ticket
router.put("/:uuid", updateTicketHandler); // update a single ticket

router.post("/", createNewTicketHandler); // create a new ticket

export default router;
