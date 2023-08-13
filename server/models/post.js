const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
    {
        name: { type: String },
        story: { type: String, required: true }
    }
)

const post = mongoose.model("post", postSchema);
module.exports = post;
