PathFinder.CostMatrix = class CostMatrix {
  set(x, y, cost) {}
  get(x, y) { return 1; }
  clone() { return new CostMatrix(); }
  serialize() { return JSON.stringify(this); }
  static deserialize(val) { return new CostMatrix(); }
};