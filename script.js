var app = angular.module('App', ['ngRoute']);
app.run(function($rootScope){
  $rootScope.subjectList=[];
  $rootScope.emailList=[];
  $rootScope.nameList=[];
  $rootScope.textList=[];
});
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  //form= le nom donné à la ref de l ancre
  .when('/form', {
    templateUrl: 'partials/formulaire.html',
    controller: 'formcontrol'
  })
  //cible= le nom donné à la ref de l ancre
  .when('/cible/:id?', {
    templateUrl: 'partials/cible.html',
    controller: 'ciblectrl'
  })
    .otherwise({
      redirectTo: '/form'
    })
}]);
app.controller('formcontrol', function($scope, $rootScope){
  $scope.send = function(){
    /*on envoi les données des inputs dans les tableaux correspondants*/
    $rootScope.subjectList.push($scope.subject);
    $rootScope.emailList.push($scope.mail);
    $rootScope.nameList.push($scope.name);
    $rootScope.textList.push($scope.text);
  };
});
app.controller('ciblectrl', function($scope, $rootScope, $routeParams) {
  /*à chaque clic sur l' ancre on cré un id avec routeParams.*/
  $scope.id = $routeParams.id;
  /*on récupère (name,mail etc..)dans la liste correspondante.
  la liste est composée d'un id unique avec 4 éléments*/
  $scope.name = $rootScope.nameList[$scope.id];
  $scope.mail = $rootScope.emailList[$scope.id];
  $scope.subject = $rootScope.subjectList[$scope.id];
  $scope.text = $rootScope.textList[$scope.id];
});
