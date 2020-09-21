const Calendar = require('../models/calendar')

module.exports = {
    create
}

function create(req, res) {
    req.body.addedBy = req.user._id
   Calendar.create(req.body)
        .then(calendar => { res.json(calendar) })
        .catch(err => { res.json(err) })
}

