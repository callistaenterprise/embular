angular.module('embularApp.main.form', [])

.controller('embularApp.main.form.FormController', ['$scope', 'embularApp.main.form.FormControllerViewState', function($scope, formControllerViewState) {
	$scope.message = 'This is the form controller!';
}]);