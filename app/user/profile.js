'use strict';

angular.module('myApp.userprofile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user/:userId', {
    templateUrl: function(params) {
      return 'user/profile.html?id=' + params.userId;
    },
    controller: 'UserController'
  });
}])

.controller('UserController', function($scope, $routeParams, $http) {
  $http.get('https://api.github.com/users/'+$routeParams.userId).success(function (response) {
      $scope.selectedUser = response;
      $scope.selectedUser.avatar = "https://avatars0.githubusercontent.com/u/"+response.id+"?v=3";
      $http.get(response.repos_url).success(function (response) {
        $scope.repos = response;
      });
  });
  $scope.parseDateString = function (dateString) {
    return new Date(Date.parse(dateString));
  }
});
