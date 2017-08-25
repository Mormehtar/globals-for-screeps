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
