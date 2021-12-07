const { Schema, model } = require('mongoose');

//This model will house the responses made to specific posts by specific users and as such will
//be associated to the respective models through the user, and post fields.
const responseSchema = new Schema
({
    //This field will associate the response to the user who made it
    user: 
    {
        type: Schema.Types.ObjectId,
        ref: "user"
    },

    //This field will be given the userName on creation to help find the associated user
    responderName:
    {
        type: String,
        required: true,
        trim: true
    },

    //This field will associate the response to the post it is responding to
    post:
    {
        type: Schema.Types.ObjectId,
        ref: "post"
    },

    //This field will be given the title/ label on creation to help find the associated post
    postTitle:
    {
        type: String,
        required: true,
        trim: true
    },

    //This will be the actual comment being made.
    content: {
        type: String,
        required: true,
    },
});

const Response = model('response', responseSchema);

module.exports = Response;
