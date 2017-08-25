global.StructureContainer = class StructureContainer extends Structure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _store, _ticksToDecay) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType);
    this._store = _store;
    this._ticksToDecay = _ticksToDecay;
  }
};

Object.defineProperty(StructureContainer, 'store', {
  get() { return this._store; }
});
Object.defineProperty(StructureContainer, 'storeCapacity', {
  get() { return CONTAINER_CAPACITY; }
});
Object.defineProperty(StructureContainer, 'ticksToDecay', {
  get() { return this._ticksToDecay; }
});
