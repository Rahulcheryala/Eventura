import { Schema, model, models } from "mongoose";

const TestUserSchema = new Schema({
  clerkId: {
    type: String,
    // required: true,
    unique: true,
  },
  email: {
    type: String,
    // required: true,
    // unique: true
  },
  username: {
    type: String,
    // required: true,
  },
  photo: {
    type: String,
    // required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const TestUser = models?.TestUser || model("TestUser", TestUserSchema);
export default TestUser;
