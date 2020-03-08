var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  User = require('./api/model/userModel'), //created model loading here
  Product = require('./api/model/productModel'), //created model loading here
  CartItem = require('./api/model/cartModel'), //created model loading here

  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
const string1='mongodb+srv://rohan9025:Susan@9025@cluster0-amyhz.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(string1,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex: true}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var productRoutes = require('./api/routes/productRoutes'); //importing route
var cartRoutes = require('./api/routes/cartRoutes'); //importing route
var userRoutes = require('./api/routes/userRoutes'); //importing route


productRoutes(app); //register the route
cartRoutes(app); //register the route
userRoutes(app); //register the route




app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
