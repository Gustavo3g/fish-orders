const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Orders = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }

});

mongoose.plugin(mongoosePaginate);

mongoose.model('Orders', Orders)