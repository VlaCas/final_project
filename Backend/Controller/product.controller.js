import Product from '../Models/product.model.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) return res.status(404).send('No products found.');

    res.status(200).send({ message: 'Products obtained successfully!!', products: products })
  } catch (error) {
    console.error('Error getting the products.', error);
    res.status(500).send('Error getting the products.');
  }
};

export const getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) return res.status(404).send('ID not found.');

    const product = await Product.findById(productId);
    if (!product) return res.status(404).send('Product not found.');

    res.status(200).send({ message: 'Product obtained successfully!!', product: product })
  } catch (error) {
    console.error('Error getting the product.', error);
    res.status(500).send('Error getting the product.');
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, type, description, price } = req.body;

    const newProduct = new Product({
      name,
      type,
      description,
      price
    });

    const savedProduct = await newProduct.save();

    res.status(200).send({ message: 'Product created successfully!!', newProduct: savedProduct })
  } catch (error) {
    console.error('Error creating the product.', error);
    res.status(500).send('Error creating the product.');
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) return res.status(404).send('ID not found.');

    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) return res.status(404).send('Product not found.');

    res.status(200).send({ message: 'Product deleted successfully!!', deletedProduct: deletedProduct })
  } catch (error) {
    console.error('Error deleting the product.', error);
    res.status(500).send('Error deleting the product.');
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) return res.status(404).send('ID not found.');

    const updatedData = req.body;
    if (!updatedData) return res.status(404).send('Data not found.');

    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });
    if (!updatedProduct) return res.status(404).send('Product not found.');

    res.status(200).send({ message: 'Product updated successfully!!', updatedProduct: updatedProduct })
  } catch (error) {
    console.error('Error updating the product.', error);
    res.status(500).send('Error updating the product.');
  }
};