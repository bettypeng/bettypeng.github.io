'use strict';

// Register 'about' component, along with its associated controller and template
angular.
  module('about').
  component('about', {
	templateUrl: 'about/about.template.html',
  controller: ['$http', '$routeParams',
    function MainController($http, $routeParams) {
      var self = this;

      // $http.get('projects-info/' + $routeParams.projectId + '.json').then(function(response) {
      //   self.project = response.data;
      //   self.setImage(self.project.images[0]);
      // });
    }
  ]
});
