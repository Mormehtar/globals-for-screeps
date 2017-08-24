global.Game = {};
Game.prototype.constructionSites = {};
Game.prototype.cpu = {
  limit: 1,
  tickLimit: 2,
  bucket: 100
};
Game.prototype.creeps = {};
Game.prototype.flags = {};
Game.prototype.gcl = {
  level: 1,
  progress: 5,
  progressTotal: 8
};
Game.prototype.map = require('./map');
Game.prototype.market = require('./market');
Game.prototype.resources = {};
Game.prototype.rooms = {};
Game.prototype.shard = {
  name: 'blah',
  type: 'normal',
  ptr: false
};
Game.prototype.spawns = {};
Game.prototype.structures = {};
Game.prototype.time = 42;
Game.prototype.cpu.getUsed = function () { return 15.5; };
Game.prototype.getObjectById = function (id) { return {}; };
Game.prototype.notify = function (message, groupInterval = 0) {};
