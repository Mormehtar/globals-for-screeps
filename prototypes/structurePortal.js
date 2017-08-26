global.StructurePortal = class StructurePortal extends Structure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _destination, _ticksToDecay) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType);
    this._destination = _destination;
    this._ticksToDecay = _ticksToDecay;
  }
};

Object.defineProperty(StructurePortal, 'destination', {
  get() { return this._destination; }
});
Object.defineProperty(StructurePortal, 'ticksToDecay', {
  get() { return this._ticksToDecay; }
});
