window.name = 'NG_DEFER_BOOTSTRAP!'; // jshint ignore:line
var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'app.main.form']); 

angular.element(document).ready(function() {
      angular.bootstrap(document, ['app']);
      angular.resumeBootstrap([app.name,'paragraph']);
});
    