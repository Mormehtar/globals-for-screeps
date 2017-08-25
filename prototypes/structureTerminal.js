global.StructureTerminal = class StructureTerminal extends OwnedStructure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner,
              _cooldown, _store, _storeCapacity
  ) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner);
    this._cooldown = _cooldown;
    this._store = _store;
    this._storeCapacity = _storeCapacity;
  }
  send(resourceType, amount, destination, description = '') { return OK; }
};

Object.defineProperty(StructureTerminal, 'cooldown', {
  get() { return this._cooldown; }
});
Object.defineProperty(StructureTerminal, 'store', {
  get() { return this._store; }
});
Object.defineProperty(StructureTerminal, 'storeCapacity', {
  get() { return this._storeCapacity; }
});
