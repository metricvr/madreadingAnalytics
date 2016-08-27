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

  $stateProvider.state('studentsReport',{
    url:'/students-report',
    templateUrl:'angular/views/studentsReport.html', 
    controller: 'studentsReportController'                 
  });   

}]);


