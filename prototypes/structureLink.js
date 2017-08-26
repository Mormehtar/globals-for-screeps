global.StructureLink = class StructureLink extends OwnedStructure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner,
              _cooldown, _energy) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner);
    this._cooldown = _cooldown;
    this._energy = _energy;
  }
  transferEnergy(target, amount=null) { return OK; }
};

Object.defineProperty(StructureLink, 'cooldown', {
  get() { return this._cooldown; }
});
Object.defineProperty(StructureLink, 'energy', {
  get() { return this._energy; }
});
Object.defineProperty(StructureLink, 'energyCapacity', {
  get() { return LINK_CAPACITY; }
});
