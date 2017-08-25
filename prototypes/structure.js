global.Structure = class Structure extends RoomObject {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType) {
    super(_pos, _room);
    this._hits = _hits;
    this._hitsMax = _hitsMax;
    this._id = _id;
    this._structureType = _structureType;
  }
  destroy() { return OK; }
  isActive() { return true; }
  notifyWhenAttacked(enabled) { return OK; }
};
Object.defineProperty(Structure, 'hits', {
  get() { return this._hits; }
});
Object.defineProperty(Structure, 'hitsMax', {
  get() { return this._hitsMax; }
});
Object.defineProperty(Structure, 'id', {
  get() { return this._id; }
});
Object.defineProperty(Structure, 'structureType', {
  get() { return this._structureType; }
});
