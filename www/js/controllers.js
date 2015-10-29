angular.module('starter.controllers', ['ui.router'])

.controller('DashCtrl',  function($scope, Menu) {
  $scope.items = Menu.all();
})

.controller('OrderCtrl',  function($scope, $state, $http, Menu) {
  $scope.items = Menu.all();
  $scope.sandwich = '';
  $scope.setSandwich = function(sandwich) {
    $scope.sandwich = sandwich;
    console.log('sandwich : ' + sandwich);
    localStorage.setItem("sandwich", sandwich);

    $state.go('tab.order-spreads')
  }


  $scope.setSpread = function(spread) {
    $scope.spread = spread;
    console.log('spread : ' + spread);
    localStorage.setItem("spread", spread);
  }

  $scope.isSpread = function(spread) {
    var selectedSpread = localStorage.getItem("spread");
    console.log('selected spread : ' + selectedSpread);
    return selectedSpread === spread;
  }

  $scope.complete = function() {
    $state.go('tab.order-send')

  }

  $scope.send = function() {
    console.log('send');
    var data = { 'naam' : 'henk',
                 'broodje': 'pistolet',
                  'beleg': 'Filet americain',
                  'bestelDatum': '28-10-2015T10:30:00'
                }

    console.log('data :', data.naam);

      $http.post('http://localhost:8100/api/broodjes', data, {}).then(
       function() {},
       function() {}
      );
  }


})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
