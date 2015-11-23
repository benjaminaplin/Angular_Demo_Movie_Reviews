var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http',function MyController($scope, $http){
  var url = 'http://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=c4edec026df80c72268790750153e92b%3A8%3A48762272';
  $http.get(url).success(function(data){
     $scope.reviews = data.results;
     //prepopulates the sort by name/date drop-down
     $scope.artistOrder = 'name';
  });
}]);

// 5bc121955c3730823eeb9c741d2494b4:7:48762272