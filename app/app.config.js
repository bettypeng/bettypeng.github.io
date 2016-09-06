'use strict';

angular.
  module('bettyApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/projects', {
          template: '<projects></projects>'
        }).
        when('/projects/:projectId', {
          template: '<project-detail></project-detail>'
        }).
        when('/about', {
          template: '<about></about>'
        }).
        when('/play', {
          template: '<play></play>'
        }).
        otherwise('/about');
    }
  ]);
