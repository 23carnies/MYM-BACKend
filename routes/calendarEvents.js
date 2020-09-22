const router = require('express').Router();
const calendarEventsCtrl = require('../controllers/calendarEvents');

// Public Routes
router.get('/', calendarEventsCtrl.index);
// Protected Routes
router.use(require('../config/auth'));
router.post('/', checkAuth, calendarEventsCtrl.create)
// router.get('/:id', checkAuth, calendarEventsCtrl.show)



function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
