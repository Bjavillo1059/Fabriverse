const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Response } = require('../models');
const { findOneAndUpdate } = require('../models/user');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context,) => {
      if (context.user) {
        let {user} = context;
        return await User.findOne({ _id: user._id }).populate("posts").populate("responses");
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    allUsers: async () =>
    {
      return User.find().populate("posts").populate("responses");
    },
    oneUserByName: async (parent, {username}) =>
    {
       return await User.findOne({username}).populate("posts").populate("responses");
    },
    oneUserById: async(parent, {_id}) =>
    {
      return await User.findOne({_id}).populate("posts").populate("response");
    },
    allPosts: async () =>
    {
      return await Post.find().populate("user").populate("responses");
    },
    allRequestPosts: async () =>
    {
      return await Post.find({postType: "request"});
    },
    allOfferPosts: async () =>
    {
      return await Post.find({postType: "offer"});
    },
    onePostByTitle: async (parent, {title}) =>
    {
      return await Post.findOne({title});
    },
    onePostById: async (parent, {_id}) =>
    {
      return await Post.findOne({_id});
    },
    allResponses: async () =>
    {
      return await Response.find().populate("user").populate("post");
    },
    oneResponse: async (parent, _id) =>
    {
      return await Response.findOne({_id});
    }
  },

  Mutation: {
    addUser: async (parent, {username, email, password}) => 
    {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Add a third argument to the resolver to access data in our `context`
    saveRequest: async (parent, args, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedRequests: args.input },
          },
          {
            new: true,
            runValidators: true,
          }
        );

        return updatedUser;
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a skill from their own profile


    removeRequest: async (parent, { requestId }, context) => {
      if (context.user) {
        const removeRequest = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedRequests: { requestId } } },
          { new: true }
        );

        return removeRequest;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    createNewPost: async (parent, args, context) =>
    {
      if(context.user)
      {
        const {_id, username} = context.user;
        const {postType, description, title} = args.input;
        const newPost = { postAuthor: username, postType: postType, description: description, title: title};
        const post = await Post.create(newPost);
      
        let user = await User.findOneAndUpdate
            (
                 {username: username},
                 {$addToSet: {posts: post._id,}}
            );

        let result = await Post.findOneAndUpdate
            (
                {_id: post. _id},
                {user: _id}
            );
          return result;
        }
      else if(args.input.postAuthor)   
      {
          const post = await Post.create(args.input);
          let user = await User.findOneAndUpdate
          (
               {username: post.postAuthor},
               {$addToSet: {posts: post._id,}}
          );
          let result = await Post.findOneAndUpdate
          (
              {_id: post. _id},
              {user: user._id}
          );
        return result;
      }   
      throw new AuthenticationError('You need to be logged in!');
    },

    updatePost: async (parent, args, context) =>
    {
      const {_id, title, description, postType} = args.input;
      const post = findOneAndUpdate({_id: _id}, {title: title, description: description, postType: postType})
    },

    deletePost: async (parent, {_id}) =>
    {
      const responses = await Response.deleteMany({post: _id});
      const result = await Post.deleteOne({_id});

      return result;
    },

    createNewResponse: async (parent, args) =>
    {
      const {_id, postTitle, responderName} = await Response.create(args.input);

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
        return response;
    },

    deleteResponse: async (parent, {_id}) =>
    {
      const result = await Response.deleteOne({_id});
      return result;
    }

  },
};

module.exports = resolvers;