module.exports = {
  describeExits: function (roomName) {
    return {
      "1": "W8N4",    // TOP
      "3": "W7N3",    // RIGHT
      "5": "W8N2",    // BOTTOM
      "7": "W9N3"     // LEFT
    };
  },
  findExit: function (fromRoom, toRoom, opts = {}) {
    return FIND_EXIT_TOP;
  },
  findRoute: function (fromRoom, toRoom, opts = {}) {
    return [
      { exit: FIND_EXIT_RIGHT, room: 'arena21' },
      { exit: FIND_EXIT_BOTTOM, room: 'arena22' }
    ];
  },
  getRoomLinearDistance: function (roomName1, roomName2, continuous = false) {
    return 42;
  },
  getTerrainAt: function (x, y, roomName) {
    return 'swamp';
  },
  getWorldSize: function () {
    return 102;
  },
  isRoomAvailable: function (roomName) {
    return true;
  }
};
