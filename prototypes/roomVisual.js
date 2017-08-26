global.RoomVisual = class RoomVisual {
  constructor(roomName='') {
    this._roomName = roomName;
  }
  line(x1, y1, x2, y2, style = null) { return this; }
  circle(x, y, style = null) { return this; }
  rect(x, y, width, height, style = null) { return this; }
  poly(points, style = null) { return this; }
  text(text, x, y, style = null) { return this; }
  clear() { return this; }
  getSize() { return 42000; }
};
Object.defineProperty(RoomVisual, 'roomName', {
  get() { return this._roomName; }
});
