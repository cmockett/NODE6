var express = require('express');
var router = express.Router();

/* GET home page. */
var videoController= require('../controllers/videoController.js')
router.get('/', function(req, res, next) {
	res.sendFile("contest.html", {root : "./public"})
  // res.render('index', { title: 'Express' });
});

router.post('/submitvideo', videoController.submitVideo)
//calls the submitVideo function inside videoController, ditto with getVideos on next line!!
router.get('/getvideos', videoController.getVideos)
router.get('/submissions', function(req, res){
	res.sendFile('submissions.html', {root : './public'})
})
router.post('/vote', videoController.vote)



module.exports = router;
