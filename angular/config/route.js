app.config([
  '$urlRouterProvider',
  '$stateProvider',
  '$httpProvider',    
  function($urlRouterProvider,$stateProvider,$httpProvider){

  $urlRouterProvider.otherwise('/');  

  $stateProvider.state('login',{
    url:'/',
    templateUrl:'angular/views/login.html', 
    controller: 'loginController'                 
  });   

}]);


