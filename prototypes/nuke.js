global.Nuke = class Nuke extends RoomObject {
  constructor(_pos, _room, _id, _launchRoomName, _timeToLand) {
    super(_pos, _room);
    this._id = _id;
    this._launchRoomName = _launchRoomName;
    this._timeToLand = _timeToLand;
  }
};
Object.defineProperty(Nuke, 'id', {
  get() { return this._id; }
});
Object.defineProperty(Nuke, 'launchRoomName', {
  get() { return this._launchRoomName; }
});
Object.defineProperty(Nuke, 'timeToLand', {
  get() { return this._timeToLand; }
});
