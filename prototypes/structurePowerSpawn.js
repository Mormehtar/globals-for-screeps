global.StructurePowerSpawn = class StructurePowerSpawn extends OwnedStructure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner, _energy, _power) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner);
    this._energy = _energy;
    this._power = _power;
  }
  createPowerCreep(name) { return OK; }
  processPower() { return OK; }
};

Object.defineProperty(StructurePowerSpawn, 'energy', {
  get() { return this._energy; }
});
Object.defineProperty(StructurePowerSpawn, 'energyCapacity', {
  get() { return POWER_SPAWN_ENERGY_CAPACITY; }
});
Object.defineProperty(StructurePowerSpawn, 'power', {
  get() { return this._power; }
});
Object.defineProperty(StructurePowerSpawn, 'powerCapacity', {
  get() { return POWER_SPAWN_POWER_CAPACITY; }
});
