const express = require('express');
const mongoose = require('mongoose')


const app = express();
app.use(express.json());


//connection
mongoose.connect('mongodb://localhost:27017/fishOrders', () => {
  console.log('Connected successfully');
})
require('./src/models/Orders')

const Orders = mongoose.model('Orders');

// app.use('/api', require('./src/routes'))
app.use('/api', require('./src/routes'))


app.listen(3000, (req, res) => {
  console.log(`Servidor rodando na porta 3000`)
})