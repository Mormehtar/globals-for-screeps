global.OwnedStructure = class OwnedStructure extends Structure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType);
    this._my = _my;
    this._owner = _owner;
  }
};
Object.defineProperty(OwnedStructure, 'my', {
  get() { return this._my; }
});
Object.defineProperty(OwnedStructure, 'owner', {
  get() { return this._owner; }
});
