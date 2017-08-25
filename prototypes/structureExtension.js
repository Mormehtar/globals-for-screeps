global.StructureExtension = class StructureExtension extends OwnedStructure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner,
              _energy, _energyCapacity
  ) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner);
    this._energy = _energy;
    this._energyCapacity = _energyCapacity;
  }
};
Object.defineProperty(StructureExtension, 'energy', {
  get() { return this._energy; }
});
Object.defineProperty(StructureExtension, 'energyCapacity', {
  get() { return this._energyCapacity; }
});
