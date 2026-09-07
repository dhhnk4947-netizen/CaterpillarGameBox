System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UUID, SingletonFactory, _crd, checkIsClass;

  function Singleton() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return function (target) {
      if (checkIsClass(target)) {
        SingletonFactory.setInst(target, ...args);
      }
    };
  }

  function Autowired(constructor) {
    return function (target, propertyName) {
      delete target[propertyName];
      var handler = {
        get: function get() {
          return SingletonFactory.getInst(constructor);
        },
        set: function set(value) {},
        enumerable: true,
        configurable: true
      };
      return handler;
    };
  }

  function _reportPossibleCrUseOfUUID(extras) {
    _reporterNs.report("UUID", "./UUID", _context.meta, extras);
  }

  _export({
    default: void 0,
    Singleton: Singleton,
    Autowired: Autowired
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      UUID = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5d2d4YXVFPA5nGV33njaZj", "SingletonFactory", undefined);

      _export("default", SingletonFactory = class SingletonFactory {
        static getInst(classType) {
          var key = classType['_singletonId'];

          if (!key || !this._instances[key]) {
            console.error("无实例");
            return null;
          }

          return this._instances[key];
        }

        static setInst(classType) {
          if (classType._singletonId) return;
          var key = (_crd && UUID === void 0 ? (_reportPossibleCrUseOfUUID({
            error: Error()
          }), UUID) : UUID).generateUUID();

          while (this._instances[key]) {
            key = (_crd && UUID === void 0 ? (_reportPossibleCrUseOfUUID({
              error: Error()
            }), UUID) : UUID).generateUUID();
          }

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          this._instances[key] = new classType(...args);
          classType._singletonId = key;
        }

      });

      SingletonFactory._instances = new Map();

      checkIsClass = function checkIsClass(target) {
        return typeof target === "function" && "prototype" in target && target.prototype.constructor === target;
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5aa4602142647299e494c5279080b21df8b17ba8.js.map