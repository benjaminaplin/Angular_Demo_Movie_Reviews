var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http',function MyController($scope, $http){
  var apiKey = 'c4edec026df80c72268790750153e92b%3A8%3A48762272';
  var url = 'http://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=' + apiKey;
  $http.get(url).success(function(data){
     $scope.reviews = data.results;
     //prepopulates the sort by name/date drop-down
     $scope.artistOrder = 'name';
  });
}]);

