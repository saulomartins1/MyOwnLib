import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Connected to DB");
    } catch (error: any) {
        throw new Error("Connection to DB fail", error.message);
    }
}

export default connectDB;