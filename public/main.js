angular.module("myApp", [])

angular.module("myApp").controller("myController", ["$scope", "$http", "$sce", function($scope, $http, $sce){

	// $http.get('/submitvideo')
	// 	.then(function(returnData){
	// 		$scope.video = returnData.data
	// 	})

$scope.$sce = $sce
$scope.allVideos = []

	$scope.submitVideo = function(){
		$http.post('/submitvideo', $scope.newVideo)
			.then(function(returnData){
				$scope.allVideos = returnData.data
				console.log(returnData.data)

			})
	}


} ])