const { Schema, model } = require('mongoose');

//At first I was considering having a single schema for all posts as interactions with the the offer type being the response 
// to a request an vice versa, Instead I think it would be better to just have a direct response object that is simpler similar to how we would comment on 
//a post
const responseSchema = new Schema({
    //This field will associate the response to the user who made it
    userId: 
    {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    //This field will associate the response to the post it is responding to
    postId:
    {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "post"

    },
    //This will be the actual comment being made.
    content: {
        type: String,
        required: true,
    },

});

const Response = model('response', responseSchema);

module.exports = Response;
