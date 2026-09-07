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

        onInit() {}

        onShow() {}

        onHide() {}

        onCreated() {}

        is3D() {
          return this.node.getComponent(UITransform) == null;
        }

        get CameraNode() {
          var symbol = Symbol.for('CameraNodeSymbol');

          if (!this[symbol]) {
            var scene = director.getScene();
            this[symbol] = scene.getComponentInChildren(Camera).node;
            var mainCameraSymbol = Symbol.for('MainCameraSymbol');
            this[mainCameraSymbol] = this[symbol].getComponent(Camera);
          }

          return this[symbol];
        }

        get Camera() {
          var symbol = Symbol.for('MainCameraSymbol');

          if (!this[symbol]) {
            var cameraNodeSymbol = Symbol.for('CameraNodeSymbol');
            var scene = director.getScene();
            this[cameraNodeSymbol] = scene.getComponentInChildren(Camera);
            this[symbol] = this[cameraNodeSymbol].getComponent(Camera);
          }

          return this[symbol];
        }

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