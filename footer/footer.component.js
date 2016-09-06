'use strict';

// Register `footer` component, along with its associated controller and template
angular.
  module('footer').
  component('footer', {
    templateUrl: 'footer/footer.template.html',
    controller: ['$http', function FooterController($http) {
      var self = this;
    }]
  });