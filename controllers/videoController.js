var videoModel = require('../models/videos.js');
//^^^requiring whats being exported in videos.js

module.exports = {
	submitVideo : function(req, res){
		var video = new videoModel.Video(req.body)
		console.log(videoModel.allVideos)
		res.send(videoModel.allVideos)
		// if(allVideos.length=8){
		// 	alert("No More Submissions Allowed")
		
	},

	getVideos : function(req, res){
		res.send(videoModel.allVideos)
	},
	vote : function(req, res){
		var votes = 
		votes++
		//increment vote value in server side data array
	}
}

//^^^ getting 'require'd by routes/index.js and run as functions
// as videoController.'function' in the routes