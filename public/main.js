angular.module("myApp", [])

angular.module("myApp").controller("myController", ["$scope", "$http", function($scope, $http){

	// $http.get('/submitvideo')
	// 	.then(function(returnData){
	// 		$scope.video = returnData.data
	// 	})

	$scope.submitVideo = function(){
		$http.post('/submitvideo', $scope.newVideo)
			.then(function(returnData){
				console.log(returnData.data)
				$scope.video = returnData.data
			})
	}


} ])