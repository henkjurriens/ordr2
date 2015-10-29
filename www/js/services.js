angular.module('starter.services', [])

.factory('Menu', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [
    {  "id" : "1",
       "name" : "Club gezond",
       "description" : "kaas, ham, ei, tomaat, komkommer, ijsbergslaen en remouladesaus",
       "price" : "5,00"
     },
     { "id" : "2",
       "name" : "Chicken BLT",
       "description" : "kipfilet, bacon, tomaat, komkommer, rucola en pestosause",
       "price" : "4,50"
     },
     {
       "id" : "3",
       "name" : "Bacon en Egg",
       "description" : "bacon, ei, eiersalade, ijsbergsla, en mosterdsaus",
       "price" : "4,00"
     },
     { "id" : "4",
       "name" : "Brie Bacon (BBLT)",
       "description" : "brie, bacon, tomaat, ijsbergsla en mosterdsaus",
       "price" : "4,00"
     }

   ];

  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      Menu.splice(item.indexOf(item), 1);
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return  items[i];
        }
      }
      return null;
    },
    getByName: function(name) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].name === name) {
          return  items[i];
        }
      }
      return null;
    }
  };
});
