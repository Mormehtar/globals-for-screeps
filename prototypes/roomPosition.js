global.RoomPosition = class RoomPosition {
  constructor(x, y, roomName) {
    this._x = x;
    this._y = y;
    this._roomName = roomName;
  }
  createConstructionSite(structureType) { return OK; }
  createFlag(name=null, color=null, secondaryColor=null) {
    return new Flag(this, Game.rooms[this.roomName], color, {}, name, secondaryColor);
  }
  findClosestByPath(type, opts = null) { return null; }
  findClosestByRange(type, opts = null) { return null; }
  findInRange(type, range, opts = null) { return []; }
  findPathTo(x, y, opts = null) {
    return [
      { x: 10, y: 5, dx: 1,  dy: 0, direction: RIGHT },
      { x: 10, y: 6, dx: 0,  dy: 1, direction: BOTTOM }
    ];
  }
  getDirectionTo(x, y) { return LEFT; }
  getRangeTo(x,y) { return 42; }
  inRangeTo(x, y, range) { return true; }
  isEqualTo(x,y) { return false; }
  isNearTo(x,y) { return true; }
  look() {
    return [
      { type: 'terrain', terrain: 'swamp' }
    ];
  }
  lookFor(type) { return []; }
};
Object.defineProperty(RoomPosition, 'x', {
  get() { return this._x; }
});
Object.defineProperty(RoomPosition, 'y', {
  get() { return this._y; }
});
Object.defineProperty(RoomPosition, 'roomName', {
  get() { return this._roomName; }
});
