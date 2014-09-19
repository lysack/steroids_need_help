var quicktrackerApp = angular.module('quicktrackerApp', ['QuicktrackerModel','ngTouch']);

quicktrackerApp.controller('IndexCtrl', function ($scope, QuicktrackerRestangular ) {


  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/quicktracker/show.html?id="+id);
    steroids.layers.push(webView);
  };

    QuicktrackerRestangular.all('quicktracker').getList().then( function(quicktrackers) {
    $scope.quicktrackers = quicktrackers;
  });

});


quicktrackerApp.controller('ShowCtrl', function ($scope, $filter, QuicktrackerRestangular ) {

    QuicktrackerRestangular.all('tracker').getList().then( function(quicktrackers) {
    $scope.quicktracker = $filter('filter')(quicktrackers, {id: steroids.view.params['id']})[0];
  });

});


