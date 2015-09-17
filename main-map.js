var mm = angular.module('mm', []);

mm.controller('mm-mapctrl', ['$scope', function($scope){
  $scope.map = [
    [1,1,1,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,1,1,1],
    [1,0,1,0,0,0,1,1,1,1,1,1,0,3,0,0,0,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,1,0,0,0,0,1,0,3,0,0,0,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,1,0,0,0,0,1,0,3,0,0,0,0,0,0,0,0,1,1,1],
    [0,0,0,0,0,0,1,0,0,0,0,1,0,3,3,3,0,0,0,0,0,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,1,1,0,0,2,3,2,0,0,0,0,0,1,1,1],
    [1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,3,2,2,0,0,0,0,1,1,1],
    [1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,3,0,0,0,0,0,0,1,1,1],
    [1,1,1,1,0,0,1,1,1,1,1,1,0,0,3,3,0,0,0,0,0,0,0,1,1],
    [1,1,1,0,0,0,1,1,1,1,1,0,0,0,3,0,0,0,0,0,0,0,1,1,1],
    [1,1,0,0,0,0,0,1,1,1,0,0,0,0,3,0,0,0,0,0,0,1,1,1,1],
    [1,1,1,0,0,0,1,1,1,1,0,0,0,0,3,0,0,0,0,0,0,0,1,1,1],
    [1,1,0,0,0,0,0,1,1,1,0,0,0,0,3,0,0,0,0,0,0,1,1,1,1],
    [1,1,1,0,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,1,1,1],
    [1,1,0,0,3,0,0,1,1,1,0,0,0,0,3,0,0,0,0,0,0,1,1,1,1],
    [1,1,1,0,3,0,1,1,1,1,0,0,0,0,3,0,0,0,0,0,0,0,1,1,1],
    [1,1,0,0,3,0,0,1,1,1,0,0,0,0,3,0,0,0,0,0,0,1,1,1,1],
    [1,1,1,0,3,0,1,1,1,1,0,0,0,0,3,0,0,0,0,0,0,0,1,1,1],
    [1,1,0,3,3,0,0,1,1,1,0,0,0,0,3,3,3,3,0,0,0,1,1,1,1],
    [1,1,1,3,0,0,1,1,1,1,0,0,0,0,0,0,0,3,0,0,0,0,1,1,1],
    [1,1,0,3,0,0,0,1,1,1,0,0,0,0,0,0,0,3,0,0,0,1,1,1,1],
    [1,1,1,3,0,0,1,1,1,1,0,0,0,0,2,0,0,3,0,0,0,0,1,1,1],
    [1,1,0,3,2,2,0,1,1,1,0,0,0,2,2,2,0,3,0,0,0,1,1,1,1],
    [1,1,1,3,2,0,1,1,1,1,0,0,0,0,0,2,0,3,0,0,0,0,1,1,1],
    [1,1,0,3,0,0,0,1,1,1,0,0,0,0,0,0,0,3,0,0,0,1,1,1,1]
  ];

  //map tiles
  $scope.tiles = {
    0 : { name : 'dirt', img : 'http://www.fmwconcepts.com/imagemagick/tiler/images/dirt256_tile_mirror.jpg' },
    1 : { name : 'grass', img : 'http://oi42.tinypic.com/2ljm6w9.jpg' },
    2 : { name : 'tree', img : 'http://orig14.deviantart.net/8add/f/2012/358/0/0/_sigh__tree_tile_by_kaliser-d5ozzs4.png'},
    3 : { name : 'stone', img : 'http://www.customwindowwells.com/wp-content/uploads/sites/46/nggallery/patterns/thumbs/thumbs_grey-stone-granite.png'}
  };

  $scope.player = {
    location : {
      row : 13,
      column : 20
    },
    position : function() {
      return {
        left:$scope.player.location.column*26 + 'px',
        top:$scope.player.location.row*26 + 'px'
      };
    },
    move : {
      left : function() { if($scope.player.location.column > 0) { $scope.player.location.column--; } },
      right : function() { if($scope.player.location.column < ($scope.map[0].length - 1)){ $scope.player.location.column++; } },
      up : function() { if($scope.player.location.row > 0) { $scope.player.location.row--; } },
      down : function() { if($scope.player.location.row < ($scope.map.length - 1)){$scope.player.location.row++; } }
    },
    img : 'http://www.bluebomber.com/sprites/sub2/images/megaman008.gif'
  };

  $scope.$on('move', function(event, args){
    switch(args.direction){
      case 'left':
        $scope.player.move.left();
        break;
      case 'right':
        $scope.player.move.right();
        break;
      case 'up':
        $scope.player.move.up();
        break;
      case 'down':
        $scope.player.move.down();
        break;
    }
    $scope.$apply();
  });


  angular.element(window).on('keydown', function(e) {
    switch(e.which) {
      case 37:
        $scope.$emit('move', {direction:'left'});
        break;
      case 38:
        $scope.$emit('move', {direction:'up'});
        break;
      case 39:
        $scope.$emit('move', {direction:'right'});
        break;
      case 40:
        $scope.$emit('move', {direction:'down'});
        break;
    }
  });


}]);
