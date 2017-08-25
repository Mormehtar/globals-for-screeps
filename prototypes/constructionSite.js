global.ConstructionSite = class ConstructionSite extends RoomObject {
  constructor(_pos, _room, _id, _my, _owner, _progress, _progressTotal, _structureType) {
    super(_pos, _room);
    this._id = _id;
    this._my = _my;
    this._owner = _owner;
    this._progress = _progress;
    this._progressTotal = _progressTotal;
    this._structureType = _structureType;
  }
};

Object.defineProperty(RoomObject, 'id', {
  get() { return this._id; }
});
Object.defineProperty(RoomObject, 'my', {
  get() { return this._my; }
});
Object.defineProperty(RoomObject, 'owner', {
  get() { return this._owner; }
});
Object.defineProperty(RoomObject, 'progress', {
  get() { return this._progress; }
});
Object.defineProperty(RoomObject, 'progressTotal', {
  get() { return this._progressTotal; }
});
Object.defineProperty(RoomObject, 'structureType', {
  get() { return this._structureType; }
});
