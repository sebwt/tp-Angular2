var _ = require('underscore');
var express = require('express');
var http = require('http');
var uuid = require('node-uuid');
var cors = require('./cors');
var app = express();
var server = http.createServer(app);

var conf = require('./server.json');

var products = require(conf.products);
var basket = [];

var sessions = {};

var context = '/rest';
var authHeader = 'Auth-Token';

app.use(express.bodyParser());
app.use(cors);

app.get(context + '/products', function (req, res) {
  res.send(products);
});

var createHandler = function(req, res) {
  basket.push(req.body);
  products = products.map(product => {
    if(product.title.toUpperCase() === req.body.title.toUpperCase()){
      product.stock--;
    }
    return product;
  })
  res.send(201, req.body);
}

app.post(context + '/basket', createHandler);

app.post(context + '/basket/confirm', (req, res)=> {
  basket = [];
  res.send(200);
});

app.get(context + '/basket', function (req, res) {
  res.send(basket);
});

server.listen(conf.port);
console.log('Express server listening on port', server.address().port);
