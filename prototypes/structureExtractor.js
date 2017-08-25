global.StructureExtractor = class StructureExtractor extends OwnedStructure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner, _cooldown) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner);
    this._cooldown = _cooldown;
  }
};

Object.defineProperty(StructureExtractor, 'cooldown', {
  get() { return this._cooldown; }
});
