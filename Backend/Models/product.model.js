// Import dependencies.
import mongoose from "mongoose"; // Mongoose for interacting with MongoDB.

// Define the Schema for products.
const productSchema = new mongoose.Schema({

  // Define the properties of the Schema with their validations.
  name: {
    type: String,
    required: true,
    maxlength: 25,
    unique: false,
    trim: true,
    // Validate that the input contains only letters and spaces.
    match: /^[a-zA-Z0-9\-\/ ]+$/
  },

  type: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true,
    maxlength: 100
  },

  price: {
    type: Number,
    required: true
  }

}, { 
  versionKey: false,
  timestamps: true
});

// Create a Mongoose model from the defined Schema and export it.
export default mongoose.model("Product", productSchema);