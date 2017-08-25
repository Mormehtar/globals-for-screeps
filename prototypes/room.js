global.Room = class Room {
  constructor(_controller, _energyAvailable, _energyCapacityAvailable, _memory, _name, _storage, _terminal, _visual) {
    this._controller = _controller;
    this._energyAvailable = _energyAvailable;
    this._energyCapacityAvailable = _energyCapacityAvailable;
    this._memory = _memory;
    this._name = _name;
    this._storage = _storage;
    this._terminal = _terminal;
    this._visual = _visual;
  }
  serializePath(path) { return JSON.stringify(path); }
  deserializePath(path) { return JSON.parse(path); }
  createConstructionSite(x, y, structureType) { return OK; }
  createFlag(x, y, name = null, color = null, secondaryColor = null) { return {}; }
  find(type, opts = {}) { return []; }
  findExitTo(room) { return FIND_EXIT_LEFT; }
  findPath(fromPos, toPos, opts={}) {
    return [
      { x: 10, y: 5, dx: 1,  dy: 0, direction: RIGHT },
      { x: 10, y: 6, dx: 0,  dy: 1, direction: BOTTOM },
      { x: 9,  y: 7, dx: -1, dy: 1, direction: BOTTOM_LEFT }
    ];
  }
  getPositionAt(x, y) { return new RoomPosition(x, y, this.name); }
  lookAt(x, y) { return [ { type: 'terrain', terrain: 'swamp' } ]; }
  lookAtArea(top, left, bottom, right, asArray = false) {
    return {
      10: {
        5: [{ type: 'terrain', terrain: 'swamp' }],
        6: [{ type: 'terrain', terrain: 'swamp' }],
        7: [{ type: 'terrain', terrain: 'swamp' }]
      },
      11: {
        5: [{ type: 'terrain', terrain: 'plain' }],
        6: [{ type: 'terrain', terrain: 'swamp' }],
        7: [{ type: 'terrain', terrain: 'wall' }]
      }
    };
  }
  lookForAt(type, x, y) {
    return [{ type: 'terrain', terrain: 'swamp' }];
  }
  lookForAtArea(type, top, left, bottom, right, asArray = false) {
    return {
      10: {
        6: undefined,
        7: undefined
      },
      11: {
        6: undefined,
        7: undefined
      }
    };
  }
};
Object.defineProperty(Room, 'controller', {
  get() { return this._controller; }
});
Object.defineProperty(Room, 'energyAvailable', {
  get() { return this._energyAvailable; }
});
Object.defineProperty(Room, 'energyCapacityAvailable', {
  get() { return this._energyCapacityAvailable; }
});
Object.defineProperty(Room, 'memory', {
  get() { return this._memory; }
});
Object.defineProperty(Room, 'name', {
  get() { return this._name; }
});
Object.defineProperty(Room, 'storage', {
  get() { return this._storage; }
});
Object.defineProperty(Room, 'terminal', {
  get() { return this._terminal; }
});
Object.defineProperty(Room, 'visual', {
  get() { return this._visual; }
});
