import angular from 'angular';

import 'angular-animate';
import 'angular-aria'
import 'angular-material/angular-material.css'
import 'angular-material';
import 'angular-messages';

const app = angular.module("app", ['ngMaterial', 'ngMessages']);

app.controller('ctrl', function($scope, $http, $mdToast) {
  $scope.user = { name: 'Corey' };

  $scope.sayHello = () => {
    $http.post('/hello', $scope.user).then((response) => {
      $mdToast.show($mdToast.simple().textContent(response.data));
    });
  }
});

app.directive('myDirective', () => {
  return { template: require('./myDirective.html') }
});