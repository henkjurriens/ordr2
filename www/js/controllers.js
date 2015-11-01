angular.module('starter.controllers', ['ui.router'])

.controller('DashCtrl',  function($scope, Menu) {
  $scope.items = Menu.all();
})

.controller('MainCtrl', ['$state', function($state) {
  //console.log('HomeTabCtrl');
  this.onTabSelected = function(_scope){
    console.log("onTabSelected - main");
    console.log(_scope.title);
    // if we are selectng the home title then
    // change the state back to the top state
    if ( _scope.title === 'Bestellen') {
      setTimeout(function() {
        $state.go('tab.order', {});
      },20);
    }
  }
  this.onTabDeselected = function(){
    console.log("onTabDeselected -  main");
  }
}])
.controller('OrderCtrl',  function($scope, $state, $http, Menu) {
  $scope.items = Menu.all();
  $scope.sandwich = '';


  $scope.setSandwich = function(sandwich, orderDate) {
    console.log('orderDate :' + orderDate);

    $scope.sandwich = sandwich;
    console.log('sandwich : ' + sandwich);
    localStorage.setItem("orderDate", orderDate);
    localStorage.setItem("sandwich", sandwich);

    $state.go('tab.order-spreads')
  }

  $scope.setSpread = function(spread) {
    $scope.spread = spread;
    console.log('spread : ' + spread);
    localStorage.setItem("spread", spread);
    var found = Menu.getByName(spread);
    localStorage.setItem("price", found.price);

  }

  $scope.isSpread = function(spread) {
    var selectedSpread = localStorage.getItem("spread");
    console.log('selected spread : ' + selectedSpread);
    return selectedSpread === spread;
  }

  $scope.getSpread = function() {
    return localStorage.getItem("spread");
  }

  $scope.getSandwich = function() {
    return localStorage.getItem("sandwich");
  }

  $scope.getPrice = function() {
    return localStorage.getItem("price");
  }

  $scope.complete = function() {
    $state.go('tab.order-send')

  }

  $scope.send = function(name, email) {
    console.log('send');
    console.log('naam :'  + name);
    console.log('email :'  + email);
    console.log('broodje :'  + $scope.getSandwich());
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);


    var data = {  'gebruiker' : name,
                  'broodje': $scope.getSandwich(),
                  'beleg':  $scope.getSpread(),
                  'prijs' : $scope.getPrice(),
                  'bestelDatum': localStorage.getItem("orderDate")
                }

    $http.post('https://triventobroodjesapp-triventotrial.rhcloud.com/api/broodjes', data, {}).then(
     function() {

     },
     function() {}
    );

    $state.go('tab.order-thanks');
  }


})

.controller('OrderListCtrl', function($scope, $http) {

    $scope.getList = function() {
      $http({
        method: 'GET',
        url: 'https://triventobroodjesapp-triventotrial.rhcloud.com/api/itemsAggregate'
      }).then(function successCallback(response) {
        $scope.orderList = response;
        console.log("list " + $scope.orderList);


      }, function errorCallback(response) {
        console.log("error");
      });
    }

    $scope.getList();

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
