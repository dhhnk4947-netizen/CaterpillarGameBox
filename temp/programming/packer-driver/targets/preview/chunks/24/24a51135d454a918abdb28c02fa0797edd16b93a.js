System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, js, SingletonFactory, UIPage, TEA_UI_TYPE, ProxyData, UIView, FullView, PopView, TipView, ResidentView, _crd, ShowType;

  function onMount(target, key, descriptor) {
    var originalMethod = descriptor.value;
    var originaOnMount = target.onMount;

    target.onMount = function () {
      originaOnMount && originaOnMount.apply(this);
      return originalMethod.apply(this);
    };

    delete target[key];
    return descriptor;
  }

  function onInit(target, key, descriptor) {
    var originalMethod = descriptor.value;
    var originaOnInit = target.onInit;

    target.onInit = function () {
      originaOnInit && originaOnInit.apply(this);

      for (var _len7 = arguments.length, params = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        params[_key7] = arguments[_key7];
      }

      return originalMethod.apply(this, params);
    };

    delete target[key];
    return descriptor;
  }

  function onShow(target, key, descriptor) {
    var originalMethod = descriptor.value;
    var originaOnShow = target.onShow;

    target.onShow = function () {
      originaOnShow && originaOnShow.apply(this);
      return originalMethod.apply(this);
    };

    delete target[key];
    return descriptor;
  }

  function onHide(target, key, descriptor) {
    var originalMethod = descriptor.value;
    var originaOnHide = target.onHide;

    target.onHide = function () {
      originaOnHide && originaOnHide.apply(this);
      return originalMethod.apply(this);
    };

    delete target[key];
    return descriptor;
  }

  function onCreated(target, key, descriptor) {
    var originalMethod = descriptor.value;
    var originaOnCreated = target.onCreated;

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
        constructor() {
          super(...arguments);

          /**占位，勿使用同名变量名 */
          this.SymbolBundleName = void 0;
        }

        onMount() {}

        onInit() {}

        onShow() {}

        onHide() {}

        onCreated() {}

        /**
         * Full视图建议调用pop、switch、resetTo方法或重写ShowType类型后调用show，否则show方法会使用默认的ShowType
         * @param params
         */
        static show() {}

        TeaUIPageMount() {
          var onMounts = Symbol.for('TeaMounts');
          var onShows = Symbol.for('TeaShows');
          var onHides = Symbol.for('TeaHides');
          this[onMounts] = this[onMounts] || [];
          this[onShows] = this[onShows] || [];
          this[onHides] = this[onHides] || [];
          this[onMounts].push(this.onMount.bind(this));
          this[onShows].push(this.onShow.bind(this));
          this[onHides].push(this.onHide.bind(this));

          if (this.UIType === (_crd && TEA_UI_TYPE === void 0 ? (_reportPossibleCrUseOfTEA_UI_TYPE({
            error: Error()
          }), TEA_UI_TYPE) : TEA_UI_TYPE).TIP) {
            var fun = function fun() {
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
          var symbol = Symbol.for('observers');
          var TargetClass = this.constructor;

          if (TargetClass.prototype[symbol]) {
            var map = TargetClass.prototype[symbol];
            var keys = Array.from(map.keys());
            keys.forEach(key => {
              var list = TargetClass.prototype[symbol].get(key);
              var val = (_crd && ProxyData === void 0 ? (_reportPossibleCrUseOfProxyData({
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

          var onShows = Symbol.for('TeaShows');
          this[onShows].forEach(fun => {
            fun();
          });
        }

        TeaUIPageHide() {
          var symbol = Symbol.for('observers');
          var TargetClass = this.constructor;

          if (TargetClass.prototype[symbol]) {
            var map = TargetClass.prototype[symbol];
            var keys = Array.from(map.keys());
            keys.forEach(key => {
              var list = TargetClass.prototype[symbol].get(key);
              list.forEach(prop => {
                (_crd && ProxyData === void 0 ? (_reportPossibleCrUseOfProxyData({
                  error: Error()
                }), ProxyData) : ProxyData).removeObserver(key, this, prop);
              });
            });
          }

          var onHides = Symbol.for('TeaHides');
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
        constructor() {
          super(...arguments);
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

        static show() {
          for (var _len = arguments.length, uiData = new Array(_len), _key = 0; _key < _len; _key++) {
            uiData[_key] = arguments[_key];
          }

          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage).PopView(js.getClassName(this), ...uiData);
        }

        static switch() {
          for (var _len2 = arguments.length, uiData = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            uiData[_key2] = arguments[_key2];
          }

          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage).SwitchView(js.getClassName(this), ...uiData);
        }

        static resetTo() {
          for (var _len3 = arguments.length, uiData = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            uiData[_key3] = arguments[_key3];
          }

          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage).ResetToView(js.getClassName(this), ...uiData);
        }

      });

      _export("PopView", PopView = class PopView extends UIView {
        constructor() {
          super(...arguments);
          this.UIType = (_crd && TEA_UI_TYPE === void 0 ? (_reportPossibleCrUseOfTEA_UI_TYPE({
            error: Error()
          }), TEA_UI_TYPE) : TEA_UI_TYPE).POP;
        }

        static show() {
          for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            params[_key4] = arguments[_key4];
          }

          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage)['ShowDialog'](js.getClassName(this), ...params);
        }

      });

      _export("TipView", TipView = class TipView extends UIView {
        constructor() {
          super(...arguments);
          this.UIType = (_crd && TEA_UI_TYPE === void 0 ? (_reportPossibleCrUseOfTEA_UI_TYPE({
            error: Error()
          }), TEA_UI_TYPE) : TEA_UI_TYPE).TIP;
          this.queue = [];
          this.timer = 3;
        }

        static show() {
          for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            params[_key5] = arguments[_key5];
          }

          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage)['ShowTip'](js.getClassName(this), ...params);
        }

      });

      _export("ResidentView", ResidentView = class ResidentView extends UIView {
        constructor() {
          super(...arguments);
          this.UIType = (_crd && TEA_UI_TYPE === void 0 ? (_reportPossibleCrUseOfTEA_UI_TYPE({
            error: Error()
          }), TEA_UI_TYPE) : TEA_UI_TYPE).RESIDENT;
        }

        static show() {
          for (var _len6 = arguments.length, params = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            params[_key6] = arguments[_key6];
          }

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