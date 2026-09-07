System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SingletonFactory, Singleton, _dec, _class, _crd, BranchStrategy;

  function Branch(base, branchKey) {
    return function (target, key, descriptor) {
      (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(BranchStrategy)['_add'](base, branchKey, descriptor.value);
      return descriptor;
    };
  }

  function _reportPossibleCrUseOfSingletonFactory(extras) {
    _reporterNs.report("SingletonFactory", "./SingletonFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./SingletonFactory", _context.meta, extras);
  }

  _export("Branch", Branch);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SingletonFactory = _unresolved_2.default;
      Singleton = _unresolved_2.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "313261TaxRBWqzVaI6ISkfI", "BranchStrategy", undefined);

      _export("default", BranchStrategy = (_dec = (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton)(), _dec(_class = class BranchStrategy {
        constructor() {
          this._cache = new Map();
        }

        _add(key, branch, func) {
          if (!this._cache.has(key)) {
            this._cache.set(key, new Map());
          }

          this._cache.get(key).set(branch, func);
        }

        _get(key, branch) {
          if (!this._cache.has(key) || !this._cache.get(key).has(branch)) return null;
          return this._cache.get(key).get(branch);
        }

        Call(target, baseKey, branchKey, ...args) {
          let func = this._get(baseKey, branchKey);

          func && func.call(target, ...args);
        }

        remove(baseKey) {
          if (!this._cache.has(baseKey)) return;

          this._cache.delete(baseKey);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24151802ccc33fda32aaaaa5d3f0f252bc70b3a7.js.map