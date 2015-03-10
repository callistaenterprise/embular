angular.module('app.main.form')

.factory('app.main.form.FormControllerViewState', [ function() {
	
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