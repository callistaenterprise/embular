angular.module('app.main.form', [])

.controller('app.main.form.FormController', ['$scope', 'app.main.form.FormControllerViewState', function($scope, formControllerViewState) {
	$scope.message = 'This is the form controller!';
}]);