import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    pagesRead: { type: Number, default: 1 }
});

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
    books: [bookSchema],
}, {
    timestamps: true
});

export default mongoose.models?.User || mongoose.model('User', userSchema);