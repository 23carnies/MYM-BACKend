const router = require('express').Router();
const productsCtrl = require('../controllers/products');

// Public Routes

// Protected Routes
router.use(require('../config/auth'));
router.get('/', checkAuth, productsCtrl.index);
router.post('/', checkAuth, productsCtrl.create)
router.get('/:id', checkAuth, productsCtrl.show)
router.put('/:id', checkAuth, productsCtrl.update);
router.delete('/:id', checkAuth, productsCtrl.delete);


function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;