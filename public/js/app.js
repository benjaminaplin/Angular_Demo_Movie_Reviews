
angular.module('reviewApp', ['ngRoute'])

.controller('ControllerReviewList', ['ReviewService', function (ReviewService){
  var vm = this;
  vm.reviewOrder = 'name';
  vm.list = function(){
    return ReviewService.listReviews();
  }
  var init = function(){
    return ReviewService.getReviews();
  };
  init();
}])

.controller('ControllerReviewDetail', ['ReviewService','$routeParams', function(ReviewService, $routeParams){
  var vm = this;
  vm.list = function(){
    return ReviewService.listReviews();
  }
  var init = function(){
    return ReviewService.getReviews();
  };
  init();
  vm.whichItem = $routeParams.itemId;
  vm.reviewOrder = 'name';  
}])

.service('ReviewService', ['$http', function($http){
  var reviews = []
  this.getReviews = function(){
    $http.get('/api/reviews').then(function(res){
      reviews = res.data;
      console.log('got reviews from backend upon load');
    }, function(errResponse){
       console.error('reviews query error')
    });
  }
  this.listReviews = function(){
    console.log('your listin reviews!')
    return reviews;
  };  
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/reviews', {
    templateUrl: 'js/partials/review-list.html',
    controller: 'ControllerReviewList'
  }).
  when('/reviews/:itemId', {
    templateUrl: 'js/partials/review-detail.html',
    controller: 'ControllerReviewDetail'
  }).
  otherwise({
    redirectTo: '/reviews'
  });
}]);
