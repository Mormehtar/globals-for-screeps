global.StructureWall = class StructureWall extends Structure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _ticksToLive) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType);
    this._ticksToLive = _ticksToLive;
  }
};

Object.defineProperty(StructureWall, 'ticksToLive', {
  get() { return this._ticksToLive; }
});
