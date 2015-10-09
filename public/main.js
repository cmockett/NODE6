angular.module("myApp", [])

angular.module("myApp").controller("myController", ["$scope", "$http", "$sce", function($scope, $http, $sce){


$scope.$sce = $sce
$scope.allVideos = []

	$scope.submitVideo = function(){
		$http.post('/submitvideo', $scope.newVideo)
			.then(function(returnData){
				$scope.allVideos = returnData.data
				console.log(returnData.data)
				if($scope.allVideos.length>8){
			alert("No More Submissions Allowed")
			}
			})
	}
	$http.get('/getvideos')
		.then(function(returnData){
			$scope.allVideos = returnData.data
			console.log($scope.allVideos)
		})
	// $scope.clickVote = function(){
		
	// }

} ])