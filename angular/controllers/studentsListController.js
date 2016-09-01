app.controller('studentsListController',
	['$scope','$rootScope','$q','$location','analyticsService',
	function($scope,$rootScope,$q,$location,analyticsService){
	 		
	$scope.init=function(){
	};

	$scope.logout=function(){
		window.location.href="#/"; 
	};

}]);
