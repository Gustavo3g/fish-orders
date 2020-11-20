const mongoose = require('mongoose');

const Orders = mongoose.model('Orders')


module.exports = {
  async index(req, res) {
    const { page } = req.query;
    const orders = await Orders.paginate({}, { page, limit: 10 });

    res.json(orders);
  },

  async show(req, res) {
    const orders = await Orders.findById(req.params.id);

    return res.json(orders);

  },

  async store(req, res) {
    const orders = await Orders.create(req.body);

    return res.send(orders);
  },

  async update(req, res) {
    const orders = await Orders.findByIdAndUpdate(req.params.id, req.body, {new: true});

    return res.json(orders);
  },

  async destroy(req, res) {
    const orders = await Orders.findByIdAndRemove(req.params.id);

    return res.json();
  }
};
