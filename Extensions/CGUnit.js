import objMgr, {me} from "../Core/ObjectManager";

Object.defineProperties(wow.CGUnit.prototype, {
  hasAuraByMe: {
    value: function (name) {
      return this.auras.find(aura =>
        aura.name === name &&
        aura.casterGuid &&
        me.guid &&
        me.guid.equals(aura.casterGuid)
      );
    }
  },

  hasAura: {
    value: function (name) {
      return this.auras.some(aura => aura.name === name);
    }
  },

  getAura: {
    value: function (name) {
      for (let aura of this.auras) {
        if (aura.name === name) {
          return aura;
        }
      }
      return null;
    }
  },

  targetUnit: {
    get: function () {
      return objMgr.getObjectByGuid(this.target);
    }
  }
});

export default true;
