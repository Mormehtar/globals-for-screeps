global.StructureRampart = class StructureRampart extends OwnedStructure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner, _ticksToDecay) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner);
    this._isPublic = false;
    this._ticksToDecay = _ticksToDecay;
  }
  setPublic(isPublic) { return OK; }
};

Object.defineProperty(StructureRampart, 'isPublic', {
  get() { return this._isPublic; }
});
Object.defineProperty(StructureRampart, 'ticksToDecay', {
  get() { return this._ticksToDecay; }
});
