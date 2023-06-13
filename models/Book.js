import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    Author: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    Description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    Published_year: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 4
    },
    Publisher: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
})

const Book = mongoose.model('Book', BookSchema);

export default Book;