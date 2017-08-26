global.Game = {
  constructionSites: {},
  cpu: {
    limit: 1,
    tickLimit: 2,
    bucket: 100,
    getUsed: function () { return 15.5; }
  },
  creeps: {},
  flags: {},
  gcl: {
    level: 1,
    progress: 5,
    progressTotal: 8
  },
  map: require('./map'),
  market: require('./market'),
  resources: {},
  rooms: {},
  shard: {
    name: 'blah',
    type: 'normal',
    ptr: false
  },
  spawns: {},
  structures: {},
  time: 42,
  getObjectById: function (id) { return {}; },
  notify: function (message, groupInterval = 0) {}
};
