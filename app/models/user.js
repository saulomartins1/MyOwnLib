import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: false,
            min: 8,
        },
        books: [Number],
    }, { timestamp: true }
);

export default mongoose.models.User || mongoose.model('User', userSchema);