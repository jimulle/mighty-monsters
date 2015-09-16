var mm = angular.module('mm', []);

mm.controller('mmctrl', ['$scope', function($scope){

$scope.micky = Object.create(Creature.prototype);
$scope.micky.init({
  name:"micky monstar",
  imageUrl:"http://icons.iconarchive.com/icons/spoon-graphics/monster/512/Blue-Monster-icon.png",
  experience:0,
  nextLevelExp:150,
  level:1,
  hp:100,
  attack:50,
  defense:30,
  speed:65,
  moves:[
    { name:'kersmash', damage:8, capacity:20 },
    { name:'smile', damage:0, capacity:5 }
  ]
});

$scope.goober = Object.create(Creature.prototype);
$scope.goober.init({
  name:"goober",
  imageUrl:"http://1.bp.blogspot.com/--7QyK1OOq9c/T2Ou-kqKZQI/AAAAAAAAAlk/Y455Rps6vPY/s1600/greenslimemonster.jpg",
  experience:55,
  level:1,
  hp:10,
  attack:50,
  defense:30,
  speed:65,
  moves:[
    { name:'snot', damage:2, capacity:25 },
    { name:'slog', damage:5, capacity:2 }
  ]
});

$scope.output = messages;

}]);

mm.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
