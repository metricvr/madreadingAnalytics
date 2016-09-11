app.factory('facebookHelper', ['$q','$http',function ($q,$http) {

    var global = {};  

    global.LoginFacebook = function(){

      	var q=$q.defer();

	    _getFacebookDetails().then(function(resp){
	        if(!resp.id){
	            errorNotify("Please authorize app in your facebook by re-login");
	        }
	        if(resp.id){
	            q.resolve(resp); 
	        }            
	    });    

      	return  q.promise;
    };

    global.LogoutFacebook = function(){

        var q=$q.defer();

        FB.logout(function(response) {
           q.resolve(response); 
        });    

        return  q.promise;
    };


    function _getFacebookDetails(){
        var q=$q.defer();

        FB.getLoginStatus(function(response) {            
            if (response.status === 'connected') {           
                FB.api('/me', function(response) {
                  q.resolve(response);
                });            
            }else {               
                FB.login(function(res){
                    FB.api('/me', function(response) {
                      q.resolve(response);
                    });
                });
            }
        });

        return  q.promise;
    } 


    function _getFacebookAuthResponse(){
        _FB.getAuthResponse(function(response){
            q.resolve(response);
        })
    }  

    return global;

}]);



