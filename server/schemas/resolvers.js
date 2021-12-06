const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Response } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, contex,) => {
      if (context.user) {
        return await User.findOne({ _id: User._id }).populate("posts");
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    allUsers: async () =>
    {
      return User.find().populate("posts").populate("responses");
    },
    oneUserByName: async (parent, {username}) =>
    {
       return await User.findOne({username}).populate("posts").populate("response");
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

    createNewPost: async (parent, args) =>
    {
      const { _id, postAuthor } = await Post.create(args.input);

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
          return post;
    }
  },
};

module.exports = resolvers;