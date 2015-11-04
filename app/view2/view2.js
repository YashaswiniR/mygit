'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user/:userId', {
    templateUrl: function(params) {
      return 'view2/view2.html?id=' + params.userId;
    },
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, $routeParams, $http) {
  $http.get('https://api.github.com/users/'+$routeParams.userId).success(function (response) {
      $scope.selectedUser = response;
      $scope.selectedUser.avatar = "https://avatars0.githubusercontent.com/u/"+response.id+"?v=3";
  });
});
