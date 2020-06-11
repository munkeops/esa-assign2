var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/model/productModel'), //created model loading here

  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;


const string1="mongodb+srv://rohan9025:Susan@9025@cluster0-amyhz.mongodb.net/test?retryWrites=true&w=majority "// add your database string here
mongoose.connect(string1,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify:false}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var productRoutes = require('./api/routes/productRoutes'); //importing route


productRoutes(app); //register the route




app.listen(port);


console.log('Product RESTful API server started on: ' + port);
