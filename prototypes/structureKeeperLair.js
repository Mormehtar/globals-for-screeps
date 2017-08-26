global.StructureKeeperLair = class StructureKeeperLair extends OwnedStructure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner, _ticksToSpawn) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner);
    this._ticksToSpawn = _ticksToSpawn;
  }
};

Object.defineProperty(StructureKeeperLair, 'ticksToSpawn', {
  get() { return this._ticksToSpawn; }
});
