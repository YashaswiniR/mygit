'use strict';

angular.module('myApp.userlist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/list.html',
    controller: 'UserListController'
  });
}])

.controller('UserListController', function($scope, $http) {
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
