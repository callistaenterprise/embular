Embular
==========

##Install
Once cloned go into the embular directory and type the following
- npm install
- bower install
- grunt
- go to http://localhost:5200

Grunt will start a node server and run a watch task.  You should be able to add,ammend, update js and css, the changes will make their way to the browser with a refresh.  No livereload just yet but I'll add this when I get time...

This is a sandbox angular application to demonstrate the use of https://github.com/angular-ui/ui-router.
The file structure is an effort to follow Angular's best practices for seperation of controllers, routes and models.
##Controllers
Keep state to a minimum, this should be delegated to Model ( factories )
All business logic should be delegated out to a Service.
If the controller is a parent ( i.e. it has child views and controllers ) then any state that needs to be shared with these children should be put into a ViewStateService which can be injected and shared between the children.
The initial creation of the controller should be responsible for :
- setting up the model
- any other initialisation

##Routes
A router.js file should be created for the App and any sub modules.
In ember a route is responsible for fetching a model and then passing it onto the controller.
With ui.router we don't have a router object so the controller needs to be responsible for fething it's model and any other initialisation.

##Models
The models should be wrapped into factories.  In ember the model also has the responsibility for communicating to the backend via EmberData.  
In our example the models will use ProxyServices for all backend communication. 

###ProxyService
To provide a model with backend ( proxy ) communcation. The model in it's turn will use the returned model/data for it's state.
Subsequent network communication will go through the proxy.
