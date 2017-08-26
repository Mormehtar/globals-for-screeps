global.StructureController = class StructureController extends OwnedStructure {
  constructor(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner,
              _level, _progress, _progressTotal, _reservation, _safeMode, _safeModeAvailable, _safeModeCooldown,
              _sign, _ticksToDowngrade, _upgradeBlocked
  ) {
    super(_pos, _room, _hits, _hitsMax, _id, _structureType, _my, _owner);
    this._level = _level;
    this._progress = _progress;
    this._progressTotal = _progressTotal;
    this._reservation = _reservation;
    this._safeMode = _safeMode;
    this._safeModeAvailable = _safeModeAvailable;
    this._safeModeCooldown = _safeModeCooldown;
    this._sign = _sign;
    this._ticksToDowngrade = _ticksToDowngrade;
    this._upgradeBlocked = _upgradeBlocked;
  }
  activateSafeMode() { return OK; }
  unclaim() { return OK; }
};

Object.defineProperty(StructureController, 'level', {
  get() { return this._level; }
});
Object.defineProperty(StructureController, 'progress', {
  get() { return this._progress; }
});
Object.defineProperty(StructureController, 'progressTotal', {
  get() { return this._progressTotal; }
});
Object.defineProperty(StructureController, 'reservation', {
  get() { return this._reservation; }
});
Object.defineProperty(StructureController, 'safeMode', {
  get() { return this._safeMode; }
});
Object.defineProperty(StructureController, 'safeModeAvailable', {
  get() { return this._safeModeAvailable; }
});
Object.defineProperty(StructureController, 'safeModeCooldown', {
  get() { return this._safeModeCooldown; }
});
Object.defineProperty(StructureController, 'sign', {
  get() { return this._sign; }
});
Object.defineProperty(StructureController, 'ticksToDowngrade', {
  get() { return this._ticksToDowngrade; }
});
Object.defineProperty(StructureController, 'upgradeBlocked', {
  get() { return this._upgradeBlocked; }
});
