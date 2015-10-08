var allVideos = [];

var Video = function(videoData){

	this.name = videoData.name;
	this.URL = videoData.URL;
	this.title = videoData.title;
	this.description = videoData.description;
	allVideos.push(this)
}

module.exports = {

	allVideos : allVideos,
	Video : Video
}