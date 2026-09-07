System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, Singleton, _dec, _class, _crd, LocallyData;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../Util/SingletonFactory", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1cd4f4nOt5Pc4egkIfZppCm", "LocallyData", undefined);

      __checkObsolete__(['sys']);

      _export("default", LocallyData = (_dec = (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton)(), _dec(_class = class LocallyData {
        getInt(key) {
          let val = sys.localStorage.getItem(key);
          return val != null ? val : 0;
        }

        setInt(key, value) {
          if (typeof value !== "number" || isNaN(value)) {
            ERROR("value must be a number ======>", value);
            return;
          }

          sys.localStorage.setItem(key, value.toString());
        }

        getChars(key) {
          let val = sys.localStorage.getItem(key);
          return val != null ? val : "";
        }

        setChars(key, value) {
          if (typeof value !== "string") {
            ERROR("value must be a string ======>", value);
            return;
          }

          sys.localStorage.setItem(key, value);
        }

        getBool(key) {
          let val = sys.localStorage.getItem(key);
          return val == "true";
        }

        setBool(key, value) {
          if (typeof value !== "boolean") {
            ERROR("value must be a boolean ======>", value);
            return;
          }

          sys.localStorage.setItem(key, value.toString());
        }

        getObj(key) {
          let val = sys.localStorage.getItem(key);
          return JSON.parse(val != null ? val : "{}");
        }

        setObj(key, value) {
          if (typeof value !== "object" || value === null) {
            ERROR("value must be an object ======>", value);
            return;
          }

          sys.localStorage.setItem(key, JSON.stringify(value));
        }

        remove(key) {
          sys.localStorage.removeItem(key);
        }

        clear() {
          sys.localStorage.clear();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4a2b776ab5f70113334189e7d040418f0451a53.js.map