'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('projectDetail').
  component('projectDetail', {
	templateUrl: 'project-detail/project-detail.template.html',
    controller: ['$http', '$routeParams',
      function ProjectDetailController($http, $routeParams) {
        var self = this;

		self.setImage = function setImage(imageUrl) {
			self.mainImageUrl = imageUrl;
        };

        $http.get('projects-info/' + $routeParams.projectId + '.json').then(function(response) {
          self.project = response.data;
          self.setImage(self.project.images[0]);
        });
      }
    ]
  });
