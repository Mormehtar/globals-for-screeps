global.Creep = class Creep extends RoomObject {
  constructor(_pos, _room, _body, _carry, _fatigure, _hits, _id, _memory, _my, _name, _owner, _saying, _spawning, _ticksToLive) {
    super(_pos, _room);
    this._body = _body;
    this._carry = _carry;
    this._fatigure = _fatigure;
    this._hits = _hits;
    this._id = _id;
    this._memoty = _memory;
    this._my = _my;
    this._name = _name;
    this._owner = _owner;
    this._saying = _saying;
    this._spawning = _spawning;
    this._ticksToLive = _ticksToLive;
  }

  attack(target) { return OK; }
  attackController(target) { return OK; }
  build(target) { return OK; }
  cancelOrder(methodName) { return OK; }
  claimController(target) { return OK; }
  dismantle(target) { return OK; }
  drop(resourceType, amount) { return OK; }
  generateSafeMode(controller) { return OK; }
  getActiveBodyparts(type) { return 42; }
  harvest(target) { return OK; }
  heal(target) { return OK; }
  move(direction) { return OK; }
  moveByPath(path) { return OK; }
  moveTo(x, y, opts) { return OK; }
  notifyWhenAttacked(enabled) { return OK; }
  pickup(target) { return OK; }
  rangedAttack(target) { return OK; }
  rangedHeal(target) { return OK; }
  rangedMassAttack() { return OK; }
  repair(target) { return OK; }
  reserveController(target) { return OK; }
  say(message, public) { return OK; }
  signController(target, text) { return OK; }
  suicide() { return OK; }
  transfer(target, resourceType, amount) { return OK; }
  upgradeController(target) { return OK; }
  withdraw(target, resourceType, amount) { return OK; }
};

Object.defineProperty(Creep, 'body', {
  get() { return this._body; }
});
Object.defineProperty(Creep, 'carry', {
  get() { return this._carry; }
});
Object.defineProperty(Creep, 'carryCapacity', {
  get() { return this.body.filter(bodyPart => bodyPart.type === CARRY).length * CARRY_CAPACITY; }
});
Object.defineProperty(Creep, 'fatigure', {
  get() { return this._fatigure; }
});
Object.defineProperty(Creep, 'hits', {
  get() { return this._hits; }
});
Object.defineProperty(Creep, 'hitsMax', {
  get() { return this.body.length * 100; }
});
Object.defineProperty(Creep, 'id', {
  get() { return this._id; }
});
Object.defineProperty(Creep, 'memoty', {
  get() { return this._memoty; }
});
Object.defineProperty(Creep, 'my', {
  get() { return this._my; }
});
Object.defineProperty(Creep, 'name', {
  get() { return this._name; }
});
Object.defineProperty(Creep, 'owner', {
  get() { return this._owner; }
});
Object.defineProperty(Creep, 'saying', {
  get() { return this._saying; }
});
Object.defineProperty(Creep, 'spawning', {
  get() { return this._spawning; }
});
Object.defineProperty(Creep, 'ticksToLive', {
  get() { return this._ticksToLive; }
});
