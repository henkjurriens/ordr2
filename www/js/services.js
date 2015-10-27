angular.module('starter.services', [])

.factory('Menu', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [
    {"name" : "Club gezond",
       "description" : "kaas, ham, ei, tomaat, komkommer, ijsbergslaen en remouladesaus"
     },
     { "name" : "Chicken BLT",
       "description" : "kipfilet, bacon, tomaat, komkommer, rucola en pestosause"
     },
     { "name" : "Bacon en Egg",
       "description" : "bacon, ei, eiersalade, ijsbergsla, en mosterdsaus"
     },
     { "name" : "Brie Bacon (BBLT)",
       "description" : "brie, bacon, tomaat, ijsbergsla en mosterdsaus"
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
    }
  };
});
