angular.module('embularApp').config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

		// home page
		.state('main', {
      url: '/',
			controller: 'embularApp.main.MainController',
      views: {
        // the main template will be placed here (relatively named)
        '': { templateUrl: 'views/_main.html' },

        // the child views will be defined here (absolutely named)
        'navbar@main': { 
          templateUrl: 'views/_navbar.html'
         }
      }
		})
    
    // nested list with custom controller
    .state('main.form', {
        url: 'form',
        controller: 'embularApp.main.form.FormController',
        views: {
          // the main template will be placed here (relatively named)
          '': { templateUrl: 'views/main/form/_form.html' },

          // the child views will be defined here (absolutely named)
          'formOne@main.form': { 
            templateUrl: 'views/main/form/sections/_form1.html',
            controller: 'embularApp.main.form.Form1Controller'
           },

          // for column two, we'll define a separate controller 
          'formTwo@main.form': { 
            templateUrl: 'views/main/form/sections/_form2.html',
            controller: 'embularApp.main.form.Form2Controller'
          }
        }
    })
    
    $urlRouterProvider.otherwise("/");

});