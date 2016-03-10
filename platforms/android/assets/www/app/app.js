(function(){
'use strict';

angular.module('codeSearch',['ngMaterial','ngRoute'])

.controller('mainCtrl',function($scope,$timeout, $mdSidenav, $log){

    
    $scope.showSearchBox = false;

    
    //code of side bar start
    $scope.toggleRight = function () {
        $mdSidenav('left')
          .toggle()
      
    }
    //code of side bar end
    


}).config(function($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl : 'view/detail.html',
      controller  : 'detailCtrl'
    })
    .when('/detail', {
      templateUrl : 'view/codeDetail.html',
      controller  : 'detailCtrl'
    });
});

})()