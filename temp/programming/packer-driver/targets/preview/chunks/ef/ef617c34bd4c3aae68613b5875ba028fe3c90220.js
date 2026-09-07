System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventBase, Singleton, _dec, _class, _crd, EventManager;

  function _reportPossibleCrUseOfEventBase(extras) {
    _reporterNs.report("EventBase", "./EventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./SingletonFactory", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventBase = _unresolved_2.EventBase;
    }, function (_unresolved_3) {
      Singleton = _unresolved_3.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07df6Uzf5hDZppn09S4RL8W", "EventManager", undefined);

      /**
       * 事件管理器新建模板
       * export class {ClassName} extends EventBase{}
       */
      _export("default", EventManager = (_dec = (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton)(), _dec(_class = class EventManager extends (_crd && EventBase === void 0 ? (_reportPossibleCrUseOfEventBase({
        error: Error()
      }), EventBase) : EventBase) {}) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef617c34bd4c3aae68613b5875ba028fe3c90220.js.map