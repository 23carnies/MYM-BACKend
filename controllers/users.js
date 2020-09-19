const User = require("../models/user");
const Store = require("../models/store")

module.exports = {
  index,
  updateStoreToUser
};

function index(req, res) {
  User.find({}).then((users) => res.json(users));
}

async function updateStoreToUser(req, res) {
  const userWithStore = await User.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(() => {
    console.log('backend', user)
    res.status(200).json(userWithStore)
  })
}

// async function updateStoreToUser(req, res) {
//   const userWithStore = await User.findById(req.user._id)
//   .then((user) => {
//     user.store.push(Store._id)
//     user.save().then(() => {
//       res.status(200).json(userWithStore)
//     })
//   })
// } 
