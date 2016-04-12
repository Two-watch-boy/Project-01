// SERVER-SIDE JAVASCRIPT

var express = require('express'),
    bodyParser = require("body-parser"),
    db = require('./models'),
    app = express();

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

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

// app.get('/elephant', function homepage(req, res) {
//   console.log(__dirname);
//   res.sendFile(__dirname + '/views/elephant.html');
// });

// TODO: Make 'api/sanity' endpoint!

/*
 * API ENDPOINTS
 */
/* GET ALL Bag DB Entries */
app.get('/api/bag', function sanity(req, res) {

  db.Bag.find( {}, function getAllBags(err, allBags){
    if (err) { return console.log('ERROR', err); }

    res.json(allBags);
  });

});

app.post('/api/bag', function(req, res){
  console.log("BODY STUFF:::::::::::::::::::::::", req.body);

  db.Bag.create(req.body, function(err, bag) {
    if (err) { console.log('error', err); }
    console.log(bag);
    res.json(bag);
  });
});

app.post('/api/bag/contents', function(req, res){
  console.log("CONTENTS STUFF::::::::::::::::::::", req.body);

  db.Item.create(req.body, function(err, item) {
    console.log(item);
    res.json(item);
  });
});


app.delete('/api/bag/:id', function (req, res) {
    // get todo id from url params (`req.params`)
    var bagId = req.params.id;

    // find todo in db by id and remove
    db.Bag.findOneAndRemove({ _id: bagId }, function (err, deletedBag) {
      res.json(deletedBag);
    });
  });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
