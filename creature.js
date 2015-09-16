var EXP_MODIFIER = 2,
    LEVEL_UP_MODIFIER = 1.1;

var Creature = function () {};

Creature.prototype.init = function(c) {
  //info
  this.name = c.name || "unnamed creature";
  this.imageUrl = c.imageUrl || "";
  this.experience = c.experience || 0;
  this.nextLevelExp = c.nextLevelExp || 150;
  this.level = c.level || 1;
  this.status = 1;
  //stats
  this.attack = c.attack || 50;
  this.defense = c.defense || 50;
  this.speed = c.speed || 50;
  this.accuracy = c.accuracy || 80;
  this.hp = this.maxHp = c.hp || 50;
  //todo moves
  var parentThis = this;
  this.moves = [];
  if(c.moves) {
    for(i=0;i<c.moves.length;i++) {
      this.learnMove(c.moves[i]);
    }
  }
};

Creature.prototype.reduceHp = function (value) {
  this.hp -= value;
  if(this.hp <= 0) {
    this.status = 0;
    console.log(this.name + ' fainted.');
  } else { messages.push(this.name + " took damage."); }
};

Creature.prototype.restoreHp = function (value) {
  if(isNaN(value)) {  //full restore
    this.hp = this.maxHp;
  }
  else {  //incremental restore
    this.hp += value;
    if(this.hp > this.maxHp) { this.hp = this.maxHp; }
  }
  messages.push(this.name + " had it's HP restored.");
};

Creature.prototype.revive = function () {
  if(this.status = 0) {
    this.status = 1;
    this.restoreHp();
  } else { messages.push(this.name + " does not need reviving."); }
};

Creature.prototype.gainExp = function (value) {
  this.experience += value;
  messanges.push(this.name + " gained " + value + " experience.");
  if (this.experience >= this.nextLevelExp) { this.levelUp(); }
};

Creature.prototype.levelUp = function(value) {
  var modifier = LEVEL_UP_MODIFIER;
  if(!isNaN(value)) { modifier = value; }
  this.level++;
  this.attack = Math.round(this.attack * modifier);

  this.nextLevelExp = Math.round(this.nextLevelExp * EXP_MODIFIER);
  messages.push(this.name + " grew to level  " + this.level + ".");
};

Creature.prototype.learnMove = function(move) {
  var newmove = Object.create(Move.prototype);
  newmove.init(move);
  if(this.moves.length < 4) { this.moves.push(newmove); }
  else { this.replaceMove(move); }
};

Creature.prototype.replaceMove = function(move) {
  //TODO: logic to prompt selection of move to replace
  var i = 0; //i is index of move to replace
  this.moves[i] = move;
};

Creature.prototype.fight = function(opponent, move) {
  console.log(move);
  var m = this.moves[move];

  if(m.capacity > 0) {
    messages.push(this.name + " used " + m.name + ".");
    m.use(opponent);
  } else {
    messages.push(this.name + " cannot use this move.");
  }

};

var messages = [];
