const Product = require('../../models/product')

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
  }

  async function create(req, res) {
    req.body.addedBy = req.user._id
    const products = await Product.create(req.body)
    .then(product => {res.json(product)})
    .catch(err => {res.json(err)})
  }

  async function index(req, res) {
    const products = await Product.find({})
    .populate('addedBy')
    .then(products => {res.json(products)})
    .catch(err => {res.json(err)})
  }

  async function show(req,res) {
		const products = await Product.findById(req.params.id)
		.then(product => {res.json(product)})
    .catch(err => {res.json(err)})
	}

    async function update(req, res) {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedProduct);
    }

    async function deleteOne(req, res) {
        const deletedProduct = await Product.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedProduct);
    }