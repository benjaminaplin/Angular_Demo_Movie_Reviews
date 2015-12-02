var myApp = angular.module('myApp', [
  'ngRoute',
  'reviewControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/reviews', {
    templateUrl: 'js/partials/review-list.html',
    controller: 'ReviewListController'
  }).
  when('/reviews/:reviewId', {
    templateUrl: 'js/partials/review-detail.html',
    controller: 'ReviewDetailController'
  }).
  otherwise({
    redirectTo: '/reviews'
  });
}]);