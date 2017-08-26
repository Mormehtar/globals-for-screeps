global.StructureRoad = class StructureRoad extends Structure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _ticksToDecay);
    this._ticksToDecay = _ticksToDecay;
  }
};

Object.defineProperty(StructureRoad, 'ticksToDecay', {
  get() { return this._ticksToDecay; }
});
