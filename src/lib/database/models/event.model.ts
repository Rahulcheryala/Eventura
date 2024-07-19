import { Document, model, models, Schema } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description: string;
  location: string;
  createdAt: Date;
  imageURL: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url: string;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
}

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  startDateTime: {
    type: Date,
    default: Date.now,
    required: true,
  },
  endDateTime: {
    type: String,
    default: Date.now,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  isFree: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    required: false,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Event = models.Event || model("Event", EventSchema);
export default Event;
