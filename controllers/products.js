const Store = require('../models/store')

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne 
  }

function create(req, res) {
  Store.findById(req.user.store, function(err, store) {
    store.products.push(req.body)
    store.save()
      .then(products => {res.json(products)})
      .catch(err => {res.json(err)})
  })
}




  // new comment
  async function index(req, res) {
    const products = await Store.find({})
    .populate('addedBy')
    .then(products => {res.json(products)})
    .catch(err => {res.json(err)})
  }

  async function show(req,res) {
		const products = await Store.findById(req.params.id)
		.then(product => {res.json(product)})
    .catch(err => {res.json(err)})
	}

  function update(req,res){
    Store.findById(req.user.store[0])
    .then((store) => {
      let a = store.products.findIndex(p=> p._id.toString()===req.body._id)
      store.products.splice(a, 1, req.body)
      store.save()
      .then(products => {res.json(products)})
      .catch(err => {res.json(err)})
    })
  }
    
    async function deleteOne(req, res) {
        const deletedProduct = await Product.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedProduct);
    }