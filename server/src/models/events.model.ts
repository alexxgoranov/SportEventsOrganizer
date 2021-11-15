
import mongoose from 'mongoose';
import { UserDocument } from './user.model';

export interface EventDocument extends mongoose.Document {
    user: UserDocument["_id"];
    title: string;
    description: string;
}

const eventSchema = new mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: {type: String, required: true},
    description: {type: String, required: true}

},
{
    timestamps: true,
});

const EventModel = mongoose.model<EventDocument>("Events", eventSchema);

export default EventModel;