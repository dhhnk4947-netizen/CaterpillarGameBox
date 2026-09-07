System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "cc/env", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, js, sp, UIPage, EventManager, SingletonFactory, DEBUG, DEV, EDITOR, LogApi, LogApiManager, _class, _crd, Preset;

  //#region 按钮点击防抖
  // function btnUnDots(timer) {
  //     return function (target) {
  //         let _onTouchEnded = Button.prototype['_onTouchEnded'];
  //         Button.prototype['_customIsClicked'] = false;
  //         Button.prototype['_onTouchEnded'] = function (event) {
  //             if (this._customIsClicked) {
  //                 if (!this._interactable || !this.enabledInHierarchy) {
  //                     return;
  //                 }
  //                 this._pressed = false;
  //                 this._updateState();
  //                 if (event) {
  //                     event.propagationStopped = true;
  //                 }
  //                 return
  //             };
  //             this._customIsClicked = true;
  //             _onTouchEnded.call(this, event);
  //             setTimeout(() => {
  //                 this._customIsClicked = false;
  //             }, 1000 * timer);
  //         };
  //     }
  // }
  // #endregion
  //#region 骨骼动画预览
  function previewSkeleton(target) {
    if (!EDITOR) return;
    let TrackBinding = js.getClassByName("cc.animation.TrackBinding");
    const origincreateRuntimeBinding = TrackBinding.prototype.createRuntimeBinding;

    TrackBinding.prototype.createRuntimeBinding = function (target, poseOutput, isConstant) {
      let res = origincreateRuntimeBinding.call(this, target, poseOutput, isConstant);
      const originSet = res.setValue;

      res.setValue = function (value) {
        if (res.target instanceof sp.Skeleton) {
          if (value != res.getValue()) {
            originSet.call(this, value);
          }
        } else {
          originSet.call(this, value);
        }
      };

      return res;
    };

    const originProload = sp.Skeleton.prototype.__preload;

    sp.Skeleton.prototype.__preload = function () {
      originProload.call(this);
      this.paused = false;

      this._updateSkeletonData();

      this._updateDebugDraw();
    };
  } //#endregion
  //#region 全局挂载


  function GlobalMount(target) {
    globalThis.on = (key, cb, sort, target) => {
      (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
        error: Error()
      }), EventManager) : EventManager).on(key, cb, sort, target);
    };

    globalThis.once = (key, cb, sort, target) => {
      (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
        error: Error()
      }), EventManager) : EventManager).once(key, cb, sort, target);
    };

    globalThis.trigger = (key, ...args) => {
      (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
        error: Error()
      }), EventManager) : EventManager).trigger(key, ...args);
    };

    globalThis.off = (key, param) => {
      (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
        error: Error()
      }), EventManager) : EventManager).off(key, param);
    };

    globalThis.clearEvent = key => {
      (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
        error: Error()
      }), EventManager) : EventManager).clearEvent(key);
    };

    globalThis.getInst = classType => {
      return (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(classType);
    };

    globalThis.startGame = classType => {
      return (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
        error: Error()
      }), UIPage) : UIPage).startGame(classType);
    };

    globalThis.stopGame = cb => {
      return (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
        error: Error()
      }), UIPage) : UIPage).stopGame(cb);
    };

    globalThis.LOG = (...args) => {
      if (!DEV && !DEBUG) return;
      let api = (_crd && LogApiManager === void 0 ? (_reportPossibleCrUseOfLogApiManager({
        error: Error()
      }), LogApiManager) : LogApiManager).getMethodPath();
      (_crd && LogApiManager === void 0 ? (_reportPossibleCrUseOfLogApiManager({
        error: Error()
      }), LogApiManager) : LogApiManager).log(api[0], api[1], ...args);
    };

    globalThis.WARN = (...args) => {
      if (!DEV && !DEBUG) return;
      let api = (_crd && LogApiManager === void 0 ? (_reportPossibleCrUseOfLogApiManager({
        error: Error()
      }), LogApiManager) : LogApiManager).getMethodPath();
      (_crd && LogApiManager === void 0 ? (_reportPossibleCrUseOfLogApiManager({
        error: Error()
      }), LogApiManager) : LogApiManager).warn(api[0], api[1], ...args);
    };

    globalThis.ERROR = (...args) => {
      if (!DEV && !DEBUG) return;
      let api = (_crd && LogApiManager === void 0 ? (_reportPossibleCrUseOfLogApiManager({
        error: Error()
      }), LogApiManager) : LogApiManager).getMethodPath();
      (_crd && LogApiManager === void 0 ? (_reportPossibleCrUseOfLogApiManager({
        error: Error()
      }), LogApiManager) : LogApiManager).error(api[0], api[1], ...args);
    };

    globalThis.LogApi = _crd && LogApi === void 0 ? (_reportPossibleCrUseOfLogApi({
      error: Error()
    }), LogApi) : LogApi;

    globalThis.ResetTo = (uiName, ...params) => {
      let uiPage = (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
        error: Error()
      }), UIPage) : UIPage);
      uiPage.constructor.prototype.ResetToView.call(uiPage, uiName, ...params);
    };

    globalThis.PopTo = (uiName, ...params) => {
      let uiPage = (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
        error: Error()
      }), UIPage) : UIPage);
      uiPage.constructor.prototype.PopView.call(uiPage, uiName, ...params);
    };

    globalThis.SwitchTo = (uiName, ...params) => {
      let uiPage = (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
        error: Error()
      }), UIPage) : UIPage);
      uiPage.constructor.prototype.SwitchView.call(uiPage, uiName, ...params);
    };

    globalThis.ShowDialog = (uiName, ...params) => {
      let uiPage = (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
        error: Error()
      }), UIPage) : UIPage);
      uiPage.constructor.prototype.ShowDialog.call(uiPage, uiName, ...params);
    };

    globalThis.ShowTip = (uiName, ...params) => {
      let uiPage = (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
        error: Error()
      }), UIPage) : UIPage);
      uiPage.constructor.prototype.ShowTip.call(uiPage, uiName, ...params);
    };

    globalThis.ShowCommon = (uiName, ...params) => {
      let uiPage = (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
        error: Error()
      }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
        error: Error()
      }), UIPage) : UIPage);
      uiPage.constructor.prototype.ShowCommon.call(uiPage, uiName, ...params);
    };
  } //#endregion


  function _reportPossibleCrUseOfUIPage(extras) {
    _reporterNs.report("UIPage", "../UI/UIPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Util/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingletonFactory(extras) {
    _reporterNs.report("SingletonFactory", "../Util/SingletonFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogApi(extras) {
    _reporterNs.report("LogApi", "../Util/LogApi", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogApiManager(extras) {
    _reporterNs.report("LogApiManager", "../Util/LogApi", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      js = _cc.js;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      UIPage = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      SingletonFactory = _unresolved_4.default;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
      DEV = _ccEnv.DEV;
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_5) {
      LogApi = _unresolved_5.LogApi;
      LogApiManager = _unresolved_5.LogApiManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae878eZ171GHYPPW+gmqiUz", "Preset", undefined);

      __checkObsolete__(['Button', 'Director', 'Game', '_decorator', 'director', 'game', 'js', 'sp']);

      // @btnUnDots(1)
      _export("Preset", Preset = GlobalMount(_class = previewSkeleton(_class = class Preset {}) || _class) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=450f4bf87e01483c0555ff8a1a7007d732c76681.js.map