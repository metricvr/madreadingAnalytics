app.controller('loginController',
	['$scope','$rootScope','$q','$location','analyticsService','facebookHelper',
	function($scope,$rootScope,$q,$location,analyticsService,facebookHelper){
	 		
	$scope.init=function(){
	};

	$scope.loginTeacher=function(){

		facebookHelper.LoginFacebook().then(function(facebookTeacher){
			if(facebookTeacher.id){
			  	$.cookie('username', facebookTeacher.name, { expires: 29,path: '/' }); 
			  	$.cookie('userid', facebookTeacher.id, { expires: 29,path: '/' });      
			   	window.location.href="#/students-list"; 
			}else{
			  	errorNotify("Invalid credentials");
			} 
		},function(error){
			errorNotify("Something went wrong..check credentials");
		});		
	};

}]);
