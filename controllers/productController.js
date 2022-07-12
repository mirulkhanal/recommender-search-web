const Product = require('../models/Product');

module.exports = {
  getAll: async (req, res) => {
    try {
      const queryString = req.query.search;
      const limit = req.query.limit || 0;
      const skip = req.query.skip || 0;
      let filterQuery;
      let projectionQuery;
      if (queryString) {
        filterQuery = {
          $text: { $search: queryString },
        };
        projectionQuery = { score: { $meta: 'textScore' } };
      } else {
        filterQuery = {};
        projectionQuery = {};
      }

      const filteredProducts = await Product.find(filterQuery, projectionQuery)
        .limit(limit)
        .skip(skip);
      res.status(200).send({
        count: filteredProducts.length,
        products: filteredProducts,
      });
    } catch (error) {
      console.log(error);
    }
  },

  create: (req, res) => {
    const product = new Product(req.body);
    product
      .save()
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).send(product);
    } catch (error) {
      console.log(error);
    }
  },

  deleteById: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);

      res.status(200).send({
        message: 'Product deleted successfully',
      });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send(product);
    } catch (error) {
      console.log(error);
    }
  },
};
