angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.information', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/information.html',
        controller: 'informationCtrl'
      }
    }
  })

  .state('tabsController.resources', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/resources.html',
        controller: 'resourcesCtrl'
      }
    }
  })

  .state('tabsController.updates', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/updates.html',
        controller: 'updatesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('landingScreen', {
    url: '/page10',
    templateUrl: 'templates/landingScreen.html',
    controller: 'landingScreenCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});