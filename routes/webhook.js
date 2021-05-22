var express = require('express');
var router = express.Router();
const {handleRequest} = require('../services/requestHandler.service');

/* GET home page. */
router.post('/', function(req, res, next) {
    handleRequest(req.body);
    res.send({})
});

module.exports = router;
