// SERVER-SIDE JAVASCRIPT

var express = require('express');
var database = require('./models');
var app = express();

var products = [
  {
    name: 'Billy Bob Jenkins III',
    address: '1313 Mockingbird Lane',
    hobbies: 'Roadkill Taxidermy',
  }
];


var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({extended: true}));
// serve static files from public folder
  app.use(express.static(__dirname + '/public'));


/**********
 * ROUTES *
 **********/

/*
 * HTML ENDPOINTS
 */
app.get('/', function homepage(req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/views/index.html');
});


// TODO: Make 'api/sanity' endpoint!

/*
 * API ENDPOINTS
 */
/* GET ALL Primary DB Entries */
app.get('/api/primary', function sanity(req, res) {

  database.Primary.find( {}, function getAllPrimaries(err, allPrimaries){
    if (err) { return console.log('ERROR', err); }

    res.json(allPrimaries);
  });
});
// Creating an Order
app.post('/api/orders', function(req,res){
  console.log('creating an order');
  console.log(req.body);
  var data = req.body;
  res.json();
});

// Getting one item
app.get('/api/orders/:orders_id/items/:item_id', function(req, res){
  console.log('getting an item');
  console.log(req.body);
  var data = req.body;
  res.json();
});

// Deleting an item
app.delete('/api/orders/:orders_id/items/:item_id', function(req, res){
  console.log('deleting an item');
  console.log(req.body);
  var data = req.body;
  res.json();
});





/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
