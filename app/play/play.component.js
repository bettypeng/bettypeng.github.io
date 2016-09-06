'use strict';

// Register `play` component, along with its associated controller and template
angular.
  module('play').
  component('play', {
    templateUrl: 'play/play.template.html',
    controller: ['$http', function PlayController($http) {
      var self = this;
    }]
  });