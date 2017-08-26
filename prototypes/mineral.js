global.Mineral = class Mineral extends RoomObject {
  constructor(_pos, _room, _density, _mineralAmount, _mineralType, _id, _ticksToRegeneration) {
    super(_pos, _room);
    this._density = _density;
    this._mineralAmount = _mineralAmount;
    this._mineralType = _mineralType;
    this._id = _id;
    this._ticksToRegeneration = _ticksToRegeneration;
  }
};
Object.defineProperty(Mineral, 'density', {
  get() { return this._density; }
});
Object.defineProperty(Mineral, 'mineralAmount', {
  get() { return this._mineralAmount; }
});
Object.defineProperty(Mineral, 'mineralType', {
  get() { return this._mineralType; }
});
Object.defineProperty(Mineral, 'id', {
  get() { return this._id; }
});
Object.defineProperty(Mineral, 'ticksToRegeneration', {
  get() { return this._ticksToRegeneration; }
});
