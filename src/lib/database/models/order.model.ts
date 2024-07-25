import { Document, model, models, Schema } from "mongoose";

export interface IOrder extends Document {
  createdAt: Date;
  stripeId: string;
  totalAmount: string;
  event: { _id: string; title: string };
  buyer: { _id: string; firstName: string; lastName: string };
}

export type IOrderItem = {
  _id: string;
  totalAmount: string;
  createdAt: Date;
  eventTitle: string;
  eventId: string;
  buyer: string;
};

const OrderSchema = new Schema({
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  totalAmount: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const Order = models.Order || model("Order", OrderSchema);
export default Order;
