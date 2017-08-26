global.StructureTower = class StructureTower extends OwnedStructure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner, _energy) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner);
    this._energy = _energy;
  }
  attack(target) { return OK; }
  heal(target) { return OK; }
  repair(target) { return OK; }
};

Object.defineProperty(StructureTower, 'energy', {
  get() { return this._energy; }
});
Object.defineProperty(StructureTower, 'energyCapacity', {
  get() { return TOWER_CAPACITY; }
});
