app.controller('loginController',
	['$scope','$rootScope','$q','$location','analyticsService',
	function($scope,$rootScope,$q,$location,analyticsService){

	$scope.login={
		email:null
	};	
		 		
	$scope.init=function(){
	};

	$scope.loginTeacher=function(){

		analyticsService.getStudentsInfoByEmail($scope.login.email).then(function(email){
			if($scope.login.email==email){
			  	//$.cookie('username', $scope.login.username, { expires: 29,path: '/' });      
			   	window.location.href="#/students-report"; 
			}else{
			  	errorNotify("Invalid credentials");
			} 
		},function(error){
			errorNotify("Something went wrong..check credentials");
		});		
	};

}]);
