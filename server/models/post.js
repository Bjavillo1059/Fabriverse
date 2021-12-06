const { Schema, model } = require('mongoose');

//This model will be used for all posts that can be made by users and will be associated to that model
//via  the user field and be associated to the response model through the responses field.
const postSchema = new Schema
({
    //Associates the post to it's user
    user: 
        {
            type: Schema.Types.ObjectId,
            ref: "user"
        },

    //This will be the userName of the author
    postAuthor:
        {
            type: String,
            required: true,
            trim: true
        },

    //This will help sort all the posts made between two types
    postType:
        {
            type:String,
            required: true,
            enum: ["request", "offer"]
        },

    //This is the description or main content of the post
    description: 
        {
            type: String,
            required: true,
        },

    //The title will be the label for the post once created
    title: 
        {
            type: String,
            required: true,
        },
   
    //This is an optional field for establishing prices or offer pay rates
    price: 
        {
            type: Number,
        },
   
    //This is an optional field for associating location data
    location: 
        {
            type: String,
        },
   
    //This will associate all the responses made for a specific post
    responses:
        [
            { 
                type: Schema.Types.ObjectId,
                ref: 'response'
            }
        ]

});

const Post = model('post', postSchema);

module.exports = Post;
