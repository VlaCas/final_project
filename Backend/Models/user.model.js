// Import dependencies.
import mongoose from "mongoose"; // Mongoose for interacting with MongoDB.
import validator from "validator"; // Validator for validating inputs.
import bcrypt from "bcrypt"; // Bcrypt for encrypting passwords.

// Define the Schema for users.
const userSchema = new mongoose.Schema({

  // Define the properties of the Schema with their validations.
  name: {
    type: String,
    required: true,
    maxlength: 25,
    unique: false,
    trim: true,
    // Validate that the input contains only letters and spaces.
    match: /^[a-z A-Z]+$/
  },

  email: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 100,
    unique: true,
    validate: { // Validate that the input is a valid email using the Validator module.
      validator: validator.isEmail,
      message: "The email must be in a valid format."
    }
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 60,
    match: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d./$]*$/
  },

  verifiedEmail: {
    type: Boolean,
    required: false,
    default: false
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    required: false,
    default: "user"
  }

}, { 
  versionKey: false,
  timestamps: true
});

// Use a Mongoose middleware to encrypt the password before saving it to the database and to Update the user's update date.
userSchema.pre("save", function(next) {

  // Getting a reference to the current user object.
  const user = this;

  // Update the user's update date.
  user.updatedAt = Date.now();

  // Encrypt the password and replace it in the user object.
  const hashedPassword = bcrypt.hashSync(user.password, 10);
  user.password = hashedPassword;

  next();
});

// Define a method for validating the user's password.
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// Create a Mongoose model from the defined Schema and export it.
export default mongoose.model("User", userSchema);