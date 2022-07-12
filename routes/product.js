const express = require('express');
const router = express.Router();
const {
  getAll,
  create,
  getById,
  deleteById,
  update,
} = require('../controllers/productController');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.delete('/:id', deleteById);
router.put('/:id', update);

module.exports = router;
