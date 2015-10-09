var express = require('express');
var router = express.Router();

/* GET home page. */
var videoController= require('../controllers/videoController.js')
router.get('/', function(req, res, next) {
	res.sendFile("contest.html", {root : "./public"})
  // res.render('index', { title: 'Express' });
});

router.post('/submitvideo', videoController.submitVideo)
router.get('/getvideos', videoController.getVideos)



module.exports = router;
