const User = require('../models/user')

module.exports = {
    create
}

function create(req, res) {
    User.findById(req.params.id)
    .then((user) => {
        user.reviews.push(req.body)
        user.save()
        .then( () => {
            res.redirect(`/products`)
        })
    })
}

//check req.params.id with user situation later