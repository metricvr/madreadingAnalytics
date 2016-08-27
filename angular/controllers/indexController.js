app.controller('indexController',	['$scope','$rootScope','$q','$location',function($scope,$rootScope,$q,$location){

	//Check Router
    $scope.$watch(function(scope) {
      return $location.path();
    },function(newPath,oldPath) {                   
    });	 		
		
}]);
