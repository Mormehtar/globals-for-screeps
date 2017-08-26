global.StructureSpawn = class StructureSpawn extends OwnedStructure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner, _energy, _memory, _name, _spawning) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner);
    this._energy = _energy;
    this._memory = _memory;
    this._name = _name;
    this._spawning = _spawning;
  }
  canCreateCreep(body, name = null) { return OK; }
  createCreep(body, name = null, memory = null) { return OK; }
  recycleCreep(target) { return OK; }
  renewCreep(target) { return OK; }
};

Object.defineProperty(StructureSpawn, 'energy', {
  get() { return this._energy; }
});
Object.defineProperty(StructureSpawn, 'energyCapacity', {
  get() { return SPAWN_ENERGY_CAPACITY; }
});
Object.defineProperty(StructureSpawn, 'memory', {
  get() { return this._memory; }
});
Object.defineProperty(StructureSpawn, 'name', {
  get() { return this._name; }
});
Object.defineProperty(StructureSpawn, 'spawning', {
  get() { return this._spawning; }
});
