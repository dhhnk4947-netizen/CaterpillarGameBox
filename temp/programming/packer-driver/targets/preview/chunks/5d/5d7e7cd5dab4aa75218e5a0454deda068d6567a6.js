System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, _crd;

  function MainCamera(cameraPath) {
    globalThis.MainCamera = cameraPath;
  }

  function MainMapper(preset) {
    return function (target) {
      globalThis.MainBundle = preset.bundleName || null;
      globalThis.UIPath = preset.uiPath || "";
      globalThis.MaxPage = preset.maxPage || 10;
      globalThis.MaxFullPage = preset.maxFullPage || 5;
      globalThis.MaxPopPage = preset.maxPopPage || 5;
    };
  }

  function Value(value, isDefault) {
    if (isDefault === void 0) {
      isDefault = false;
    }

    return function (target, key) {
      var symbol = Symbol.for(key);
      delete target[key];
      var handler = {
        get: function get() {
          if (!isDefault || this[symbol] === undefined) return value;
          return this[symbol] || value;
        },
        set: function set(value) {
          if (isDefault) this[symbol] = value;
        },
        enumerable: true,
        configurable: true
      }; // Object.defineProperty(target, key, handler);

      return handler;
    };
  }

  function DefaultValue(value) {
    return function (target, key) {
      var symbol = Symbol.for(key);
      delete target[key];
      var handler = {
        get: function get() {
          return this[symbol] || value;
        },
        set: function set(value) {
          this[symbol] = value;
        },
        enumerable: true,
        configurable: true
      }; // Object.defineProperty(target, key, handler);

      return handler;
    };
  }

  function Path(path, component) {
    return function (target, key) {
      var symbol = Symbol.for(key); // delete target[key];

      var handler = {
        get: function get() {
          if (!this[symbol]) {
            var parent = this.node;
            var node = find(path, parent);
            this[symbol] = component ? node.getComponent(component) : node;
          }

          return this[symbol];
        },
        set: function set(value) {},
        enumerable: true,
        configurable: true
      }; // Object.defineProperty(target, key, handler);

      return handler;
    };
  }

  _export({
    MainCamera: MainCamera,
    MainMapper: MainMapper,
    Value: Value,
    DefaultValue: DefaultValue,
    Path: Path
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "467a8eaNS5KWb0mSNaPIBbF", "tea.decorators", undefined);

      __checkObsolete__(['Component', 'find', 'isValid']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5d7e7cd5dab4aa75218e5a0454deda068d6567a6.js.map