angular.module('embularApp.main.form')

.factory('embularApp.main.form.FormControllerViewState', [ function() {
	
  function FormControllerViewState(){
    this.viewState = {
      form1:{
        show:true
      },
      form2:{
        show:true
      }
    };
  }
  var formControllerViewState = new FormControllerViewState();
	return formControllerViewState;
}]);