var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  //Task = require('./api/model/apitryModel'), //created model loading here
  Product = require('./api/model/productModel'), //created model loading here
  CartItem = require('./api/model/cartModel'), //created model loading here

  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
const string1='mongodb+srv://rohan9025:Susan@9025@cluster0-amyhz.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(string1,{useNewUrlParser:true,useUnifiedTopology: true}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/productRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
