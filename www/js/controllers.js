angular.module('starter.controllers', ['ui.router'])

.controller('DashCtrl',  function($scope, Menu) {
  $scope.items = Menu.all();
})

.controller('OrderCtrl',  function($scope, $state) {

  $scope.sandwich = '';
  $scope.setSandwich = function(sandwich) {
    $scope.sandwich = sandwich;
    console.log('sandwich : ' + sandwich);
    localStorage.setItem("sandwich", sandwich);
    $state.go('tab.order-spreads')
  }

})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
