import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        min: 3,
    },
    books: [Number],
}, {
    timestamps: true
});

export default mongoose.models?.User || mongoose.model('User', userSchema);