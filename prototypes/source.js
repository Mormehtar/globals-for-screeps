global.Source = class Source extends RoomObject {
  constructor(_pos, _room, _energy, _energyCapacity, _id, _ticksToRegeneration) {
    super(_pos, _room);
    this._energy = _energy;
    this._energyCapacity = _energyCapacity;
    this._id = _id;
    this._ticksToRegeneration = _ticksToRegeneration;
  }
};
Object.defineProperty(Source, 'energy', {
  get() { return this._energy; }
});
Object.defineProperty(Source, 'energyCapacity', {
  get() { return this._energyCapacity; }
});
Object.defineProperty(Source, 'id', {
  get() { return this._id; }
});
Object.defineProperty(Source, 'ticksToRegeneration', {
  get() { return this._ticksToRegeneration; }
});
