angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks($scope.data)
    .then(function(links) {
      links.forEach(function(link) {
         $scope.data[link.code] = link;
      });
    })
    .catch(function(error) {
      console.log('get links error', error);
    });
  };
  $scope.getLinks();


});
