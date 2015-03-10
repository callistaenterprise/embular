window.name = 'NG_DEFER_BOOTSTRAP!'; // jshint ignore:line
var embularApp = angular.module('embularApp', ['ui.router', 'ui.bootstrap', 'embularApp.main.form']); 

angular.element(document).ready(function() {
      angular.bootstrap(document, ['embularApp']);
      angular.resumeBootstrap([embularApp.name,'paragraph']);
});
    