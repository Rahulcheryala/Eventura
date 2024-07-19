import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cachedDb = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cachedDb.conn) {
    console.log("Using existing database connection");
    return cachedDb.conn;
  }

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  cachedDb.promise =
    cachedDb.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cachedDb.conn = await cachedDb.promise;
  console.log("Connected to database");
  return cachedDb.conn;
};
