import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  console.log(process.env.MONGODB_URI);
  if (connection?.isConnected) {
    console.log("Already connected to database.");
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {});
    connection.isConnected = db.connections[0].readyState;
    console.log("DB Connected successfully.");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

export default dbConnect;
