angular.module('paragraph', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    // nested list with just some random string data
    .state('main.paragraph', {
        url: 'paragraph',
        templateUrl: 'views/main/paragraph/_paragraph.html'
    })
});