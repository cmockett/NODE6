var videoModel = require('../models/videos.js');

module.exports = {
	submitVideo : function(req, res){
		var video = new videoModel.Video(req.body)
		// console.log(videoModel.allVideos)
		res.send(videoModel.allVideos)
	},

	getVideos : function(req, res){
		res.send(videoModel.allVideos)
	}
}