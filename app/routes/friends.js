var express = require('express');
var router = express.Router();
var promise = require('bluebird')

 var options = {
     promiseLib : promise
 }

 var pgp = require('pg-promise')(options)
 var connectionString = 'postgres://localhost:5432/FriendsList'
 var db = pgp(connectionString)
 var bodyParser = require('body-parser')
/* GET users listing. */
router.get('/', function(req, res, next) {
    db.any('SELECT * FROM friends').then(function(data){
        res.json(data)
    })
  
});
module.exports = router;