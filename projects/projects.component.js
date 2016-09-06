'use strict';

// Register `projects` component, along with its associated controller and template
angular.
  module('projects').
  component('projects', {
    templateUrl: 'projects/projects.template.html',
    controller: ['$http', function ProjectsController($http) {
      var self = this;

      $http.get('projects-info/projects.json').then(function(response) {
        self.projects = response.data;
      });

      $http.get('projects-info/sites.json').then(function(response) {
        self.sites = response.data;
      });
    }]
  });