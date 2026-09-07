System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, NodePool, Prefab, instantiate, AssetsManager, Singleton, DefaultValue, Value, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ObjPoolManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetsManager(extras) {
    _reporterNs.report("AssetsManager", "./AssetsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./SingletonFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefaultValue(extras) {
    _reporterNs.report("DefaultValue", "../decorators/tea.decorators", _context.meta, extras);
  }

  function _reportPossibleCrUseOfValue(extras) {
    _reporterNs.report("Value", "../decorators/tea.decorators", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      AssetsManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      Singleton = _unresolved_3.Singleton;
    }, function (_unresolved_4) {
      DefaultValue = _unresolved_4.DefaultValue;
      Value = _unresolved_4.Value;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64024IlsjNFAJvS4IrUR/hZ", "ObjPoolManager", undefined);

      __checkObsolete__(['NodePool', 'Prefab', 'instantiate', 'Node']);

      _export("default", ObjPoolManager = (_dec = (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton)(), _dec2 = (_crd && Value === void 0 ? (_reportPossibleCrUseOfValue({
        error: Error()
      }), Value) : Value)(new Map()), _dec3 = (_crd && Value === void 0 ? (_reportPossibleCrUseOfValue({
        error: Error()
      }), Value) : Value)(new Map()), _dec4 = (_crd && Value === void 0 ? (_reportPossibleCrUseOfValue({
        error: Error()
      }), Value) : Value)(new Map()), _dec5 = (_crd && DefaultValue === void 0 ? (_reportPossibleCrUseOfDefaultValue({
        error: Error()
      }), DefaultValue) : DefaultValue)(10), _dec(_class = (_class2 = class ObjPoolManager {
        constructor() {
          _initializerDefineProperty(this, "_pools", _descriptor, this);

          _initializerDefineProperty(this, "_poolMaxSize", _descriptor2, this);

          _initializerDefineProperty(this, "_prefabMap", _descriptor3, this);

          _initializerDefineProperty(this, "defaultMaxSize", _descriptor4, this);
        }

        initPool(objs, onProgress, onComplete) {
          this.clear();
          let total = objs.length;
          let finish = 0;
          let progressCb, completeCb;

          if (onProgress && onProgress.length === 3) {
            progressCb = onProgress;
          }

          if (onProgress && onProgress.length === 1) {
            completeCb = onProgress;
          }

          if (onComplete) {
            completeCb = onComplete;
          }

          progressCb && progressCb(0, total, null);
          objs.forEach(obj => {
            let name = obj.name;
            let path = obj.path || obj.name;
            let abPackage = obj.abPackage || "";
            let size = obj.size || 0;
            let maxSize = obj.maxSize || this.defaultMaxSize;
            (_crd && AssetsManager === void 0 ? (_reportPossibleCrUseOfAssetsManager({
              error: Error()
            }), AssetsManager) : AssetsManager).load(path, abPackage, Prefab, (err, prefab) => {
              if (err) {
                completeCb && completeCb(err);
                return;
              }

              this._poolMaxSize.set(name, maxSize);

              this._prefabMap.set(name, prefab);

              let pool = new NodePool(name);

              for (let i = 0; i < size; i++) {
                let node = instantiate(prefab);
                node.name = name;
                pool.put(node);
              }

              this._pools.set(obj.name, pool);

              progressCb && progressCb(0, total, pool);
              finish++;
              finish === total && completeCb && completeCb(null);
            });
          });
        }

        addRef(node, name, capacity) {
          let objName = node.name;
          let size = 0;
          let maxSize = this.defaultMaxSize;

          if (typeof name === "string") {
            objName = name.length > 0 ? name : node.name;
          }

          if (typeof name === "object") {
            size = capacity.size || 0;
            maxSize = capacity.maxSize || this.defaultMaxSize;
          }

          if (capacity) {
            size = capacity.size || 0;
            maxSize = capacity.maxSize || this.defaultMaxSize;
          }

          let pool = new NodePool(objName);

          for (let index = 0; index < size; index++) {
            let item = instantiate(node);
            item.name = objName;
            pool.put(item);
          }

          this._pools.set(objName, pool);

          this._poolMaxSize.set(objName, maxSize);

          this._prefabMap.set(objName, node);

          node instanceof Prefab || node.parent.removeChild(node);
        }

        get(name) {
          let pool = this._pools.get(name);

          if (!pool) {
            console.error(`can not find node pool ${name}`);
            return null;
          }

          if (pool.size() > 0) {
            return pool.get();
          }

          let prefab = this._prefabMap.get(name);

          if (!prefab) {
            console.error(`can not find prefab ${name}`);
            return null;
          }

          let node = instantiate(prefab);
          node.name = name;
          return node;
        }

        put(node) {
          let name = node.name;

          let pool = this._pools.get(name);

          if (!pool) {
            console.error(`can not find node pool ${name}`);
            node.destroy();
            return;
          }

          if (pool.size() >= this._poolMaxSize.get(name)) {
            node.destroy();
            return;
          }

          pool.put(node);
        }

        delete(name) {
          let pool = this._pools.get(name);

          if (!pool) {
            console.error(`can not find node pool ${name}`);
            return;
          }

          pool.clear();

          this._pools.delete(name);

          this._poolMaxSize.delete(name);

          this._prefabMap.delete(name);
        }

        clear() {
          this._pools.forEach(pool => {
            pool.clear();
          });

          this._pools.clear();

          this._poolMaxSize.clear();

          this._prefabMap.clear();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_pools", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_poolMaxSize", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_prefabMap", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "defaultMaxSize", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f6298e0677cff2cd4b81597711fdf2f4a9cd6dd0.js.map