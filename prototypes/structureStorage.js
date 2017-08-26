global.StructureStorage = class StructureStorage extends OwnedStructure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner,
              _store) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner);
    this._store = _store;
  }
};
Object.defineProperty(StructureTerminal, '_store', {
  get() { return this._store; }
});
Object.defineProperty(StructureTerminal, 'storeCapacity', {
  get() { return STORAGE_CAPACITY; }
});
