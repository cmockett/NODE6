var allVideos = [];

var Video = function(videoData){

	this.name = videoData.name;
	this.URL = videoData.URL;
	this.title = videoData.title;
	this.description = videoData.description;
	this.vote = videoData.vote;
	allVideos.push(this)
}

module.exports = {

	allVideos : allVideos,
	Video : Video
}
// ^^getting 'require'd by videoController.js and stored as var videoModel