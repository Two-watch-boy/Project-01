// SERVER-SIDE JAVASCRIPT

var express = require('express'),
    database = require('./models'),
    app = express();


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

app.get('/elephant', function homepage(req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/views/elephant.html');
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






/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
