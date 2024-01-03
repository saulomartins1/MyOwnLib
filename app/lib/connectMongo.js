import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Database");
    } catch (error) {
        throw new Error("Connection to mongoose fail", error.message);
    }
}

export default connectDB;