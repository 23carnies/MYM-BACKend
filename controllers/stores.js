const Store = require('../models/store')

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
  }

  async function create(req, res) {
    req.body.addedBy = req.user._id
    const stores = await store.create(req.body)
    .then(store => {res.json(store)})
    .catch(err => {res.json(err)})
  }

  async function index(req, res) {
    const stores = await store.find({})
    .then(stores => {res.json(stores)})
    .catch(err => {res.json(err)})
  }

  async function show(req,res) {
		const stores = await store.findById(req.params.id)
		.then(store => {res.json(store)})
        .catch(err => {res.json(err)})
	}

    async function update(req, res) {
        const updatedstore = await store.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedstore);
    }

    async function deleteOne(req, res) {
        const deletedstore = await store.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedstore);
    }