System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, js, SingletonFactory, UIPage, TEA_UI_TYPE, ProxyData, UIView, FullView, PopView, TipView, ResidentView, _crd, ShowType;

  function onMount(target, key, descriptor) {
    const originalMethod = descriptor.value;
    const originaOnMount = target.onMount;

    target.onMount = function () {
      originaOnMount && originaOnMount.apply(this);
      return originalMethod.apply(this);
    };

    delete target[key];
    return descriptor;
  }

  function onInit(target, key, descriptor) {
    const originalMethod = descriptor.value;
    const originaOnInit = target.onInit;

    target.onInit = function (...params) {
      originaOnInit && originaOnInit.apply(this);
      return originalMethod.apply(this, params);
    };

    delete target[key];
    return descriptor;
  }

  function onShow(target, key, descriptor) {
    const originalMethod = descriptor.value;
    const originaOnShow = target.onShow;

    target.onShow = function () {
      originaOnShow && originaOnShow.apply(this);
      return originalMethod.apply(this);
    };

    delete target[key];
    return descriptor;
  }

  function onHide(target, key, descriptor) {
    const originalMethod = descriptor.value;
    const originaOnHide = target.onHide;

    target.onHide = function () {
      originaOnHide && originaOnHide.apply(this);
      return originalMethod.apply(this);
    };

    delete target[key];
    return descriptor;
  }

  function onCreated(target, key, descriptor) {
    const originalMethod = descriptor.value;
    const originaOnCreated = target.onCreated;

    target.onCreated = function () {
      originaOnCreated && originaOnCreated.apply(this);
      return originalMethod.apply(this);
    };

    delete target[key];
    return descriptor;
  }

  function _reportPossibleCrUseOfSingletonFactory(extras) {
    _reporterNs.report("SingletonFactory", "../Util/SingletonFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPage(extras) {
    _reporterNs.report("UIPage", "./UIPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTEA_UI_TYPE(extras) {
    _reporterNs.report("TEA_UI_TYPE", "./UIPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameItem(extras) {
    _reporterNs.report("GameItem", "./GameItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyData(extras) {
    _reporterNs.report("ProxyData", "../data/ProxyData", _context.meta, extras);
  }

  _export({
    UIView: void 0,
    FullView: void 0,
    PopView: void 0,
    TipView: void 0,
    ResidentView: void 0,
    onMount: onMount,
    onInit: onInit,
    onShow: onShow,
    onHide: onHide,
    onCreated: onCreated
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      js = _cc.js;
    }, function (_unresolved_2) {
      SingletonFactory = _unresolved_2.default;
    }, function (_unresolved_3) {
      UIPage = _unresolved_3.default;
      TEA_UI_TYPE = _unresolved_3.TEA_UI_TYPE;
    }, function (_unresolved_4) {
      ProxyData = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51846wYtvJGmoHxkOS9HanK", "UIView", undefined);

      __checkObsolete__(['Component', 'js']);

      _export("UIView", UIView = class UIView extends Component {
        constructor(...args) {
          super(...args);

          /**占位，勿使用同名变量名 */
          this.SymbolBundleName = void 0;
        }

        onMount() {}

        onInit(...params) {}

        onShow() {}

        onHide() {}

        onCreated() {}

        /**
         * Full视图建议调用pop、switch、resetTo方法或重写ShowType类型后调用show，否则show方法会使用默认的ShowType
         * @param params
         */
        static show(...params) {}

        TeaUIPageMount() {
          let onMounts = Symbol.for('TeaMounts');
          let onShows = Symbol.for('TeaShows');
          let onHides = Symbol.for('TeaHides');
          this[onMounts] = this[onMounts] || [];
          this[onShows] = this[onShows] || [];
          this[onHides] = this[onHides] || [];
          this[onMounts].push(this.onMount.bind(this));
          this[onShows].push(this.onShow.bind(this));
          this[onHides].push(this.onHide.bind(this));

          if (this.UIType === (_crd && TEA_UI_TYPE === void 0 ? (_reportPossibleCrUseOfTEA_UI_TYPE({
            error: Error()
          }), TEA_UI_TYPE) : TEA_UI_TYPE).TIP) {
            let fun = function () {
              if (this.timer > 0) {
                this.scheduleOnce(() => {
                  this.hide();

                  if (this.queue.length > 0) {
                    this.queue.shift()();
                  }
                }, this.timer);
              }
            };

            this[onShows].push(fun.bind(this));
          }

          this[onMounts].forEach(fun => {
            fun();
          });
        }

        TeaUIPageShow() {
          let symbol = Symbol.for('observers');
          let TargetClass = this.constructor;

          if (TargetClass.prototype[symbol]) {
            let map = TargetClass.prototype[symbol];
            let keys = Array.from(map.keys());
            keys.forEach(key => {
              let list = TargetClass.prototype[symbol].get(key);
              let val = (_crd && ProxyData === void 0 ? (_reportPossibleCrUseOfProxyData({
                error: Error()
              }), ProxyData) : ProxyData).getDataSource(key);
              list.forEach(prop => {
                (_crd && ProxyData === void 0 ? (_reportPossibleCrUseOfProxyData({
                  error: Error()
                }), ProxyData) : ProxyData).addObserver(key, this, prop);
                this[prop] = val;
              });
            });
          }

          let onShows = Symbol.for('TeaShows');
          this[onShows].forEach(fun => {
            fun();
          });
        }

        TeaUIPageHide() {
          let symbol = Symbol.for('observers');
          let TargetClass = this.constructor;

          if (TargetClass.prototype[symbol]) {
            let map = TargetClass.prototype[symbol];
            let keys = Array.from(map.keys());
            keys.forEach(key => {
              let list = TargetClass.prototype[symbol].get(key);
              list.forEach(prop => {
                (_crd && ProxyData === void 0 ? (_reportPossibleCrUseOfProxyData({
                  error: Error()
                }), ProxyData) : ProxyData).removeObserver(key, this, prop);
              });
            });
          }

          let onHides = Symbol.for('TeaHides');
          this[onHides].forEach(fun => {
            fun();
          });
        }

        hide() {
          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage).HideUI(this);
        }

        static hide() {
          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage).HideUI(js.getClassName(this));
        }

        getInst(classType) {
          return (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(classType);
        }

      });

      _export("FullView", FullView = class FullView extends UIView {
        constructor(...args) {
          super(...args);
          this.ShowType = ShowType.Stack;
          this.UIType = (_crd && TEA_UI_TYPE === void 0 ? (_reportPossibleCrUseOfTEA_UI_TYPE({
            error: Error()
          }), TEA_UI_TYPE) : TEA_UI_TYPE).FULL;
        }

        back() {
          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage).BackUI();
        }

        static show(...uiData) {
          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage).PopView(js.getClassName(this), ...uiData);
        }

        static switch(...uiData) {
          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage).SwitchView(js.getClassName(this), ...uiData);
        }

        static resetTo(...uiData) {
          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage).ResetToView(js.getClassName(this), ...uiData);
        }

      });

      _export("PopView", PopView = class PopView extends UIView {
        constructor(...args) {
          super(...args);
          this.UIType = (_crd && TEA_UI_TYPE === void 0 ? (_reportPossibleCrUseOfTEA_UI_TYPE({
            error: Error()
          }), TEA_UI_TYPE) : TEA_UI_TYPE).POP;
        }

        static show(...params) {
          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage)['ShowDialog'](js.getClassName(this), ...params);
        }

      });

      _export("TipView", TipView = class TipView extends UIView {
        constructor(...args) {
          super(...args);
          this.UIType = (_crd && TEA_UI_TYPE === void 0 ? (_reportPossibleCrUseOfTEA_UI_TYPE({
            error: Error()
          }), TEA_UI_TYPE) : TEA_UI_TYPE).TIP;
          this.queue = [];
          this.timer = 3;
        }

        static show(...params) {
          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage)['ShowTip'](js.getClassName(this), ...params);
        }

      });

      _export("ResidentView", ResidentView = class ResidentView extends UIView {
        constructor(...args) {
          super(...args);
          this.UIType = (_crd && TEA_UI_TYPE === void 0 ? (_reportPossibleCrUseOfTEA_UI_TYPE({
            error: Error()
          }), TEA_UI_TYPE) : TEA_UI_TYPE).RESIDENT;
        }

        static show(...params) {
          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage)['ShowCommon'](js.getClassName(this), ...params);
        }

      });

      _export("ShowType", ShowType = /*#__PURE__*/function (ShowType) {
        ShowType[ShowType["Stack"] = 0] = "Stack";
        ShowType[ShowType["Switch"] = 1] = "Switch";
        ShowType[ShowType["ResetTo"] = 2] = "ResetTo";
        return ShowType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24a51135d454a918abdb28c02fa0797edd16b93a.js.map