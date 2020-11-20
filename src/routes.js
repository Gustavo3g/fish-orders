const express = require('express');
const routes = express.Router();
const OrdersController = require('./controllers/OrdersController')


routes.get('/orders', OrdersController.index)
routes.get('/orders/:id', OrdersController.show)
routes.post('/orders', OrdersController.store)
routes.put('/orders/:id', OrdersController.update)
routes.delete('/orders/:id', OrdersController.destroy)


module.exports = routes;