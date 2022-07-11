import { Request, Response } from "express";
import {
  ticketCreate,
  ticketUpdate,
  ticketDelete,
  ticketRetrieve,
} from "../services/ticketService";

export async function createNewTicketHandler(req: Request, res: Response) {
  try {
    const messageResponse = await ticketCreate(req.body);
    return res.json(messageResponse);
  } catch (err) {
    return { message: err };
  }
}

export async function deleteTicketHandler(req: Request, res: Response) {
  try {
    const messageResponse = await ticketDelete(req.params.uuid);
    return res.json(messageResponse);
  } catch (err) {
    return { message: err };
  }
}

export async function updateTicketHandler(req: Request, res: Response) {
  try {
    const messageResponse = await ticketUpdate(req.params.uuid);
    return res.json(messageResponse);
  } catch (err) {
    console.error(err);
  }
}

export async function getTicketHandler(req: Request, res: Response) {
  try {
    const messageResponse = await ticketRetrieve(req.params.uuid);
    return res.json(messageResponse);
  } catch (err) {
    console.log(err);
  }
}
