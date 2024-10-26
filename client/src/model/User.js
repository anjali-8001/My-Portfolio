import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    ipAddress: {
      type: String,
      required: true,
    },
    visits: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
