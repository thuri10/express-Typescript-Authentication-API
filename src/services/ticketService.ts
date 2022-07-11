import TicketModel, { Ticket } from "../models/ticket";
import { DocumentDefinition } from "mongoose";

export async function ticketCreate(input: DocumentDefinition<Ticket>) {
    console.log(input);
  try {
    const newTicket = new TicketModel({
      title: input.title,
      description: input.description,
      assigned: input.assigned,
      time: input.time,
      status: input.status,
      priority: input.priority,
    });

    await newTicket.save();
    return { message: `Ticket ${newTicket.title} created successfully` };
  } catch (err) {
    return { message: "Unable to create a new ticket" };
  }
}

//Delete a single ticket using id
export async function ticketDelete(ticketId: string) {
  try {
    await TicketModel.findOneAndDelete({ _id: ticketId });
    return { Message: `Ticket deleted successfully` };
  } catch (err) {
    return { Message: `Unable to delete the ticket` };
  }
}

//update a single ticket
export async function ticketUpdate(ticketId: string) {}
{
}

//gets a single ticket using id
export async function ticketRetrieve(ticketId: string) {
  try {
    const ticket = await TicketModel.findOne({ _id: ticketId });

    return ticket;
  } catch (err) {
    return { message: `Unable to get ticket with id ${ticketId}` };
  }
}
