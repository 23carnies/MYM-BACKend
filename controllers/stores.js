const Store = require('../models/store')
const user = require('../models/user')
const User = require('../models/user')

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
  }

  async function create(req, res) {
    const store = await Store.create(req.body)
    req.user.store.push(store.id)
    req.user.save()
    .then(() => res.status(200))
    .catch(err => {res.json(err)}) 
  }

  
  // async function create(req, res) {
  //   const store = await Store.create(req.body)
  //   .then(store => res.json(store))
  //   User.findById(req.user.id, function(err,user) {
  //     user.store.push(store._id)
  //   })
  // }

  // async function create(req, res) {
  //   const store = await Store.create(req.body)
  //   req.user.store.push(store.id)
  //   await res.json(store)
  //   .catch(err => {res.json(err)}) 
  // }
  // async function create(req, res) {
  //   const store = await Store.create(req.body)
  //   .then(store => {res.json(store)
  //   .then( User.findByIdAndUpdate(req.user.id, user.store.push(store.id), {new: true}))
  //   console.log('user', req.user.id, 'store', store.id)
  // })
  //   .catch(err => {res.json(err)})
  // }

  async function index(req, res) {
    const stores = await Store.find({})
    .then(stores => {res.json(stores)})
    .catch(err => {res.json(err)})
  }

  async function show(req,res) {
		const stores = await Store.findById(req.params.id)
		.then(store => {res.json(store)})
        .catch(err => {res.json(err)})
	}

    async function update(req, res) {
        const updatedstore = await Store.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedstore);
    }

    async function deleteOne(req, res) {
        const deletedstore = await Store.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedstore);
    }