const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//This is the first model and will house all the user information and thier associated posts and responses
const userSchema = new Schema
(
  {
    //A unique user name
    username: 
    {
      type: String,
      required: true,
      unique: true,
    },

    //The user's email validated by the match attribute that checks for email formating
    email: 
    {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },

    //This will store a hashed password associated with the user account
    password: 
    {
      type: String,
      required: true,
    },

    //This field will collect any posts made by the user
    posts:
     [
       {
           type: Schema.Types.ObjectId,
           ref: 'post'
        }
     ],

    //This field will collect any responses made by the corresponding user
    responses:
      [
        {
          type: Schema.Types.ObjectId,
          ref: 'response'
        }
      ]
  },
  
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next)
{
  if (this.isNew || this.isModified('password')) 
    {
       const saltRounds = 10;
       this.password = await bcrypt.hash(this.password, saltRounds);
     }
  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) 
  {return bcrypt.compare(password, this.password)};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual('requestCount').get(function () 
  {return this.savedRequests.length;});

const User = model('user', userSchema);

module.exports = User;
