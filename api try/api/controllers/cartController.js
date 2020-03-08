'use strict';


var mongoose = require('mongoose'),

CartItem = mongoose.model('Cart');



exports.list_all_cartitems = function(req, res) {
    CartItem.find({}, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };
  
  
  
  
  exports.create_a_cartitem = function(req, res) {
    var new_product = new CartItem(req.body);
    new_product.save(function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };

  
exports.read_a_cartitem = function(req, res) {
    Product.findById(req.params.productId, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };
  
  
  exports.update_a_cartitem = function(req, res) {
    Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };
  
  
  exports.delete_a_cartitem = function(req, res) {
  
  
    Product.remove({
      _id: req.params.productId
    }, function(err, product) {
      if (err)
        res.send(err);
      res.json({ message: 'Product successfully deleted' });
    });
  };
  