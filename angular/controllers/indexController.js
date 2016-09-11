app.controller('indexController',
    ['$scope','$rootScope','$q','$location','facebookHelper',
    function($scope,$rootScope,$q,$location,facebookHelper){

	$rootScope.teacherName=$.cookie('username');
	$rootScope.logout=function(){
        facebookHelper.LogoutFacebook().then(function(){
            $.removeCookie('username', { path: '/' });
            $.removeCookie('userid', { path: '/' });
            window.location.href="/";
        });        
	};
	
	//Check Router
    $scope.$watch(function(scope) {
      return $location.path();
    },function(newPath,oldPath) {
    	if(newPath!="/" && newPath!=""){
    		var isLogged=false;

    		//Check Cookie 
    		if(!$.cookie('username') || $.cookie('username')=="null" || $.cookie('username')=="undefined"){
    			isLogged=false;
    		}else if($.cookie('username')){
    			isLogged=true;
    		}

    		//Check Path
    		if(!isLogged){          
	         	window.location.href="/";
	        }else if(isLogged){	
	        	window.location.href="#/students-list";          
	        }
    	}
                   
    });	 		
		
}]);
