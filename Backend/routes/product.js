const { createProduct, getProducts, updateProduct, deleteProduct, searchProduct, addMutiples, createCart,getCart} = require('../controllers/productsController');

const router = require('express').Router();

router.post('/', createProduct);
router.post('/multiples', addMutiples);
router.post('/', createCart);
router.get('/', getCart)
router.get('/', getProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/:id', searchProduct);

module.exports = router;