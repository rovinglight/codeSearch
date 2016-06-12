'use strict';
angular.module('codeSearch')

.controller('sideCtrl', function ($scope,$mdSidenav, $log) {
    
    $scope.close = function () {
        $mdSidenav('left').close()
        .then(function () {
            $log.debug("close LEFT is done");
        });
    };
    
    

});