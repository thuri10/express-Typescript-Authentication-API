import mongoose from "mongoose";

export interface Ticket extends mongoose.Document {
  title: string;
  description: string;
  assigned: String;
  time: string;
  type: string;
  status: string;
  priority: string;
  user: String;
}

const ticketSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    assigned: {
        type: Array<string>,
        required: true,        
    },
    time: {
        type: String,
    },
    status: {
        type: String,
        default: 'open',
    },
    priority: {
        type: String,
        required: true,
        Enum: ['High', 'Low', 'Medium'],
    },
    user : {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
    },    
},
 {timestamps: true}
 );

const TicketModel = mongoose.model<Ticket>('Ticket', ticketSchema);

export default TicketModel;
