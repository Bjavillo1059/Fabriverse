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
   // await Response.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < postSeeds.length; i++) 
    {
      const { _id, postAuthor } = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: postAuthor },
        {
          $addToSet: 
          {
            posts: _id,
          } });
        const post = await Post.findOneAndUpdate(
            {_id: _id},
            {userId: user._id});
    }

    for (let i = 0; i < responseSeeds.length; i++)
    {
        const { _id, postTitle, responderName} = await Response.create(responseSeeds[i]);
        const post = await Post.findOneAndUpdate(
          { title: postTitle },
          {postId: _id,});
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
