global.StructureLab = class StructureLab extends OwnedStructure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner,
              _cooldown, _energy, _mineralAmount, _mineralType,
  ) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner);
    this._cooldown = _cooldown;
    this._energy = _energy;
    this._mineralAmount = _mineralAmount;
    this._mineralType = _mineralType;
  }

  boostCreep(creep, bodyPartsCount=null) { return OK; }
  runReaction(lab1, lab2) { return OK; }
};

Object.defineProperty(StructureLab, 'cooldown', {
  get() { return this._cooldown; }
});
Object.defineProperty(StructureLab, 'energy', {
  get() { return this._energy; }
});
Object.defineProperty(StructureLab, 'energyCapacity', {
  get() { return LAB_ENERGY_CAPACITY; }
});
Object.defineProperty(StructureLab, 'mineralAmount', {
  get() { return this._mineralAmount; }
});
Object.defineProperty(StructureLab, 'mineralCapacity', {
  get() { return LAB_MINERAL_CAPACITY; }
});
Object.defineProperty(StructureLab, 'mineralType', {
  get() { return this._mineralType; }
});
