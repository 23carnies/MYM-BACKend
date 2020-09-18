const router = require('express').Router();
const productsCtrl = require('../controllers/products');

// Public Routes
router.get('/', productsCtrl.index);
router.post('/', productsCtrl.create)
router.get('/:id', productsCtrl.show)
router.put('/:id', productsCtrl.update);
router.delete('/:id', productsCtrl.delete);
// Protected Routes
router.use(require('../config/auth'));
// router.post('/', checkAuth, productsCtrl.create)
// router.get('/:id', checkAuth, productsCtrl.show)
// router.put('/:id', checkAuth, productsCtrl.update);
// router.delete('/:id', checkAuth, productsCtrl.delete);


function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;



