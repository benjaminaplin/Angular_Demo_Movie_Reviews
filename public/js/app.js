
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
  console.log('vm', vm)
}])

.controller('ControllerReviewDetail', ['ReviewService','$routeParams', '$http', function(ReviewService, $routeParams, $http){
  var vm = this;
  vm.list = function(){
    return ReviewService.listReviews();
  }
  var init = function(){
    return ReviewService.getReviews();
  };
  init();
  vm.itemId = $routeParams.itemId;
  vm.reviewOrder = 'name';  
  vm.reviews = this.list();
  vm.review = vm.reviews[vm.itemId]
  if(parseInt(vm.itemId) == vm.reviews.length - 1){
    vm.nextReview = 0
  } else {
    vm.nextReview = parseInt(vm.itemId) + 1;
  }
  if(parseInt(vm.itemId) == 0){
    vm.prevReview = vm.reviews.length -1;
  } else {
    vm.prevReview = parseInt(vm.itemId) - 1;
  }
  console.log('vm', vm)
}])

.service('ReviewService', ['$http', function($http){
  var reviews = []
  this.getReviews = function(){
    $http.get('/api/reviews').then(function(res){
      reviews = res.data;
      // console.log('got reviews from backend upon load');
    }, function(errResponse){
       console.error('reviews query error')
    });
  }
  this.listReviews = function(){
    // console.log('your listin reviews!')
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
