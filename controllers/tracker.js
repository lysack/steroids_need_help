var trackerApp = angular.module('trackerApp', ['TrackerModel','ngTouch']);

trackerApp.controller('IndexCtrl', function ($scope, TrackerRestangular ) {


  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/tracker/show.html?id="+id);
    steroids.layers.push(webView);
  };

  TrackerRestangular.all('tracker').getList().then( function(trackers) {
    $scope.trackers = trackers;
  });

});


trackerApp.controller('ShowCtrl', function ($scope, $filter, TrackerRestangular ) {

    TrackerRestangular.all('tracker').getList().then( function(trackers) {
    $scope.tracker = $filter('filter')(trackers, {id: steroids.view.params['id']})[0];
  });

});


