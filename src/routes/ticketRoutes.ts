import express from "express";
import {
  createNewTicketHandler,
  deleteTicketHandler,
  updateTicketHandler,
  getTicketHandler,
} from "../controllers/ticketController";

const router = express.Router();

router.post("/", createNewTicketHandler); // create a new ticket
router.get("/:uuid", getTicketHandler); //get a single ticket
router.delete("/:uuid", deleteTicketHandler); //delete a single ticket
router.put("/:uuid", updateTicketHandler); // update a single ticket

export default router;
