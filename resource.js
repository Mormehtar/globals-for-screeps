global.Resource = class Resource extends RoomObject {
  constructor(_pos, _room, _amount, _id, _resourceType) {
    super(_pos, _room);
    this._amount = _amount;
    this._id = _id;
    this._resourceType = _resourceType;
  }
};
Object.defineProperty(Resource, 'amount', {
  get() { return this._amount; }
});
Object.defineProperty(Resource, 'id', {
  get() { return this._id; }
});
Object.defineProperty(Resource, 'resourceType', {
  get() { return this._resourceType; }
});
