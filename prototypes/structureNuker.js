global.StructureNuker = class StructureNuker extends OwnedStructure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner,
              _energy, _ghodium, _cooldown) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner);
    this._energy = _energy;
    this._ghodium = _ghodium;
    this._cooldown = _cooldown;
  }
  launchNuke(pos) { return OK; }
};

Object.defineProperty(StructureNuker, 'energy', {
  get() { return this._energy; }
});
Object.defineProperty(StructureNuker, 'energyCapacity', {
  get() { return NUKER_ENERGY_CAPACITY; }
});
Object.defineProperty(StructureNuker, 'ghodium', {
  get() { return this._ghodium; }
});
Object.defineProperty(StructureNuker, 'ghodiumCapacity', {
  get() { return NUKER_GHODIUM_CAPACITY; }
});
Object.defineProperty(StructureNuker, 'cooldown', {
  get() { return this._cooldown; }
});
