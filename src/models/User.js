import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  role:{
    type:String,
    default:"USER",
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});
const User = models.User || model("User", userSchema);
export default User;
