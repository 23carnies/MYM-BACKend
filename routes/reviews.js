const router = require('express').Router()
const reviewsCtrl = require('../controllers/reviews')


router.use(require('../config/auth'));
router.post('/users/:id/reviews', checkAuth, reviewsCtrl.create )

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

  module.exports = router