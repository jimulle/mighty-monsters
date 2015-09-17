mm.factory('creaturelist',[function(){
  var master-creaturelist = {
    0 : {},
    1 : {}
  };

  return function(id){
    return master-creaturelist[id];
  };
}]);
