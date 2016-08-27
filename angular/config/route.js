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

  $stateProvider.state('studentsList',{
    url:'/students-list',
    templateUrl:'angular/views/studentsList.html', 
    controller: 'studentsListController'                 
  });

  $stateProvider.state('studentsReport',{
    url:'/students-report/:studentId',
    templateUrl:'angular/views/studentsReport.html', 
    controller: 'studentsReportController'                 
  });   

}]);


