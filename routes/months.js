var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var monthsAvailable = ["October 2016", "November 2016", "December 2016", "January 2017", "February 2017", "March 2017",
															"April 2017", "May 2017", "June 2017", "July 2017", "August 2017", "October 2017"];

			res.json(monthsAvailable);
});

module.exports = router;