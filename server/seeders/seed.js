const db = require('../config/connection');
const { User, Post, Response } = require('../models');
const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeeds.json');
const responseSeeds = require('./responseSeeds.json');

db.once('open', async () => {
  try 
  {
    await User.deleteMany({});
    await Post.deleteMany({});
   await Response.deleteMany({});

   //This first creat simply creates user collection since its' the base of our db since all posts and
   // responses will belong to a user
    await User.create(userSeeds);

    //This for loop will be in charge of both creating every new post in our seeds file and demonstrate how
    //our resolver might go about associating the new post to the corresponding user
    for (let i = 0; i < postSeeds.length; i++) 
    {
        const { _id, postAuthor } = await Post.create(postSeeds[i]);

        let user = await User.findOneAndUpdate
            (
                 {username: postAuthor},
                 {$addToSet: {posts: _id,}}
            );

        let post = await Post.findOneAndUpdate
            (
                {_id: _id},
                {user: user._id}
            );
    }

    //This for loop will be in charge of both creating every new response in the seeds and demonstrate
    // How we will go about associating the new responses to existing posts and users
    for (let i = 0; i < responseSeeds.length; i++)
    {
        const {_id, postTitle, responderName} = await Response.create(responseSeeds[i]);

        let post = await Post.findOneAndUpdate
            (
              {title: postTitle},
              {$addToSet: {responses:_id,}}
            );

        let user = await User.findOneAndUpdate
            (
                {username: responderName},
                {$addToSet: {responses: _id}}
            );

       let response = await Response.findOneAndUpdate
            (
                {_id: _id},
                {
                    post: post._id,
                    user: user._id
                }
            );
    }
}
   catch (err) 
   {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
