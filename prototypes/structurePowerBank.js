global.StructurePowerBank = class StructurePowerBank extends Structure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _power, _ticksToDecay) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType);
    this._power = _power;
    this._ticksToDecay = _ticksToDecay;
  }
};

Object.defineProperty(StructurePowerBank, 'power', {
  get() { return this._power; }
});
Object.defineProperty(StructurePowerBank, 'ticksToDecay', {
  get() { return this._ticksToDecay; }
});
