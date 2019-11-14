const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        max: 255
    },
    user_name: {
        type: String,
        required: true,
        max: 255
    },
    user_id: {
        type: Number,
        required: true
    },
    repo_name: {
        type: String
    },
    repo_id: {
        type: Number
    }
});

module.exports = mongoose.model("Bookmark", bookmarkSchema);