System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Camera, Component, UITransform, director, SingletonFactory, UIPage, ProxyData, GameItem, _crd;

  function GameMapper(name, bundleName, path, viewPath) {
    return function (target) {
      target.prototype.SymbolName = name;
      target.prototype.SymbolBundleName = bundleName;
      target.prototype.SymbolPath = path;
      target.prototype.SymbolViewPath = viewPath;
    };
  }

  function _reportPossibleCrUseOfSingletonFactory(extras) {
    _reporterNs.report("SingletonFactory", "../Util/SingletonFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPage(extras) {
    _reporterNs.report("UIPage", "./UIPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyData(extras) {
    _reporterNs.report("ProxyData", "../data/ProxyData", _context.meta, extras);
  }

  _export({
    default: void 0,
    GameMapper: GameMapper
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Camera = _cc.Camera;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
      director = _cc.director;
    }, function (_unresolved_2) {
      SingletonFactory = _unresolved_2.default;
    }, function (_unresolved_3) {
      UIPage = _unresolved_3.default;
    }, function (_unresolved_4) {
      ProxyData = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83c7fnHLghDFokTGtyHng+q", "GameItem", undefined);

      __checkObsolete__(['Camera', 'Component', 'UITransform', 'Node', 'director', 'find', 'js', 'v3']);

      _export("default", GameItem = class GameItem extends Component {
        onMount() {}

        onInit(...params) {}

        onShow() {}

        onHide() {}

        onCreated() {}

        is3D() {
          return this.node.getComponent(UITransform) == null;
        }

        get CameraNode() {
          let symbol = Symbol.for('CameraNodeSymbol');

          if (!this[symbol]) {
            let scene = director.getScene();
            this[symbol] = scene.getComponentInChildren(Camera).node;
            let mainCameraSymbol = Symbol.for('MainCameraSymbol');
            this[mainCameraSymbol] = this[symbol].getComponent(Camera);
          }

          return this[symbol];
        }

        get Camera() {
          let symbol = Symbol.for('MainCameraSymbol');

          if (!this[symbol]) {
            let cameraNodeSymbol = Symbol.for('CameraNodeSymbol');
            let scene = director.getScene();
            this[cameraNodeSymbol] = scene.getComponentInChildren(Camera);
            this[symbol] = this[cameraNodeSymbol].getComponent(Camera);
          }

          return this[symbol];
        }

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

        close(cb) {
          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
            error: Error()
          }), UIPage) : UIPage).stopGame(cb);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f86578f64ee8c4ed3cd3b11c152a67b3c63c6191.js.map