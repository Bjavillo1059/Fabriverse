const { Schema, model } = require('mongoose');

//The post model will be a catch all for the two kinds of posts we can make since an both types of models will have 
// there is a field postType that is required and takes in a string that we can use as a label to determine which type of post 
//this will be since many of the values between an offer and a request will be the same essentially.
const postSchema = new Schema({
    //This identifies the user who posted this blog for associating later on
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    //This is the type label that I mentioned before when quering posts we should be able run queries like 
    //db.post.find({postType: 'request}) which should return all the posts that are requests.
    postType:
    {
        type:String,
        required: true,
        enum: ["request", "offer"]
    },
    //The fields that follow should be generic to both kinds of posts for example this description will apply 
    //to both situations where someone is requesting a service or material or posting an offer to sell their service
    description: {
        type: String,
        required: true,
    },
    //The title similarly applies to both kinds of posts as a simple label for what ever is being posted about
    title: {
        type: String,
        required: true,
    },
    //Price as well could be used in both cases but with an offer it refers to what a user is going ot charge for their services
    //while a request specifies how much they are willing to pay
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
});

const Post = model('post', postSchema);

module.exports = Post;
