var myApp = angular.module('myApp', [
  'ngRoute',
  'reviewControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/reviews', {
    templateUrl: 'partials/review-list.ejs.html',
    controller: 'ReviewListController'
  }).
  when('/reviews/:reviewId', {
    templateUrl: 'partials/review-detail.ejs.html',
    controller: 'ReviewDetailController'
  }).
  otherwise({
    redirectTo: '/reviews'
  });
}]);