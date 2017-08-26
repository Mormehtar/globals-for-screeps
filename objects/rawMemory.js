global.RawMemory = {
  segments: {},
  foreignSegment: {
    username: 'blah',
    id: 42,
    data:'{"sense":42}'
  },
  interShardSegment: '{"sense":42}',
  get() { return '{"sense":42}'; },
  set(value) {},
  setActiveSegments(ids) {},
  setActiveForeignSegment(username, id) {},
  setDefaultPublicSegment(id) {},
  setPublicSegments(ids) {}
};