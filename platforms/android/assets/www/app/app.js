(function(){
'use strict';

angular.module('codeSearch',['ngMaterial'])

.controller('mainCtrl',function($scope,$timeout, $mdSidenav, $log){

    
    $scope.showSearchBox = false;

    
    //code of side bar start
    $scope.toggleRight = function () {
        $mdSidenav('left')
          .toggle()
      
    }
    //code of side bar end
    


});

})()