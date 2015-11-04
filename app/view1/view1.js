'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
    $http.get('https://api.github.com/users').success(function (response) {
        $scope.users = response;
    });

    $scope.getDetails = function(login) {
      $http.get('https://api.github.com/users/'+login).success(function (response) {
          $scope.selectedUser = response;
          $scope.selectedUser.avatar = "https://avatars0.githubusercontent.com/u/"+response.id+"?v=3";
      });
    }
});
