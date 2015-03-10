angular.module('embularApp.main.form')

.controller('embularApp.main.form.Form1Controller', ['$scope','$timeout', 'embularApp.main.form.FormControllerViewState', function($scope, $timeout, formControllerViewState) {
	// general ==================================================================
  $scope.message = 'This is the form 1 controller!';
  $scope.showMe = function(){
    return formControllerViewState.viewState.form1.show;
  }
  
  // datepicker ===============================================================
  $scope.opened = false;
  $scope.dt = {};
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };
    
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };
  
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  
  // typeahead ================================================================
  $scope.selected = undefined;
  
  $scope.states = [ 
    {'code':'AB','name':'Alabama'}, 
    {'code':'AL','name':'Alaska'}, 
    {'code':'AR','name':'Arizona'}, 
    {'code':'AK','name':'Arkansas'},
    {'code':'CA','name':'California'}, 
    {'code':'CO','name':'Colorado'}, 
    {'code':'CN','name':'Connecticut'}, 
    {'code':'DL','name':'Delaware'}, 
    {'code':'WV','name':'West Virginia'}, 
    {'code':'WS','name':'Wisconsin'}, 
    {'code':'WY','name':'Wyoming'}];
    
    $scope.onSelectState = function(item){
      console.log(item);
      $scope.selected = angular.copy(item);
      if(item.code === 'WY'){
        formControllerViewState.viewState.form2.show = false;
      } else {
        formControllerViewState.viewState.form2.show = true;
      }
    }
    
}]);