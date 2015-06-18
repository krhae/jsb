angular.module( 'jsb', [
  'templates-app',
  'templates-common',
  'jsb.home',
  'jsb.desk',
  'jsb.toolbar',
  'jsb.navbar',
  'ngRoute'
])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'home/home.tpl.html',
        controller: 'homeController'
      })
      .otherwise({
        redirectTo: '/home'
      });
}])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider
  .otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppController', function AppController ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | jsb' ;
    }
  });
});