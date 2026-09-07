System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, isValid, ProxyData, _crd;

  function ProxyAware(TargetClass) {
    var symbol = Symbol.for('observers');

    if (!TargetClass.prototype[symbol]) {
      TargetClass.prototype[symbol] = new Map();
    }

    return class extends TargetClass {
      constructor() {
        super(...arguments);
        var map = TargetClass.prototype[symbol];
        var keys = Array.from(map.keys());
        keys.forEach(key => {
          var list = TargetClass.prototype[symbol].get(key);
          var val = ProxyData.getDataSource(key);
          list.forEach(prop => {
            ProxyData.addObserver(key, this, prop);
            this[prop] = val;
          });
        });
      }

    };
  }

  function ProxySource(ProxyKey, DefaultValue) {
    ProxyData.setDataSource(ProxyKey, DefaultValue);
    return function (target, key) {
      delete target[key];
      var handler = {
        get: function get() {
          return ProxyData.getDataSource(ProxyKey);
        },
        set: function set(value) {
          ProxyData.setDataSource(ProxyKey, value);
          ProxyData.notifyObservers(ProxyKey);
        },
        enumerable: true,
        configurable: true
      };
      return handler;
    };
  }

  function ProxyObserver(ProxyKey) {
    return function (target, key) {
      var symbol = Symbol.for('observers');

      if (!target[symbol]) {
        target[symbol] = new Map();
      }

      if (!target[symbol].has(ProxyKey)) {
        target[symbol].set(ProxyKey, []);
      }

      target[symbol].get(ProxyKey).push(key);
    };
  }

  _export({
    default: void 0,
    ProxyAware: ProxyAware,
    ProxySource: ProxySource,
    ProxyObserver: ProxyObserver
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      isValid = _cc.isValid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff313pf1q1JMLJEJqt6Bzgn", "ProxyData", undefined);

      __checkObsolete__(['Component', 'Node', 'isValid']);

      _export("default", ProxyData = class ProxyData {
        static setDataSource(name, dataSource) {
          this.dataSources.set(name, dataSource);
        }

        static addObserver(name, inst, key) {
          if (!this.observers.has(name)) {
            this.observers.set(name, []);
          }

          if (this.observers.get(name).some(observer => observer.inst === inst && observer.key === key)) return;
          this.observers.get(name).push({
            inst,
            key
          });
        }

        static removeObserver(name, inst, key) {
          if (this.observers.has(name)) {
            var observers = this.observers.get(name);
            var index = observers.findIndex(observer => observer.inst === inst && observer.key === key);

            if (index >= 0) {
              observers.splice(index, 1);
            }
          }
        }

        static notifyObservers(name) {
          if (this.observers.has(name)) {
            var observers = this.observers.get(name);
            var filters = [];
            observers.forEach(observer => {
              if (!observer.inst || observer.inst instanceof Component && !isValid(observer.inst)) {
                filters.push(observer);
                return;
              }

              observer.inst[observer.key] = this.dataSources.get(name);
            });
            var newObservers = observers.filter(observer => {
              return filters.indexOf(observer) === -1;
            });
            this.observers.set(name, newObservers);
          }
        }

        static getDataSource(name) {
          return this.dataSources.get(name);
        }

      });

      ProxyData.dataSources = new Map();
      ProxyData.observers = new Map();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=12c65421cc0155055b91675091185216d6546867.js.map