mm.factory('move',[function(){

  var Move = function () {};

  Move.prototype.init = function(m) {
    this.name = m.name || "generic move";
    this.description = m.description || "";
    this.damage = m.damage || 0;
    this.capacity = this.maxCapacity = m.capacity || 20;
  };

  Move.prototype.use = function(opponent) {
    opponent.reduceHp(this.damage);
    this.capacity--;
  };

  return function(data){
    var newmove = Object.create(Move.prototype);
    newmove.init(data);
    return newmove;
  };

}]);
