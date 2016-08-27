app.factory('analyticsService', ['$q','$http',function ($q,$http) {

    var global = {};  

    global.getStudentsInfoByEmail = function(email){
      var q=$q.defer();

      
      q.resolve(email);          
    

      return  q.promise;
    };   

    return global;

}]);
