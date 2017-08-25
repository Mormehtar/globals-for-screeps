global.RoomObject = class RoomObject {
  constructor(_pos, _room) {
    this._pos = _pos;
    this._room = _room;
  }
};
Object.defineProperty(RoomObject, 'pos', {
  get() { return this._pos; }
});
Object.defineProperty(RoomObject, 'room', {
  get() { return this._room; }
});