global.Flag = class Flag extends RoomObject {
  constructor(_pos, _room, _collor, _memory, _name, _secondaryColor) {
    super(_pos, _room);
    this._color = _collor;
    this._memory = _memory;
    this._name = _name;
    this._secondaryColor = _secondaryColor;
  }

  remove() { return OK; }
  setColor(color, secondaryColor) { return OK; }
  setPosition(x,y) { return OK; }
};
Object.defineProperty(Flag, 'color', {
  get() { return this._color; }
});
Object.defineProperty(Flag, 'memory', {
  get() { return this._memory; }
});
Object.defineProperty(Flag, 'name', {
  get() { return this._name; }
});
Object.defineProperty(Flag, 'secondaryColor', {
  get() { return this._secondaryColor; }
});
