System.register("chunks:///_virtual/Base64Ts.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6f0f5tLcJ5KMK2SyWX8kWRy", "Base64Ts", undefined);
      var Base64 = exports('default', /*#__PURE__*/function () {
        function Base64() {}
        Base64.encode = function encode(input) {
          var output = "";
          var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
          var i = 0;
          input = this._checkChar(input);
          input = this._utf8_encode(input);
          while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = (chr1 & 3) << 4 | chr2 >> 4;
            enc3 = (chr2 & 15) << 2 | chr3 >> 6;
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
              enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
              enc4 = 64;
            }
            output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
          }
          return output;
        };
        Base64.decode = function decode(input) {
          var output = "";
          var chr1, chr2, chr3;
          var enc1, enc2, enc3, enc4;
          var i = 0;
          input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
          while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = enc1 << 2 | enc2 >> 4;
            chr2 = (enc2 & 15) << 4 | enc3 >> 2;
            chr3 = (enc3 & 3) << 6 | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
              output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
              output = output + String.fromCharCode(chr3);
            }
          }
          output = this._utf8_decode(output);
          return output;
        };
        Base64._utf8_encode = function _utf8_encode(string) {
          string = string.replace(/\r\n/g, "\n");
          var utftext = "";
          for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
              utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
              utftext += String.fromCharCode(c >> 6 | 192);
              utftext += String.fromCharCode(c & 63 | 128);
            } else {
              utftext += String.fromCharCode(c >> 12 | 224);
              utftext += String.fromCharCode(c >> 6 & 63 | 128);
              utftext += String.fromCharCode(c & 63 | 128);
            }
          }
          return utftext;
        };
        Base64._checkChar = function _checkChar(textJson) {
          var pattern = new RegExp("[\u4E00-\u9FA5]+");
          for (var item in textJson) {
            if (pattern.test(textJson[item])) {
              textJson[item] = encodeURIComponent(textJson[item]);
            }
          }
          return JSON.stringify(textJson);
        };
        Base64._returnJson = function _returnJson(textString) {
          var res = JSON.parse(textString);
          for (var item in res) {
            res[item] = decodeURIComponent(res[item]);
          }
          return res;
        };
        return Base64;
      }());
      Base64._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      Base64._utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c2, c3;
        var c = c2 = 0;
        while (i < utftext.length) {
          c = utftext.charCodeAt(i);
          if (c < 128) {
            string += String.fromCharCode(c);
            i++;
          } else if (c > 191 && c < 224) {
            c2 = utftext.charCodeAt(i + 1);
            string += String.fromCharCode((c & 31) << 6 | c2 & 63);
            i += 2;
          } else {
            c2 = utftext.charCodeAt(i + 1);
            c3 = utftext.charCodeAt(i + 2);
            string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
            i += 3;
          }
        }
        return string;
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BranchStrategy.ts", ['cc', './SingletonFactory.ts'], function (exports) {
  var cclegacy, Singleton, SingletonFactory;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Singleton = module.Singleton;
      SingletonFactory = module.default;
    }],
    execute: function () {
      exports('Branch', Branch);
      var _dec, _class;
      cclegacy._RF.push({}, "313261TaxRBWqzVaI6ISkfI", "BranchStrategy", undefined);
      var BranchStrategy = exports('default', (_dec = Singleton(), _dec(_class = /*#__PURE__*/function () {
        function BranchStrategy() {
          this._cache = new Map();
        }
        var _proto = BranchStrategy.prototype;
        _proto._add = function _add(key, branch, func) {
          if (!this._cache.has(key)) {
            this._cache.set(key, new Map());
          }
          this._cache.get(key).set(branch, func);
        };
        _proto._get = function _get(key, branch) {
          if (!this._cache.has(key) || !this._cache.get(key).has(branch)) return null;
          return this._cache.get(key).get(branch);
        };
        _proto.Call = function Call(target, baseKey, branchKey) {
          var func = this._get(baseKey, branchKey);
          for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
            args[_key - 3] = arguments[_key];
          }
          func && func.call.apply(func, [target].concat(args));
        };
        _proto.remove = function remove(baseKey) {
          if (!this._cache.has(baseKey)) return;
          this._cache["delete"](baseKey);
        };
        return BranchStrategy;
      }()) || _class));
      function Branch(base, branchKey) {
        return function (target, key, descriptor) {
          SingletonFactory.getInst(BranchStrategy)['_add'](base, branchKey, descriptor.value);
          return descriptor;
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Common", ['./GameController.ts', './ReqHttp.ts', './Preset.ts', './GameItem.ts', './UIPage.ts', './UIView.ts', './Base64Ts.ts', './BranchStrategy.ts', './EventBase.ts', './EventManager.ts', './LogApi.ts', './ObjPoolManager.ts', './SingletonFactory.ts', './TAssetManager.ts', './UUID.ts', './Palette.ts', './LocallyData.ts', './ProxyData.ts', './tea.decorators.ts', './Tools.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/EventBase.ts", ['cc', './UUID.ts'], function (exports) {
  var cclegacy, UUID;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      UUID = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b57e1oWtfFPrZHLO4PqHMP5", "EventBase", undefined);
      var EventBase = exports('EventBase', /*#__PURE__*/function () {
        function EventBase() {
          this.event_cache = {};
        }
        var _proto = EventBase.prototype;
        _proto.on = function on(key, cb, sort, target) {
          if (!this.event_cache[key]) this.event_cache[key] = [];
          var event = {
            cb: cb,
            once: false
          };
          if (typeof sort === 'number') {
            event.sort = sort;
            target && (event.target = target);
          } else {
            if (sort) event.target = sort;
          }
          var getEvent = this.event_cache[key].find(function (e) {
            return e.cb === event.cb && e.target === event.target;
          });
          if (getEvent) return getEvent.id;
          event.id = key + "_" + UUID.generateUUID();
          this.event_cache[key].push(event);
          this.event_cache[key].sort(function (a, b) {
            var _a$sort, _b$sort;
            return ((_a$sort = a.sort) != null ? _a$sort : 0) - ((_b$sort = b.sort) != null ? _b$sort : 0);
          });
          return event.id;
        };
        _proto.once = function once(key, cb, sort, target) {
          if (!this.event_cache[key]) this.event_cache[key] = [];
          var event = {
            cb: cb,
            once: true
          };
          if (typeof sort === 'number') {
            event.sort = sort;
            target && (event.target = target);
          } else {
            if (sort) event.target = sort;
          }
          var getEvent = this.event_cache[key].find(function (e) {
            return e.cb === event.cb && e.target === event.target;
          });
          if (getEvent) return getEvent.id;
          event.id = key + "_" + UUID.generateUUID();
          this.event_cache[key].push(event);
          this.event_cache[key].sort(function (a, b) {
            var _a$sort2, _b$sort2;
            return ((_a$sort2 = a.sort) != null ? _a$sort2 : 0) - ((_b$sort2 = b.sort) != null ? _b$sort2 : 0);
          });
          return event.id;
        };
        _proto.off = function off(key, param) {
          if (!this.event_cache[key]) return;
          if (typeof param === 'string') {
            this.removeEventById(key, param);
            return;
          }
          this.removeByCb(key, param);
        };
        _proto.removeEventById = function removeEventById(key, id) {
          var index = this.event_cache[key].findIndex(function (e) {
            return e.id === id;
          });
          if (index !== -1) this.event_cache[key].splice(index, 1);
        };
        _proto.removeByCb = function removeByCb(key, cb) {
          this.event_cache[key] = this.event_cache[key].filter(function (e) {
            return e.cb !== cb;
          });
        };
        _proto.clearEvent = function clearEvent(key) {
          if (!this.event_cache[key]) return;
          delete this.event_cache[key];
        };
        _proto.trigger = function trigger(key) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          if (!this.event_cache[key]) return;
          var events = [].concat(this.event_cache[key]);
          for (var i = 0; i < events.length; i++) {
            var _target = events[i].target;
            var _cb = events[i].cb;
            if (_target) {
              _cb.apply(_target, args);
            } else {
              _cb.apply(void 0, args);
            }
          }
          this.event_cache[key] = this.event_cache[key].filter(function (e) {
            return !e.once;
          });
        };
        _proto.clearEventCache = function clearEventCache() {
          this.event_cache = {};
        };
        return EventBase;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventBase.ts', './SingletonFactory.ts'], function (exports) {
  var _inheritsLoose, cclegacy, EventBase, Singleton;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EventBase = module.EventBase;
    }, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "07df6Uzf5hDZppn09S4RL8W", "EventManager", undefined);

      /**
       * 事件管理器新建模板
       * export class {ClassName} extends EventBase{}
       */
      var EventManager = exports('default', (_dec = Singleton(), _dec(_class = /*#__PURE__*/function (_EventBase) {
        _inheritsLoose(EventManager, _EventBase);
        function EventManager() {
          return _EventBase.apply(this, arguments) || this;
        }
        return EventManager;
      }(EventBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tea.decorators.ts', './UIPage.ts', './SingletonFactory.ts', './Tools.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, MainMapper, UIPage, Autowired, BundleName, ViewName;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      MainMapper = module.MainMapper;
    }, function (module) {
      UIPage = module.default;
    }, function (module) {
      Autowired = module.Autowired;
    }, function (module) {
      BundleName = module.BundleName;
      ViewName = module.ViewName;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "eac8etVNiVLX4pW09XjAo3W", "GameController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameController = exports('GameController', (_dec = ccclass('GameController'), _dec2 = MainMapper({
        bundleName: BundleName.hall,
        uiPath: 'prefabs/view/',
        maxPage: 5,
        maxFullPage: 5,
        maxPopPage: 8
      }), _dec3 = Autowired(UIPage), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameController, _Component);
        function GameController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "uiPage", _descriptor, _assertThisInitialized(_this));
          _this.mask = null;
          return _this;
        }
        var _proto = GameController.prototype;
        _proto.start = function start() {
          this.mask = this.node.getChildByName('mask');
          TEA_DEBUG = true;
          this.initGame();
        };
        _proto.initGame = function initGame() {
          this.uiPage.init(this.GameStart.bind(this));
        };
        _proto.GameStart = function GameStart() {
          this.mask.setSiblingIndex(999);
          ResetTo(ViewName.HallView);
        };
        return GameController;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiPage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProxyData.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, UITransform, director, Camera, Component, ProxyData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      UITransform = module.UITransform;
      director = module.director;
      Camera = module.Camera;
      Component = module.Component;
    }, function (module) {
      ProxyData = module.default;
    }],
    execute: function () {
      exports('GameMapper', GameMapper);
      cclegacy._RF.push({}, "83c7fnHLghDFokTGtyHng+q", "GameItem", undefined);
      var GameItem = exports('default', /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameItem, _Component);
        function GameItem() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = GameItem.prototype;
        _proto.onMount = function onMount() {};
        _proto.onInit = function onInit() {};
        _proto.onShow = function onShow() {};
        _proto.onHide = function onHide() {};
        _proto.onCreated = function onCreated() {};
        _proto.is3D = function is3D() {
          return this.node.getComponent(UITransform) == null;
        };
        _proto.TeaUIPageMount = function TeaUIPageMount() {
          var onMounts = Symbol["for"]('TeaMounts');
          var onShows = Symbol["for"]('TeaShows');
          var onHides = Symbol["for"]('TeaHides');
          this[onMounts] = this[onMounts] || [];
          this[onShows] = this[onShows] || [];
          this[onHides] = this[onHides] || [];
          this[onMounts].push(this.onMount.bind(this));
          this[onShows].push(this.onShow.bind(this));
          this[onHides].push(this.onHide.bind(this));
          this[onMounts].forEach(function (fun) {
            fun();
          });
        };
        _proto.TeaUIPageShow = function TeaUIPageShow() {
          var _this = this;
          var symbol = Symbol["for"]('observers');
          var TargetClass = this.constructor;
          if (TargetClass.prototype[symbol]) {
            var map = TargetClass.prototype[symbol];
            var keys = Array.from(map.keys());
            keys.forEach(function (key) {
              var list = TargetClass.prototype[symbol].get(key);
              var val = ProxyData.getDataSource(key);
              list.forEach(function (prop) {
                ProxyData.addObserver(key, _this, prop);
                _this[prop] = val;
              });
            });
          }
          var onShows = Symbol["for"]('TeaShows');
          this[onShows].forEach(function (fun) {
            fun();
          });
        };
        _proto.TeaUIPageHide = function TeaUIPageHide() {
          var _this2 = this;
          var symbol = Symbol["for"]('observers');
          var TargetClass = this.constructor;
          if (TargetClass.prototype[symbol]) {
            var map = TargetClass.prototype[symbol];
            var keys = Array.from(map.keys());
            keys.forEach(function (key) {
              var list = TargetClass.prototype[symbol].get(key);
              list.forEach(function (prop) {
                ProxyData.removeObserver(key, _this2, prop);
              });
            });
          }
          var onHides = Symbol["for"]('TeaHides');
          this[onHides].forEach(function (fun) {
            fun();
          });
        };
        _proto.close = function close(cb) {
          // SingletonFactory.getInst(UIPage).stopGame(cb);
        };
        _createClass(GameItem, [{
          key: "CameraNode",
          get: function get() {
            var symbol = Symbol["for"]('CameraNodeSymbol');
            if (!this[symbol]) {
              var scene = director.getScene();
              this[symbol] = scene.getComponentInChildren(Camera).node;
              var mainCameraSymbol = Symbol["for"]('MainCameraSymbol');
              this[mainCameraSymbol] = this[symbol].getComponent(Camera);
            }
            return this[symbol];
          }
        }, {
          key: "Camera",
          get: function get() {
            var symbol = Symbol["for"]('MainCameraSymbol');
            if (!this[symbol]) {
              var cameraNodeSymbol = Symbol["for"]('CameraNodeSymbol');
              var scene = director.getScene();
              this[cameraNodeSymbol] = scene.getComponentInChildren(Camera);
              this[symbol] = this[cameraNodeSymbol].getComponent(Camera);
            }
            return this[symbol];
          }
        }]);
        return GameItem;
      }(Component));
      function GameMapper(name, bundleName, path, viewPath) {
        return function (target) {
          target.prototype.SymbolName = name;
          target.prototype.SymbolBundleName = bundleName;
          target.prototype.SymbolPath = path;
          target.prototype.SymbolViewPath = viewPath;
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LocallyData.ts", ['cc', './SingletonFactory.ts'], function (exports) {
  var cclegacy, sys, Singleton;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "1cd4f4nOt5Pc4egkIfZppCm", "LocallyData", undefined);
      var LocallyData = exports('default', (_dec = Singleton(), _dec(_class = /*#__PURE__*/function () {
        function LocallyData() {}
        var _proto = LocallyData.prototype;
        _proto.getInt = function getInt(key) {
          var val = sys.localStorage.getItem(key);
          return val != null ? val : 0;
        };
        _proto.setInt = function setInt(key, value) {
          if (typeof value !== "number" || isNaN(value)) {
            ERROR("value must be a number ======>", value);
            return;
          }
          sys.localStorage.setItem(key, value.toString());
        };
        _proto.getChars = function getChars(key) {
          var val = sys.localStorage.getItem(key);
          return val != null ? val : "";
        };
        _proto.setChars = function setChars(key, value) {
          if (typeof value !== "string") {
            ERROR("value must be a string ======>", value);
            return;
          }
          sys.localStorage.setItem(key, value);
        };
        _proto.getBool = function getBool(key) {
          var val = sys.localStorage.getItem(key);
          return val == "true";
        };
        _proto.setBool = function setBool(key, value) {
          if (typeof value !== "boolean") {
            ERROR("value must be a boolean ======>", value);
            return;
          }
          sys.localStorage.setItem(key, value.toString());
        };
        _proto.getObj = function getObj(key) {
          var val = sys.localStorage.getItem(key);
          return JSON.parse(val != null ? val : "{}");
        };
        _proto.setObj = function setObj(key, value) {
          if (typeof value !== "object" || value === null) {
            ERROR("value must be an object ======>", value);
            return;
          }
          sys.localStorage.setItem(key, JSON.stringify(value));
        };
        _proto.remove = function remove(key) {
          sys.localStorage.removeItem(key);
        };
        _proto.clear = function clear() {
          sys.localStorage.clear();
        };
        return LocallyData;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LogApi.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('LogApi', LogApi);
      cclegacy._RF.push({}, "51bd4ppU6dCgJ5gYRTMih7C", "LogApi", undefined);
      var LogApiManager = exports('LogApiManager', /*#__PURE__*/function () {
        function LogApiManager() {}
        LogApiManager.getObj = function getObj(obj) {
          var result = {};
          for (var key in obj) {
            if (obj[key] === null || obj[key] === undefined) {
              obj[key] = "null";
              continue;
            }
            if (typeof obj[key] === "function") continue;
            if (typeof obj[key] === "object") {
              result[key] = "objName:" + obj[key].name;
              obj[key].constructor && (result[key] = obj[key].constructor.name + " " + result[key]);
              continue;
            }
            result[key] = obj[key];
          }
          return result;
        };
        LogApiManager.formatParams = function formatParams(params) {
          var _this = this;
          var str = "<========= content =========>\n";
          var len = params.length;
          params.forEach(function (param, index) {
            if (typeof param === "object") {
              var obj = _this.getObj(param);
              index !== 0 && (str += "\n");
              str += JSON.stringify(obj);
              len !== index + 1 && (str += "\n");
              return;
            }
            index !== 0 && (str += "\t");
            str += param;
          });
          return str.trim();
        };
        LogApiManager.getMethodPath = function getMethodPath() {
          var _Error$stack;
          var stack = ((_Error$stack = new Error().stack) == null ? void 0 : _Error$stack.split('\n')) || [];
          var result = ['anonymous', 'anonymous'];
          for (var i = 3; i < stack.length; i++) {
            var _match$;
            var callerLine = stack[i] || '';
            var match = callerLine.match(/at\s+(.*?)(\s|\(|$)/);
            var trimStr = (match == null || (_match$ = match[1]) == null ? void 0 : _match$.trim()) || 'anonymous';
            var location = trimStr.split('.');
            if (location.length < 0 || location[0].startsWith('http://') || location[0].startsWith('https://')) continue;
            result = location;
            (result[0] === 'set' || result[0] === 'get') && (result[1] = result[0] + " " + callerLine.trim().split(' ')[2], result[0] = 'anonymous');
            break;
          }
          return result;
        };
        LogApiManager.method = function method(clazzName, methodName) {
          var _console;
          for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            params[_key - 2] = arguments[_key];
          }
          (_console = console).log.apply(_console, [clazzName, methodName, "==========>"].concat(params));
        };
        LogApiManager.log = function log(clazzName, methodName) {
          var _console2;
          for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            params[_key2 - 2] = arguments[_key2];
          }
          (_console2 = console).log.apply(_console2, [clazzName, methodName, "==========>"].concat(params));
        };
        LogApiManager.error = function error(clazzName, methodName) {
          var _console3;
          for (var _len3 = arguments.length, params = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            params[_key3 - 2] = arguments[_key3];
          }
          (_console3 = console).error.apply(_console3, [clazzName, methodName, "==========>"].concat(params));
        };
        LogApiManager.warn = function warn(clazzName, methodName) {
          var _console4;
          for (var _len4 = arguments.length, params = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
            params[_key4 - 2] = arguments[_key4];
          }
          (_console4 = console).warn.apply(_console4, [clazzName, methodName, "==========>"].concat(params));
        };
        return LogApiManager;
      }());
      function LogApi(target, key, descriptor) {
        {
          var fn = descriptor.value;
          descriptor.value = function () {
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }
            LogApiManager.method.apply(LogApiManager, [target.constructor.name, key].concat(args));
            return fn.apply(this, args);
          };
        }
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ObjPoolManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TAssetManager.ts', './SingletonFactory.ts', './tea.decorators.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Prefab, NodePool, instantiate, TAssetManager, Singleton, Value, DefaultValue;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
    }, function (module) {
      TAssetManager = module.default;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      Value = module.Value;
      DefaultValue = module.DefaultValue;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "64024IlsjNFAJvS4IrUR/hZ", "ObjPoolManager", undefined);
      var ObjPoolManager = exports('default', (_dec = Singleton(), _dec2 = Value(new Map()), _dec3 = Value(new Map()), _dec4 = Value(new Map()), _dec5 = DefaultValue(10), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function ObjPoolManager() {
          _initializerDefineProperty(this, "_pools", _descriptor, this);
          _initializerDefineProperty(this, "_poolMaxSize", _descriptor2, this);
          _initializerDefineProperty(this, "_prefabMap", _descriptor3, this);
          _initializerDefineProperty(this, "defaultMaxSize", _descriptor4, this);
        }
        var _proto = ObjPoolManager.prototype;
        _proto.initPool = function initPool(objs, onProgress, onComplete) {
          var _this = this;
          this.clear();
          var total = objs.length;
          var finish = 0;
          var progressCb, completeCb;
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
          objs.forEach(function (obj) {
            var name = obj.name;
            var path = obj.path || obj.name;
            var abPackage = obj.abPackage || "";
            var size = obj.size || 0;
            var maxSize = obj.maxSize || _this.defaultMaxSize;
            TAssetManager.load(path, abPackage, Prefab, function (err, prefab) {
              if (err) {
                completeCb && completeCb(err);
                return;
              }
              _this._poolMaxSize.set(name, maxSize);
              _this._prefabMap.set(name, prefab);
              var pool = new NodePool(name);
              for (var i = 0; i < size; i++) {
                var _node = instantiate(prefab);
                _node.name = name;
                pool.put(_node);
              }
              _this._pools.set(obj.name, pool);
              progressCb && progressCb(0, total, pool);
              finish++;
              finish === total && completeCb && completeCb(null);
            });
          });
        };
        _proto.addRef = function addRef(node, name, capacity) {
          var objName = node.name;
          var size = 0;
          var maxSize = this.defaultMaxSize;
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
          var pool = new NodePool(objName);
          for (var index = 0; index < size; index++) {
            var _item = instantiate(node);
            _item.name = objName;
            pool.put(_item);
          }
          this._pools.set(objName, pool);
          this._poolMaxSize.set(objName, maxSize);
          this._prefabMap.set(objName, node);
          node instanceof Prefab || node.parent.removeChild(node);
        };
        _proto.get = function get(name) {
          var pool = this._pools.get(name);
          if (!pool) {
            console.error("can not find node pool " + name);
            return null;
          }
          if (pool.size() > 0) {
            return pool.get();
          }
          var prefab = this._prefabMap.get(name);
          if (!prefab) {
            console.error("can not find prefab " + name);
            return null;
          }
          var node = instantiate(prefab);
          node.name = name;
          return node;
        };
        _proto.put = function put(node) {
          var name = node.name;
          var pool = this._pools.get(name);
          if (!pool) {
            console.error("can not find node pool " + name);
            node.destroy();
            return;
          }
          if (pool.size() >= this._poolMaxSize.get(name)) {
            node.destroy();
            return;
          }
          pool.put(node);
        };
        _proto["delete"] = function _delete(name) {
          var pool = this._pools.get(name);
          if (!pool) {
            console.error("can not find node pool " + name);
            return;
          }
          pool.clear();
          this._pools["delete"](name);
          this._poolMaxSize["delete"](name);
          this._prefabMap["delete"](name);
        };
        _proto.clear = function clear() {
          this._pools.forEach(function (pool) {
            pool.clear();
          });
          this._pools.clear();
          this._poolMaxSize.clear();
          this._prefabMap.clear();
        };
        return ObjPoolManager;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_pools", [_dec2], {
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
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Palette.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './env'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, UIRenderer, Sprite, Label, director, Director, Component, Color, DEV;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIRenderer = module.UIRenderer;
      Sprite = module.Sprite;
      Label = module.Label;
      director = module.director;
      Director = module.Director;
      Component = module.Component;
      Color = module.Color;
    }, function (module) {
      DEV = module.DEV;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "08ea8EtMzRAioF67nYwqmM8", "Palette", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode,
        requireComponent = _decorator.requireComponent,
        menu = _decorator.menu;
      var Palette = exports('Palette', (_dec = requireComponent(UIRenderer), _dec2 = menu('Public/Palette'), _dec3 = property({
        displayName: DEV
      }), _dec4 = property({
        displayName: DEV
      }), _dec5 = property({
        displayName: DEV
      }), _dec6 = property({
        displayName: DEV
      }), ccclass(_class = executeInEditMode(_class = _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Palette, _Component);
        function Palette() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_colorLB", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_colorRB", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_colorLT", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_colorRT", _descriptor4, _assertThisInitialized(_this));
          _this.ur = null;
          _this.hue = [1, 1, 1];
          return _this;
        }
        var _proto = Palette.prototype;
        _proto.onLoad = function onLoad() {
          this.ur = this.node.getComponent(UIRenderer);
          if (!(this.ur instanceof Sprite || this.ur instanceof Label)) {
            WARN('Palette 需要一个 Sprite 或 Label');
            this.destroy();
            return;
          }
          this.ur['_useVertexOpacity'] = true;
        };
        _proto.onEnable = function onEnable() {
          director.once(Director.EVENT_AFTER_DRAW, this.updateColor, this);
        };
        _proto.onDisable = function onDisable() {
          if (!this.ur['_renderData']) return;
          var vb = this.ur['_renderData'].chunk.vb;
          var color = this.ur.color;
          vb[5] = vb[14] = vb[23] = vb[32] = color.r / 255;
          vb[6] = vb[15] = vb[24] = vb[33] = color.g / 255;
          vb[7] = vb[16] = vb[25] = vb[34] = color.b / 255;
          vb[8] = vb[17] = vb[26] = vb[35] = color.a / 255;
        };
        _proto.updateColor = function updateColor() {
          var vb = this.ur['_renderData'].chunk.vb;
          var lb = this._colorLB,
            rb = this._colorRB,
            lt = this._colorLT,
            rt = this._colorRT;
          var d = 1 / 255,
            h = this.hue,
            r = h[0] * d,
            g = h[1] * d,
            b = h[2] * d;
          vb[5] = lb.r * r;
          vb[6] = lb.g * g;
          vb[7] = lb.b * b;
          vb[8] = lb.a / 255;
          vb[14] = rb.r * r;
          vb[15] = rb.g * g;
          vb[16] = rb.b * b;
          vb[17] = rb.a / 255;
          vb[23] = lt.r * r;
          vb[24] = lt.g * g;
          vb[25] = lt.b * b;
          vb[26] = lt.a / 255;
          vb[32] = rt.r * r;
          vb[33] = rt.g * g;
          vb[34] = rt.b * b;
          vb[35] = rt.a / 255;
        };
        _createClass(Palette, [{
          key: "colorLB",
          get: function get() {
            return this._colorLB;
          },
          set: function set(value) {
            this._colorLB = value;
            this.updateColor();
          }
        }, {
          key: "colorRB",
          get: function get() {
            return this._colorRB;
          },
          set: function set(value) {
            this._colorRB = value;
            this.updateColor();
          }
        }, {
          key: "colorLT",
          get: function get() {
            return this._colorLT;
          },
          set: function set(value) {
            this._colorLT = value;
            this.updateColor();
          }
        }, {
          key: "colorRT",
          get: function get() {
            return this._colorRT;
          },
          set: function set(value) {
            this._colorRT = value;
            this.updateColor();
          }
        }]);
        return Palette;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_colorLB", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorLB", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "colorLB"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_colorRB", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorRB", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "colorRB"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_colorLT", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorLT", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "colorLT"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_colorRT", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorRT", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "colorRT"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Preset.ts", ['cc', './UIPage.ts', './EventManager.ts', './SingletonFactory.ts', './LogApi.ts'], function (exports) {
  var cclegacy, UIPage, EventManager, SingletonFactory, LogApiManager, LogApi;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      UIPage = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      SingletonFactory = module.default;
    }, function (module) {
      LogApiManager = module.LogApiManager;
      LogApi = module.LogApi;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "ae878eZ171GHYPPW+gmqiUz", "Preset", undefined);

      // @btnUnDots(1)
      var Preset = exports('Preset', GlobalMount(_class = previewSkeleton(_class = function Preset() {}) || _class) || _class);

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
        return;
      }
      //#endregion

      //#region 全局挂载
      function GlobalMount(target) {
        globalThis.TEA_DEBUG = false;
        globalThis.on = function (key, cb, sort, target) {
          SingletonFactory.getInst(EventManager).on(key, cb, sort, target);
        };
        globalThis.once = function (key, cb, sort, target) {
          SingletonFactory.getInst(EventManager).once(key, cb, sort, target);
        };
        globalThis.trigger = function (key) {
          var _SingletonFactory$get;
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          (_SingletonFactory$get = SingletonFactory.getInst(EventManager)).trigger.apply(_SingletonFactory$get, [key].concat(args));
        };
        globalThis.off = function (key, param) {
          SingletonFactory.getInst(EventManager).off(key, param);
        };
        globalThis.clearEvent = function (key) {
          SingletonFactory.getInst(EventManager).clearEvent(key);
        };
        globalThis.getInst = function (classType) {
          return SingletonFactory.getInst(classType);
        };
        globalThis.startGame = function (classType) {
          return SingletonFactory.getInst(UIPage).startGame(classType);
        };
        globalThis.stopGame = function (cb) {
          return SingletonFactory.getInst(UIPage).stopGame(cb);
        };
        globalThis.LOG = function () {
          var api = LogApiManager.getMethodPath();
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          LogApiManager.log.apply(LogApiManager, [api[0], api[1]].concat(args));
        };
        globalThis.WARN = function () {
          var api = LogApiManager.getMethodPath();
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          LogApiManager.warn.apply(LogApiManager, [api[0], api[1]].concat(args));
        };
        globalThis.ERROR = function () {
          var api = LogApiManager.getMethodPath();
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          LogApiManager.error.apply(LogApiManager, [api[0], api[1]].concat(args));
        };
        globalThis.LogApi = LogApi;
        globalThis.ResetTo = function (uiName) {
          var _uiPage$constructor$p;
          var uiPage = SingletonFactory.getInst(UIPage);
          for (var _len5 = arguments.length, params = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            params[_key5 - 1] = arguments[_key5];
          }
          (_uiPage$constructor$p = uiPage.constructor.prototype.ResetToView).call.apply(_uiPage$constructor$p, [uiPage, uiName].concat(params));
        };
        globalThis.PopTo = function (uiName) {
          var _uiPage$constructor$p2;
          var uiPage = SingletonFactory.getInst(UIPage);
          for (var _len6 = arguments.length, params = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            params[_key6 - 1] = arguments[_key6];
          }
          (_uiPage$constructor$p2 = uiPage.constructor.prototype.PopView).call.apply(_uiPage$constructor$p2, [uiPage, uiName].concat(params));
        };
        globalThis.SwitchTo = function (uiName) {
          var _uiPage$constructor$p3;
          var uiPage = SingletonFactory.getInst(UIPage);
          for (var _len7 = arguments.length, params = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
            params[_key7 - 1] = arguments[_key7];
          }
          (_uiPage$constructor$p3 = uiPage.constructor.prototype.SwitchView).call.apply(_uiPage$constructor$p3, [uiPage, uiName].concat(params));
        };
        globalThis.ShowDialog = function (uiName) {
          var _uiPage$constructor$p4;
          var uiPage = SingletonFactory.getInst(UIPage);
          for (var _len8 = arguments.length, params = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
            params[_key8 - 1] = arguments[_key8];
          }
          (_uiPage$constructor$p4 = uiPage.constructor.prototype.ShowDialog).call.apply(_uiPage$constructor$p4, [uiPage, uiName].concat(params));
        };
        globalThis.ShowTip = function (uiName) {
          var _uiPage$constructor$p5;
          var uiPage = SingletonFactory.getInst(UIPage);
          for (var _len9 = arguments.length, params = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
            params[_key9 - 1] = arguments[_key9];
          }
          (_uiPage$constructor$p5 = uiPage.constructor.prototype.ShowTip).call.apply(_uiPage$constructor$p5, [uiPage, uiName].concat(params));
        };
        globalThis.ShowCommon = function (uiName) {
          var _uiPage$constructor$p6;
          var uiPage = SingletonFactory.getInst(UIPage);
          for (var _len10 = arguments.length, params = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
            params[_key10 - 1] = arguments[_key10];
          }
          (_uiPage$constructor$p6 = uiPage.constructor.prototype.ShowCommon).call.apply(_uiPage$constructor$p6, [uiPage, uiName].concat(params));
        };
      }
      //#endregion
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProxyData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, cclegacy, Component, isValid;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      isValid = module.isValid;
    }],
    execute: function () {
      exports({
        ProxyAware: ProxyAware,
        ProxyObserver: ProxyObserver,
        ProxySource: ProxySource
      });
      cclegacy._RF.push({}, "ff313pf1q1JMLJEJqt6Bzgn", "ProxyData", undefined);
      var ProxyData = exports('default', /*#__PURE__*/function () {
        function ProxyData() {}
        ProxyData.setDataSource = function setDataSource(name, dataSource) {
          this.dataSources.set(name, dataSource);
        };
        ProxyData.addObserver = function addObserver(name, inst, key) {
          if (!this.observers.has(name)) {
            this.observers.set(name, []);
          }
          if (this.observers.get(name).some(function (observer) {
            return observer.inst === inst && observer.key === key;
          })) return;
          this.observers.get(name).push({
            inst: inst,
            key: key
          });
        };
        ProxyData.removeObserver = function removeObserver(name, inst, key) {
          if (this.observers.has(name)) {
            var observers = this.observers.get(name);
            var index = observers.findIndex(function (observer) {
              return observer.inst === inst && observer.key === key;
            });
            if (index >= 0) {
              observers.splice(index, 1);
            }
          }
        };
        ProxyData.notifyObservers = function notifyObservers(name) {
          var _this = this;
          if (this.observers.has(name)) {
            var observers = this.observers.get(name);
            var filters = [];
            observers.forEach(function (observer) {
              if (!observer.inst || observer.inst instanceof Component && !isValid(observer.inst)) {
                filters.push(observer);
                return;
              }
              observer.inst[observer.key] = _this.dataSources.get(name);
            });
            var newObservers = observers.filter(function (observer) {
              return filters.indexOf(observer) === -1;
            });
            this.observers.set(name, newObservers);
          }
        };
        ProxyData.getDataSource = function getDataSource(name) {
          return this.dataSources.get(name);
        };
        return ProxyData;
      }());
      ProxyData.dataSources = new Map();
      ProxyData.observers = new Map();
      function ProxyAware(TargetClass) {
        var symbol = Symbol["for"]('observers');
        if (!TargetClass.prototype[symbol]) {
          TargetClass.prototype[symbol] = new Map();
        }
        return /*#__PURE__*/function (_TargetClass) {
          _inheritsLoose(_class2, _TargetClass);
          function _class2() {
            var _this2;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            _this2 = _TargetClass.call.apply(_TargetClass, [this].concat(args)) || this;
            var map = TargetClass.prototype[symbol];
            var keys = Array.from(map.keys());
            keys.forEach(function (key) {
              var list = TargetClass.prototype[symbol].get(key);
              var val = ProxyData.getDataSource(key);
              list.forEach(function (prop) {
                ProxyData.addObserver(key, _assertThisInitialized(_this2), prop);
                _this2[prop] = val;
              });
            });
            return _this2;
          }
          return _class2;
        }(TargetClass);
      }
      function ProxySource(ProxyKey, DefaultValue) {
        ProxyData.setDataSource(ProxyKey, DefaultValue);
        return function (target, key) {
          delete target[key];
          var handler = {
            get: function get() {
              return ProxyData.getDataSource(ProxyKey);
            },
            set: function set(value) {
              ProxyData.setDataSource(ProxyKey, value);
              ProxyData.notifyObservers(ProxyKey);
            },
            enumerable: true,
            configurable: true
          };
          return handler;
        };
      }
      function ProxyObserver(ProxyKey) {
        return function (target, key) {
          var symbol = Symbol["for"]('observers');
          if (!target[symbol]) {
            target[symbol] = new Map();
          }
          if (!target[symbol].has(ProxyKey)) {
            target[symbol].set(ProxyKey, []);
          }
          target[symbol].get(ProxyKey).push(key);
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ReqHttp.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "15246KTAqpLj6cg6KiHAcX5", "ReqHttp", undefined);
      var ReqHttp = exports('default', /*#__PURE__*/function () {
        function ReqHttp() {}
        ReqHttp.post = function post(url, params, sCb, fCb, type) {
          if (fCb === void 0) {
            fCb = null;
          }
          if (type === void 0) {
            type = ContentType.FORM;
          }
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': type
            },
            body: type === ContentType.FORM ? new URLSearchParams(params).toString() : JSON.stringify(params)
          }).then(function (response) {
            if (response.ok) {
              response.json().then(function (data) {
                sCb && sCb(data);
              });
            } else {
              fCb && fCb();
            }
          })["catch"](function (error) {
            fCb && fCb();
            ERROR("POST ERROR");
            ERROR(error);
          });
        };
        ReqHttp.get = function get(url, params, sCb, fCb) {
          if (fCb === void 0) {
            fCb = null;
          }
          fetch(url + this.analyzeParams(params)).then(function (response) {
            if (response.ok) {
              response.json().then(function (data) {
                sCb && sCb(data);
              });
            } else {
              fCb && fCb();
            }
          })["catch"](function (error) {
            fCb && fCb();
            ERROR("GET ERROR");
            ERROR(error);
          });
        };
        ReqHttp.file = function file(url, params, sCb, fCb) {
          if (fCb === void 0) {
            fCb = null;
          }
          fetch(url + this.analyzeParams(params)).then(function (response) {
            if (response.ok) {
              response.text().then(function (data) {
                sCb && sCb(data);
              });
            } else {
              fCb && fCb();
            }
          })["catch"](function (error) {
            fCb && fCb();
            ERROR("FILE ERROR");
            ERROR(error);
          });
        }

        /**拼接参数列表 */;
        ReqHttp.analyzeParams = function analyzeParams(params) {
          if (Object.keys(params).length == 0) return "";
          var analyzeStr = "?";
          Object.keys(params).forEach(function (key, index) {
            if (index > 0) analyzeStr += '&';
            analyzeStr = analyzeStr + key + "=" + params[key];
          });
          return analyzeStr;
        };
        return ReqHttp;
      }());
      var ContentType = /*#__PURE__*/function (ContentType) {
        ContentType["JSON"] = "application/json";
        ContentType["FORM"] = "application/x-www-form-urlencoded";
        return ContentType;
      }(ContentType || {});
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SingletonFactory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UUID.ts'], function (exports) {
  var _construct, cclegacy, UUID;
  return {
    setters: [function (module) {
      _construct = module.construct;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      UUID = module.default;
    }],
    execute: function () {
      exports({
        Autowired: Autowired,
        Singleton: Singleton
      });
      cclegacy._RF.push({}, "b5d2d4YXVFPA5nGV33njaZj", "SingletonFactory", undefined);
      var SingletonFactory = exports('default', /*#__PURE__*/function () {
        function SingletonFactory() {}
        SingletonFactory.getInst = function getInst(classType) {
          var key = classType['_singletonId'];
          if (!key || !this._instances[key]) {
            console.error("无实例");
            return null;
          }
          return this._instances[key];
        };
        SingletonFactory.setInst = function setInst(classType) {
          if (classType._singletonId) return;
          var key = UUID.generateUUID();
          while (this._instances[key]) {
            key = UUID.generateUUID();
          }
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          this._instances[key] = _construct(classType, args);
          classType._singletonId = key;
        };
        return SingletonFactory;
      }());
      SingletonFactory._instances = new Map();
      function Singleton() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return function (target) {
          if (checkIsClass(target)) {
            SingletonFactory.setInst.apply(SingletonFactory, [target].concat(args));
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
      var checkIsClass = function checkIsClass(target) {
        return typeof target === "function" && "prototype" in target && target.prototype.constructor === target;
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TAssetManager.ts", ['cc'], function (exports) {
  var cclegacy, resources, AssetManager, assetManager, sys, Asset;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      AssetManager = module.AssetManager;
      assetManager = module.assetManager;
      sys = module.sys;
      Asset = module.Asset;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eea41Hnx15DJplSQP/OMQTO", "TAssetManager", undefined);

      // const bundleMD5Key = "LOCAL_BUNDLE_MD5_KEY";
      var TAssetManager = exports('default', /*#__PURE__*/function () {
        function TAssetManager() {}
        TAssetManager.load = function load(path, abPackage, type, onProgress, onComplete) {
          var _params$type;
          var params = {
            path: path
          };
          if (type) {
            if (type.length === 3) {
              params.onProgress = type;
              params.onComplete = onProgress;
              if (typeof abPackage === 'string') {
                params.abPackage = abPackage;
              } else {
                params.type = abPackage;
              }
            } else if (type.length === 2) {
              params.onComplete = type;
              switch (typeof abPackage) {
                case 'function':
                  if (abPackage.length === 3) {
                    params.onProgress = abPackage;
                  } else {
                    params.type = abPackage;
                  }
                  break;
                case 'string':
                  params.abPackage = abPackage;
                  break;
              }
            } else {
              params.abPackage = abPackage;
              params.type = type;
              if (onComplete) {
                params.onProgress = onProgress;
                params.onComplete = onComplete;
              } else {
                params.onComplete = onProgress;
              }
            }
          } else {
            params.onComplete = abPackage;
          }
          params.type = (_params$type = params.type) != null ? _params$type : Asset;
          if (!params.onProgress) params.onProgress = function (finish, total, item) {};
          if (!params.abPackage || params.abPackage.length == 0) {
            resources.load(params.path, params.type, params.onProgress, params.onComplete);
            return;
          }
          if (params.abPackage in this.bundleCanche) {
            var bundle = this.bundleCanche[params.abPackage];
            bundle.load(params.path, params.type, params.onProgress, params.onComplete);
            return;
          }
          this.loadBundle(params.abPackage, function (bundle) {
            bundle.load(params.path, params.type, params.onProgress, params.onComplete);
          }, function (err, res) {
            params.onComplete(err, res);
          });
        };
        TAssetManager.preLoad = function preLoad(paths, abPackage, type, onProgress, onComplete) {
          var _params$type2;
          var params = {
            paths: paths
          };
          if (type) {
            if (type.length === 3) {
              params.onProgress = type;
              params.onComplete = onProgress;
              if (typeof abPackage === 'string') {
                params.abPackage = abPackage;
              } else {
                params.type = abPackage;
              }
            } else if (type.length === 2) {
              params.onComplete = type;
              switch (typeof abPackage) {
                case 'function':
                  if (abPackage.length === 3) {
                    params.onProgress = abPackage;
                  } else {
                    params.type = abPackage;
                  }
                  break;
                case 'string':
                  params.abPackage = abPackage;
                  break;
              }
            } else {
              params.abPackage = abPackage;
              params.type = type;
              if (onComplete) {
                params.onProgress = onProgress;
                params.onComplete = onComplete;
              } else {
                params.onComplete = onProgress;
              }
            }
          } else {
            params.onComplete = abPackage;
          }
          params.type = (_params$type2 = params.type) != null ? _params$type2 : Asset;
          if (!params.onProgress) {
            params.onProgress = function (finish, total, item) {};
          }
          if (!params.abPackage) {
            resources.preload(params.paths, params.type, params.onProgress, params.onComplete);
            return;
          }
          if (params.abPackage in this.bundleCanche) {
            var bundle = this.bundleCanche[params.abPackage];
            bundle.preload(params.paths, params.type, params.onProgress, params.onComplete);
            return;
          }
          this.loadBundle(params.abPackage, function (bundle) {
            bundle.preload(params.paths, params.type, params.onProgress, params.onComplete);
          }, function (error, assets) {
            params.onComplete(error, assets);
          });
        };
        TAssetManager.releaseAll = function releaseAll(abPackage) {
          if (abPackage instanceof AssetManager.Bundle) {
            abPackage.releaseAll();
            return;
          }
          if (!(abPackage in this.bundleCanche)) return;
          var bundle = this.bundleCanche[abPackage];
          bundle.releaseAll();
        };
        TAssetManager.removeBundle = function removeBundle(abPackage) {
          if (abPackage instanceof AssetManager.Bundle) {
            abPackage.releaseAll();
            assetManager.removeBundle(abPackage);
            return;
          }
          if (!(abPackage in this.bundleCanche)) return;
          var bundle = this.bundleCanche[abPackage];
          this.releaseAll(bundle);
          assetManager.removeBundle(bundle);
          delete this.bundleCanche[abPackage];
        };
        TAssetManager.release = function release(path, abPackage, type) {
          var params = {
            path: path,
            type: Asset
          };
          if (typeof abPackage === 'string') {
            params.abPackage = abPackage;
            if (type) {
              params.type = type;
            }
          } else if (abPackage) {
            params.type = abPackage;
          }
          if (!params.abPackage) {
            resources.release(params.path, params.type);
            return;
          }
          if (params.abPackage in this.bundleCanche) {
            var bundle = this.bundleCanche[params.abPackage];
            bundle.release(params.path, params.type);
            return;
          }
          this.loadBundle(params.abPackage, function (bundle) {
            bundle.release(params.path, params.type);
          });
        };
        TAssetManager.loadDir = function loadDir(path, abPackage, type, onProgress, onComplete) {
          var _params$type3;
          var params = {
            path: path
          };
          if (type) {
            if (type.length === 3) {
              params.onProgress = type;
              params.onComplete = onProgress;
              if (typeof abPackage === 'string') {
                params.abPackage = abPackage;
              } else {
                params.type = abPackage;
              }
            } else if (type.length === 2) {
              params.onComplete = type;
              switch (typeof abPackage) {
                case 'function':
                  if (abPackage.length === 3) {
                    params.onProgress = abPackage;
                  } else {
                    params.type = abPackage;
                  }
                  break;
                case 'string':
                  params.abPackage = abPackage;
                  break;
              }
            } else {
              params.abPackage = abPackage;
              params.type = type;
              if (onComplete) {
                params.onProgress = onProgress;
                params.onComplete = onComplete;
              } else {
                params.onComplete = onProgress;
              }
            }
          } else {
            params.onComplete = abPackage;
          }
          params.type = (_params$type3 = params.type) != null ? _params$type3 : Asset;
          if (!params.onProgress) {
            params.onProgress = function (finish, total, item) {};
          }
          if (!params.abPackage) {
            resources.loadDir(params.path, params.type, params.onProgress, params.onComplete);
            return;
          }
          if (params.abPackage in this.bundleCanche) {
            var bundle = this.bundleCanche[params.abPackage];
            bundle.loadDir(params.path, params.type, params.onProgress, params.onComplete);
            return;
          }
          this.loadBundle(params.abPackage, function (bundle) {
            bundle.loadDir(params.path, params.type, params.onProgress, params.onComplete);
          }, function (error, assets) {
            params.onComplete(error, assets);
          });
        };
        TAssetManager.loadBundle = function loadBundle(abPackage, succCb, failCb) {
          var _this = this;
          var platform = sys.platform.toLowerCase();
          var remoteBundleMD5 = globalThis.RemoteMD5 || {};
          var remoteBundle = remoteBundleMD5[abPackage] || "";
          var url = "" + assetManager.downloader.remoteServerAddress + platform + "/" + remoteBundle;
          var bundleStr = remoteBundle.length == 0 ? abPackage : url;
          assetManager.loadBundle(bundleStr, function (err, bundle) {
            if (err) {
              failCb && failCb(err, null);
              return;
            }
            _this.bundleCanche[abPackage] = bundle;
            succCb && succCb(bundle);
          });
        };
        TAssetManager.getBundle = function getBundle(abPackage) {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            if (abPackage in _this2.bundleCanche) {
              resolve(_this2.bundleCanche[abPackage]);
              return;
            }
            _this2.loadBundle(abPackage, function (bundle) {
              resolve(bundle);
            }, function (error, assets) {
              reject(error);
            });
          });
        };
        TAssetManager.preLoadDir = function preLoadDir(paths, abPackage, onProgress, onComplete) {
          var _this3 = this;
          var params = {
            paths: paths
          };
          if (typeof abPackage === 'string') {
            params.abPackage = abPackage;
          } else if (abPackage.length == 3) {
            params.onProgress = abPackage;
          } else {
            params.onComplete = abPackage;
          }
          if (onProgress && onProgress.length == 3) {
            params.onProgress = onProgress;
          } else if (onProgress && onProgress.length == 2) {
            params.onComplete = onProgress;
          }
          if (onComplete) {
            params.onComplete = onComplete;
          }
          if (!params.onProgress) {
            params.onProgress = function (finish, total, item) {};
          }
          var finishs = new Array(params.paths.length).fill(0);
          var totals = new Array(params.paths.length).fill(0);
          var onProgressFunc = function onProgressFunc(index, finish, total, item) {
            finishs[index] = finish;
            totals[index] = total;
            params.onProgress(finishs.reduce(function (a, b) {
              return a + b;
            }), totals.reduce(function (a, b) {
              return a + b;
            }), item);
          };
          params.paths.forEach(function (path, index) {
            _this3.loadDir(path, params.abPackage, function (finish, total, item) {
              onProgressFunc(index, finish, total, item);
            }, params.onComplete);
          });
        };
        return TAssetManager;
      }());
      TAssetManager.bundleCanche = {};
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tea.decorators.ts", ['cc'], function (exports) {
  var cclegacy, find;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
    }],
    execute: function () {
      exports({
        DefaultValue: DefaultValue,
        MainCamera: MainCamera,
        MainMapper: MainMapper,
        Path: Path,
        Value: Value
      });
      cclegacy._RF.push({}, "467a8eaNS5KWb0mSNaPIBbF", "tea.decorators", undefined);
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
          var symbol = Symbol["for"](key);
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
          };
          // Object.defineProperty(target, key, handler);

          return handler;
        };
      }
      function DefaultValue(value) {
        return function (target, key) {
          var symbol = Symbol["for"](key);
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
          };
          // Object.defineProperty(target, key, handler);

          return handler;
        };
      }
      function Path(path, component) {
        return function (target, key) {
          var symbol = Symbol["for"](key);
          // delete target[key];
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
          };
          // Object.defineProperty(target, key, handler);

          return handler;
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Tools.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f4344vjcaRCP69sGIgZ2Gky", "Tools", undefined);
      var BundleName = exports('BundleName', /*#__PURE__*/function (BundleName) {
        BundleName["hall"] = "Hall";
        BundleName["platformJump"] = "PlatformJump";
        return BundleName;
      }({}));
      var ViewName = exports('ViewName', /*#__PURE__*/function (ViewName) {
        ViewName["HallView"] = "HallView";
        ViewName["HelpView"] = "HelpView";
        ViewName["SelectLevelView"] = "SelectLevelView";
        return ViewName;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIPage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TAssetManager.ts', './SingletonFactory.ts', './GameItem.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, director, view, Canvas, ResolutionPolicy, find, Node, UITransform, instantiate, js, game, Prefab, TAssetManager, SingletonFactory, Singleton, GameItem;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      view = module.view;
      Canvas = module.Canvas;
      ResolutionPolicy = module.ResolutionPolicy;
      find = module.find;
      Node = module.Node;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      js = module.js;
      game = module.game;
      Prefab = module.Prefab;
    }, function (module) {
      TAssetManager = module.default;
    }, function (module) {
      SingletonFactory = module.default;
      Singleton = module.Singleton;
    }, function (module) {
      GameItem = module.default;
    }],
    execute: function () {
      var _dec, _class2;
      cclegacy._RF.push({}, "9a446WKgadKSbxYUxhYM2UU", "UIPage", undefined);
      var TEA_UI_TYPE = exports('TEA_UI_TYPE', /*#__PURE__*/function (TEA_UI_TYPE) {
        TEA_UI_TYPE[TEA_UI_TYPE["FULL"] = 0] = "FULL";
        TEA_UI_TYPE[TEA_UI_TYPE["POP"] = 1] = "POP";
        TEA_UI_TYPE[TEA_UI_TYPE["RESIDENT"] = 2] = "RESIDENT";
        TEA_UI_TYPE[TEA_UI_TYPE["TIP"] = 3] = "TIP";
        return TEA_UI_TYPE;
      }({}));
      var UILRU = exports('UILRU', /*#__PURE__*/function () {
        function UILRU(size) {
          this._cache = {};
          this.head = void 0;
          this.tail = void 0;
          this.size = void 0;
          this.size = size;
          this.head = {
            prev: null,
            next: null,
            ui: null
          };
          this.tail = {
            prev: null,
            next: null,
            ui: null
          };
          this.head.next = this.tail;
          this.tail.prev = this.head;
        }
        var _proto = UILRU.prototype;
        _proto["delete"] = function _delete() {
          var ui = this.head.next;
          while (ui.ui.node.active && ui != this.tail) {
            ui = ui.next;
          }
          if (ui == this.tail) {
            return;
          }
          ui.prev.next = ui.next;
          ui.next.prev = ui.prev;
          delete this._cache[ui.ui.name];
          ui.ui = null;
          ui.prev = null;
          ui.next = null;
          SingletonFactory.getInst(UIPage)['delete'](ui.ui.name);
        };
        _proto.put = function put(key, ui) {
          if (this.size == -1) return;
          var view = this._cache[key];
          if (view) {
            view.prev.next = view.next;
            view.next.prev = view.prev;
          }
          view = {
            prev: this.tail.prev,
            next: this.tail,
            ui: ui
          };
          this.tail.prev.next = view;
          this.tail.prev = view;
          this._cache[key] = view;
          if (this.size < Object.keys(this._cache).length) {
            this["delete"]();
          }
        };
        _proto.clear = function clear() {
          this._cache = {};
          this.head.next = this.tail;
          this.tail.prev = this.head;
        };
        return UILRU;
      }());
      var UIPage = exports('default', (_dec = Singleton(), _dec(_class2 = /*#__PURE__*/function () {
        function UIPage() {
          this._uiTaskList = [];
          this._uiQueue = [];
          this.isShowing = false;
          this.MountCbs = [];
          this.currGame = null;
          this._uiCache = {};
          this.FullLRU = void 0;
          this.PopLRU = void 0;
        }
        var _proto2 = UIPage.prototype;
        _proto2.GameMount = function GameMount(node) {};
        _proto2.init = function init(cb) {
          this.FullLRU = new UILRU(MaxFullPage);
          this.PopLRU = new UILRU(MaxPopPage);
          var scene = director.getScene();
          var size = view.getVisibleSize();
          var resolutionSize = view.getDesignResolutionSize();
          var canvas = scene.getComponentInChildren(Canvas).node;
          if (size.height / size.width > 1.5) {
            view.setDesignResolutionSize(resolutionSize.width, resolutionSize.height, ResolutionPolicy.FIXED_WIDTH);
          } else {
            view.setDesignResolutionSize(resolutionSize.width, resolutionSize.height, ResolutionPolicy.SHOW_ALL);
          }
          var oldGameRoot2D = find("GameNode2D");
          oldGameRoot2D && oldGameRoot2D.destroy();
          var oldGameRoot3D = find("GameNode3D");
          oldGameRoot3D && oldGameRoot3D.destroy();
          var gameNode2D = new Node();
          var gameTrans = gameNode2D.addComponent(UITransform);
          gameNode2D.name = "GameNode2D";
          gameNode2D.parent = canvas;
          var gameNode3D = new Node();
          gameNode3D.name = "GameNode3D";
          gameNode3D.parent = scene;
          var oldUIRoot = find("UIRoot", canvas);
          oldUIRoot && oldUIRoot.destroy();
          var uiRoot = new Node();
          var uiTrans = uiRoot.addComponent(UITransform);
          uiRoot.name = "UIRoot";
          uiRoot.parent = canvas;
          var fullNode = new Node();
          fullNode.name = "Full";
          fullNode.parent = uiRoot;
          var residentNode = new Node();
          residentNode.name = "Resident";
          residentNode.parent = uiRoot;
          var popNode = new Node();
          popNode.name = "Pop";
          popNode.parent = uiRoot;
          var tipNode = new Node();
          tipNode.name = "Tip";
          tipNode.parent = uiRoot;
          this.MountCbs[TEA_UI_TYPE.FULL] = function (view) {
            view.setContentSize(uiTrans.contentSize);
            fullNode.addChild(view);
            view.setPosition(0, 0);
          };
          this.MountCbs[TEA_UI_TYPE.POP] = function (view) {
            view.setContentSize(uiTrans.contentSize);
            popNode.addChild(view);
            view.setPosition(0, 0);
          };
          this.MountCbs[TEA_UI_TYPE.TIP] = function (view) {
            view.setContentSize(uiTrans.contentSize);
            tipNode.addChild(view);
            view.setPosition(0, 0);
          };
          this.MountCbs[TEA_UI_TYPE.RESIDENT] = function (view) {
            view.setContentSize(uiTrans.contentSize);
            residentNode.addChild(view);
            view.setPosition(0, 0);
          };
          this.GameMount = function (game) {
            gameNode2D.removeAllChildren();
            gameNode3D.removeAllChildren();
            if (game.getComponent(GameItem).is3D()) {
              gameNode3D.addChild(game);
            } else {
              gameNode2D.addChild(game);
            }
            game.setPosition(0, 0, 0);
          };
          requestAnimationFrame(function () {
            var canvasSize = canvas.getComponent(UITransform).contentSize;
            uiTrans.setContentSize(canvasSize);
            gameTrans.setContentSize(canvasSize);
            canvas.setSiblingIndex(999);
            [fullNode, popNode, tipNode, residentNode].forEach(function (node) {
              var trans = node.addComponent(UITransform);
              trans.setContentSize(uiTrans.contentSize);
            });
            cb && cb();
          });
        };
        _proto2.ShowDialog = function ShowDialog(uiName) {
          var _this = this;
          for (var _len = arguments.length, uiData = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            uiData[_key - 1] = arguments[_key];
          }
          var fun = function fun(ui) {
            var index = Object.keys(_this._uiCache).length + 1;
            ui.node.setSiblingIndex(index);
            ui.node.active = true;
            var PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit.apply(ui, uiData);
            _this.PopLRU.put(uiName, ui);
          };
          this.loadUI(uiName, fun.bind(this));
        };
        _proto2.ShowTip = function ShowTip(uiName) {
          var _this2 = this;
          for (var _len2 = arguments.length, uiData = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            uiData[_key2 - 1] = arguments[_key2];
          }
          var ui = this._uiCache[uiName];
          if (ui && ui.node.active) {
            ui['queue'].push(function () {
              _this2.ShowTip.apply(_this2, [uiName].concat(uiData));
            });
            return;
          }
          var fun = function fun(ui) {
            if (!ui) return;
            var index = Object.keys(_this2._uiCache).length + 1;
            ui.node.setSiblingIndex(index);
            ui.node.active = true;
            var PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit.apply(ui, uiData);
          };
          this.loadUI(uiName, fun.bind(this));
        };
        _proto2.ShowCommon = function ShowCommon(uiName) {
          for (var _len3 = arguments.length, uiData = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            uiData[_key3 - 1] = arguments[_key3];
          }
          var fun = function fun(ui) {
            if (!ui) return;
            ui.node.active = true;
            var PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit.apply(ui, uiData);
          };
          this.loadUI(uiName, fun.bind(this));
        };
        _proto2.loadUI = function loadUI(uiName, cb) {
          var _this3 = this;
          if (this.isShowing) {
            this._uiQueue.push(function () {
              _this3.loadUI(uiName, cb);
            });
            return;
          }
          this.isShowing = true;
          var fun = function fun() {
            if (_this3._uiQueue.length == 0) {
              _this3.isShowing = false;
              return;
            }
            requestAnimationFrame(function () {
              _this3.isShowing = false;
              _this3._uiQueue.shift()();
            });
          };
          var ui = this._uiCache[uiName];
          if (ui) {
            cb(ui);
            fun();
            return;
          }
          TAssetManager.load(UIPath + uiName, MainBundle, function (err, assets) {
            if (err) {
              ERROR(err);
              fun();
              return;
            }
            var node = instantiate(assets);
            ui = node.getComponent(uiName);
            if (!ui) {
              ui = node.addComponent(uiName);
            }
            if (!ui) {
              ERROR("UIView not found");
              return;
            }
            console.log(ui.onCreated);
            ui.onCreated();
            _this3.MountCbs[ui.UIType](node);
            var Mount = ui.constructor.prototype['TeaUIPageMount'];
            Mount && Mount.call(ui);
            _this3._uiCache[uiName] = ui;
            cb(ui);
            fun();
          });
        };
        _proto2.HideUI = function HideUI(param) {
          var ui;
          if (typeof param === "string") {
            ui = this._uiCache[param];
          } else {
            ui = param;
          }
          if (!ui) return;
          ui.node.active = false;
          var PageHide = ui.constructor.prototype['TeaUIPageHide'];
          PageHide && PageHide.call(ui);
          var len = this._uiTaskList.length;
          if (this._uiTaskList[len - 1].name == param) {
            this._uiTaskList.pop();
          }
        };
        _proto2.BackUI = function BackUI() {
          if (this._uiTaskList.length <= 1) return;
          var ui = this._uiTaskList.pop();
          ui.node.active = false;
          var PageHide = ui.constructor.prototype['TeaUIPageHide'];
          PageHide && PageHide.call(ui);
          var backUI = this._uiTaskList[this._uiTaskList.length - 1];
          backUI.node.active = true;
          var PageShow = backUI.constructor.prototype['TeaUIPageShow'];
          PageShow && PageShow.call(backUI);
        }

        /**慎用，需要考虑到最大层级 */;
        _proto2.PopView = function PopView(uiName) {
          var _this4 = this;
          for (var _len4 = arguments.length, uiData = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            uiData[_key4 - 1] = arguments[_key4];
          }
          if (this._uiTaskList.length >= MaxPage) return;
          if (this._uiTaskList.length > 0 && this._uiTaskList[this._uiTaskList.length - 1].name == uiName && !this._uiTaskList[this._uiTaskList.length - 1].node.active) {
            this._uiTaskList[this._uiTaskList.length - 1].node.active = true;
            var PageShow = this._uiTaskList[this._uiTaskList.length - 1].constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(this._uiTaskList[this._uiTaskList.length - 1]);
            return;
          }
          var fun = function fun(ui) {
            if (!ui) return;
            Object.keys(_this4._uiCache).forEach(function (key) {
              if (_this4._uiCache[key].UIType != TEA_UI_TYPE.RESIDENT && ui != _this4._uiCache[key]) {
                _this4._uiCache[key].node.active = false;
                var PageHide = _this4._uiCache[key].constructor.prototype['TeaUIPageHide'];
                PageHide && PageHide.call(_this4._uiCache[key]);
              }
            });
            ui.node.active = true;
            var PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit.apply(ui, uiData);
            _this4._uiTaskList.push(ui);
            _this4.FullLRU.put(uiName, ui);
          };
          this.loadUI(uiName, fun.bind(this));
        };
        _proto2.SwitchView = function SwitchView(uiName) {
          var _this5 = this;
          for (var _len5 = arguments.length, uiData = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            uiData[_key5 - 1] = arguments[_key5];
          }
          var fun = function fun(ui) {
            if (!ui) return;
            Object.keys(_this5._uiCache).forEach(function (key) {
              if (_this5._uiCache[key].UIType != TEA_UI_TYPE.RESIDENT && ui != _this5._uiCache[key]) {
                _this5._uiCache[key].node.active = false;
                var PageHide = _this5._uiCache[key].constructor.prototype['TeaUIPageHide'];
                PageHide && PageHide.call(_this5._uiCache[key]);
              }
            });
            if (_this5._uiTaskList.length > 0) {
              _this5._uiTaskList.pop();
            }
            ui.node.active = true;
            var PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit.apply(ui, uiData);
            _this5._uiTaskList.push(ui);
            _this5.FullLRU.put(uiName, ui);
          };
          this.loadUI(uiName, fun.bind(this));
        };
        _proto2.ResetToView = function ResetToView(uiName) {
          var _this6 = this;
          for (var _len6 = arguments.length, uiData = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            uiData[_key6 - 1] = arguments[_key6];
          }
          var fun = function fun(ui) {
            if (!ui) return;
            Object.keys(_this6._uiCache).forEach(function (key) {
              if (_this6._uiCache[key].UIType != TEA_UI_TYPE.RESIDENT && ui != _this6._uiCache[key]) {
                _this6._uiCache[key].node.active = false;
                var PageHide = _this6._uiCache[key].constructor.prototype['TeaUIPageHide'];
                PageHide && PageHide.call(_this6._uiCache[key]);
              }
            });
            _this6._uiTaskList.length = 0;
            ui.node.active = true;
            var PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit.apply(ui, uiData);
            _this6._uiTaskList.push(ui);
            _this6.FullLRU.put(uiName, ui);
          };
          this.loadUI(uiName, fun.bind(this));
        };
        _proto2.preLoadUI = function preLoadUI(uiList, cb) {
          var _this7 = this;
          if (cb === void 0) {
            cb = null;
          }
          if (uiList.length == 0) {
            cb && cb();
            return;
          }
          var len = uiList.length;
          var index = 0;
          uiList.forEach(function (ui) {
            var _ui$abPackage;
            ui.abPackage = (_ui$abPackage = ui.abPackage) != null ? _ui$abPackage : '';
            TAssetManager.loadDir(ui.path, ui.abPackage, function (err, assets) {
              if (err) {
                ERROR("loadDir error:", err);
                return;
              }
              assets.forEach(function (asset) {
                var node = instantiate(asset);
                node.active = false;
                var ui = node.getComponent(asset.name);
                if (!ui) {
                  var clazz = js.getClassByName(asset.name);
                  ui = node.addComponent(clazz);
                }
                if (!ui) {
                  ERROR("UIView not found");
                  return;
                }
                ui.onCreated();
                _this7.MountCbs[ui.UIType](node);
                var Mount = ui.constructor.prototype['TeaUIPageMount'];
                Mount && Mount.call(ui);
                _this7._uiCache[node.name] = ui;
              });
              index++;
              index >= len && cb && cb();
            });
          });
        };
        _proto2.CloseAllUI = function CloseAllUI() {
          var _this8 = this;
          this._uiQueue = [];
          this._uiTaskList = [];
          Object.keys(this._uiCache).forEach(function (key) {
            _this8._uiCache[key].node.active = false;
            var PageHide = _this8._uiCache[key].constructor.prototype['TeaUIPageHide'];
            PageHide && PageHide.call(_this8._uiCache[key]);
          });
          this.FullLRU.clear();
          this.PopLRU.clear();
        };
        _proto2.preLoadAllUI = function preLoadAllUI(cb) {
          var _this9 = this;
          if (cb === void 0) {
            cb = null;
          }
          TAssetManager.loadDir(UIPath, MainBundle, function (err, assets) {
            if (err) {
              ERROR("loadDir error:", err);
              return;
            }
            assets.forEach(function (asset) {
              var uiName = asset.name;
              if (!_this9._uiCache[uiName]) {
                var node = instantiate(asset);
                node.active = false;
                var ui = node.getComponent(uiName);
                if (!ui) {
                  var clazz = js.getClassByName(asset.name);
                  ui = node.addComponent(clazz);
                }
                if (!ui) {
                  ERROR("UIView not found");
                  return;
                }
                ui.onCreated();
                _this9.MountCbs[ui.UIType](node);
                var Mount = ui.constructor.prototype['TeaUIPageMount'];
                Mount && Mount.call(ui);
                _this9._uiCache[node.name] = ui;
              }
            });
            cb && cb();
          });
        };
        _proto2.checkUI = function checkUI(uiName) {
          return this._uiCache[uiName] && this._uiCache[uiName].node.active;
        };
        _proto2.ClearUI = function ClearUI() {
          this._uiTaskList = [];
          this._uiCache = {};
          this._uiQueue = [];
          this.isShowing = false;
        };
        _proto2["delete"] = function _delete(view) {
          var ui = this._uiCache[view];
          if (ui) {
            !ui.constructor.prototype.SymbolBundleName && (ui.node.destroy(), delete this._uiCache[view]);
            ui.constructor.prototype.SymbolBundleName && ui.node.removeFromParent();
          }
        };
        _proto2.addUI = function addUI(prefabs, cb) {
          var _this10 = this;
          prefabs.forEach(function (prefab) {
            var uiName = prefab.name;
            var node = _this10._uiCache[uiName] ? _this10._uiCache[uiName].node : instantiate(prefab);
            node.active = false;
            var ui = node.getComponent(uiName);
            if (!ui) {
              ui = node.addComponent(uiName);
            }
            if (!ui) {
              ERROR("UIView not found");
              return;
            }
            _this10.MountCbs[ui.UIType](node);
            var Mount = ui.constructor.prototype['TeaUIPageMount'];
            Mount && Mount.call(ui);
            _this10._uiCache[uiName] = ui;
          });
          cb();
        };
        _proto2.startGame = /*#__PURE__*/function () {
          var _startGame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(classType) {
            var _this11 = this;
            var _len7,
              uiData,
              _key7,
              clazz,
              bundle,
              name,
              bundleName,
              path,
              viewPath,
              fun,
              loadView,
              loadGame,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  for (_len7 = _args.length, uiData = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
                    uiData[_key7 - 1] = _args[_key7];
                  }
                  clazz = null;
                  if (!(typeof classType == 'string')) {
                    _context.next = 12;
                    break;
                  }
                  _context.next = 5;
                  return TAssetManager.getBundle(classType);
                case 5:
                  bundle = _context.sent;
                  if (bundle) {
                    _context.next = 9;
                    break;
                  }
                  ERROR("Bundle not found: " + classType);
                  return _context.abrupt("return");
                case 9:
                  clazz = js.getClassByName(classType);
                  _context.next = 13;
                  break;
                case 12:
                  clazz = classType;
                case 13:
                  name = clazz.prototype['SymbolName'];
                  bundleName = clazz.prototype['SymbolBundleName'];
                  path = clazz.prototype['SymbolPath'];
                  viewPath = clazz.prototype['SymbolViewPath'];
                  fun = function fun(gameItem) {
                    if (!gameItem) return;
                    gameItem.node.active = true;
                    var PageShow = gameItem.constructor.prototype['TeaUIPageShow'];
                    PageShow && PageShow.call(gameItem);
                    gameItem.onInit.apply(gameItem, uiData);
                  };
                  loadView = new Promise(function (resolve, reject) {
                    TAssetManager.loadDir(viewPath, bundleName, Prefab, function (err, assets) {
                      if (err) {
                        ERROR(err);
                        return;
                      }
                      assets.forEach(function (asset) {
                        var node = instantiate(asset);
                        var name = node.name;
                        node.active = false;
                        var ui = node.getComponent(name);
                        var SymbolBundleName = Symbol["for"]('SymbolBundleName');
                        if (!ui) {
                          var _clazz = js.getClassByName(asset.name);
                          ui = node.addComponent(_clazz);
                        }
                        if (!ui) {
                          ERROR(name + " not found");
                          return;
                        }
                        ui.constructor.prototype[SymbolBundleName] = bundleName;
                        ui.onCreated();
                        _this11.MountCbs[ui.UIType](node);
                        var Mount = ui.constructor.prototype['TeaUIPageMount'];
                        Mount && Mount.call(ui);
                        _this11._uiCache[name] = ui;
                      });
                      resolve(null);
                    });
                  });
                  loadGame = new Promise(function (resolve, reject) {
                    if (_this11.currGame) {
                      var gameNode = _this11.currGame.node;
                      var currBundleName = _this11.currGame['SymbolBundleName'];
                      gameNode.destroy();
                      _this11.currGame = null;
                      currBundleName == bundleName || setTimeout(function () {
                        _this11.clearUIByBundle(currBundleName);
                      }, game.frameTime);
                    }
                    TAssetManager.load(path, bundleName, Prefab, function (err, assets) {
                      if (err) {
                        ERROR(err);
                        return;
                      }
                      LOG("loadGame", assets);
                      var node = instantiate(assets);
                      var gameItem = node.getComponent(GameItem);
                      if (!gameItem) {
                        gameItem = node.addComponent(clazz);
                      }
                      if (!gameItem) {
                        ERROR("GameItem not found: " + name);
                        return;
                      }
                      _this11.CloseAllUI();
                      gameItem.onCreated();
                      _this11.GameMount(node);
                      var Mount = gameItem.constructor.prototype['TeaUIPageMount'];
                      Mount && Mount.call(gameItem);
                      _this11.currGame = gameItem;
                      fun(gameItem);
                      resolve(null);
                    });
                  });
                  Promise.resolve().then(function () {
                    LOG("Promise.resolve ====> loadView");
                    return loadView;
                  }).then(function () {
                    LOG("Promise.resolve ====> loadGame");
                    return loadGame;
                  })["catch"](function (err) {
                    ERROR(err);
                  });
                case 21:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function startGame(_x) {
            return _startGame.apply(this, arguments);
          }
          return startGame;
        }();
        _proto2.stopGame = function stopGame(cb) {
          if (!this.currGame) {
            cb && cb();
            return;
          }
          var gameNode = this.currGame.node;
          gameNode.active = false;
          this.currGame['TeaUIPageHide']();
          cb && cb();
        };
        _proto2.clearUIByBundle = function clearUIByBundle(bundleName) {
          var _this12 = this;
          var SymbolBundleName = Symbol["for"]('SymbolBundleName');
          var keys = Object.keys(this._uiCache).filter(function (key) {
            return _this12._uiCache[key][SymbolBundleName] === bundleName;
          });
          var fun = function fun() {
            var MAX_DESTROY_NUM = game.frameTime < 16 ? 10 : game.frameTime < 33 ? 8 : 5;
            var processed = 0;
            while (keys.length > 0) {
              var k = keys.shift();
              _this12._uiCache[k].node.destroy();
              delete _this12._uiCache[k];
              processed++;
              if (processed >= MAX_DESTROY_NUM) {
                break;
              }
            }
            if (keys.length > 0) {
              requestAnimationFrame(fun.bind(_this12));
            } else {
              TAssetManager.releaseAll(bundleName);
            }
          };
          fun();
        };
        return UIPage;
      }()) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SingletonFactory.ts', './UIPage.ts', './ProxyData.ts'], function (exports) {
  var _inheritsLoose, cclegacy, js, Component, SingletonFactory, TEA_UI_TYPE, UIPage, ProxyData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
      Component = module.Component;
    }, function (module) {
      SingletonFactory = module.default;
    }, function (module) {
      TEA_UI_TYPE = module.TEA_UI_TYPE;
      UIPage = module.default;
    }, function (module) {
      ProxyData = module.default;
    }],
    execute: function () {
      exports({
        onCreated: onCreated,
        onHide: onHide,
        onInit: onInit,
        onMount: onMount,
        onShow: onShow
      });
      cclegacy._RF.push({}, "51846wYtvJGmoHxkOS9HanK", "UIView", undefined);
      var UIView = exports('UIView', /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIView, _Component);
        function UIView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**占位，勿使用同名变量名 */
          _this.SymbolBundleName = void 0;
          return _this;
        }
        var _proto = UIView.prototype;
        _proto.onMount = function onMount() {};
        _proto.onInit = function onInit() {};
        _proto.onShow = function onShow() {};
        _proto.onHide = function onHide() {};
        _proto.onCreated = function onCreated() {};
        /**
         * Full视图建议调用pop、switch、resetTo方法或重写ShowType类型后调用show，否则show方法会使用默认的ShowType
         * @param params
         */
        UIView.show = function show() {};
        _proto.TeaUIPageMount = function TeaUIPageMount() {
          var onMounts = Symbol["for"]('TeaMounts');
          var onShows = Symbol["for"]('TeaShows');
          var onHides = Symbol["for"]('TeaHides');
          this[onMounts] = this[onMounts] || [];
          this[onShows] = this[onShows] || [];
          this[onHides] = this[onHides] || [];
          this[onMounts].push(this.onMount.bind(this));
          this[onShows].push(this.onShow.bind(this));
          this[onHides].push(this.onHide.bind(this));
          if (this.UIType === TEA_UI_TYPE.TIP) {
            var fun = function fun() {
              var _this2 = this;
              if (this.timer > 0) {
                this.scheduleOnce(function () {
                  _this2.hide();
                  if (_this2.queue.length > 0) {
                    _this2.queue.shift()();
                  }
                }, this.timer);
              }
            };
            this[onShows].push(fun.bind(this));
          }
          this[onMounts].forEach(function (fun) {
            fun();
          });
        };
        _proto.TeaUIPageShow = function TeaUIPageShow() {
          var _this3 = this;
          var symbol = Symbol["for"]('observers');
          var TargetClass = this.constructor;
          if (TargetClass.prototype[symbol]) {
            var map = TargetClass.prototype[symbol];
            var keys = Array.from(map.keys());
            keys.forEach(function (key) {
              var list = TargetClass.prototype[symbol].get(key);
              var val = ProxyData.getDataSource(key);
              list.forEach(function (prop) {
                ProxyData.addObserver(key, _this3, prop);
                _this3[prop] = val;
              });
            });
          }
          var onShows = Symbol["for"]('TeaShows');
          this[onShows].forEach(function (fun) {
            fun();
          });
        };
        _proto.TeaUIPageHide = function TeaUIPageHide() {
          var _this4 = this;
          var symbol = Symbol["for"]('observers');
          var TargetClass = this.constructor;
          if (TargetClass.prototype[symbol]) {
            var map = TargetClass.prototype[symbol];
            var keys = Array.from(map.keys());
            keys.forEach(function (key) {
              var list = TargetClass.prototype[symbol].get(key);
              list.forEach(function (prop) {
                ProxyData.removeObserver(key, _this4, prop);
              });
            });
          }
          var onHides = Symbol["for"]('TeaHides');
          this[onHides].forEach(function (fun) {
            fun();
          });
        };
        _proto.hide = function hide() {
          SingletonFactory.getInst(UIPage).HideUI(this);
        };
        UIView.hide = function hide() {
          SingletonFactory.getInst(UIPage).HideUI(js.getClassName(this));
        };
        _proto.getInst = function getInst(classType) {
          return SingletonFactory.getInst(classType);
        };
        return UIView;
      }(Component));
      var FullView = exports('FullView', /*#__PURE__*/function (_UIView) {
        _inheritsLoose(FullView, _UIView);
        function FullView() {
          var _this5;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this5 = _UIView.call.apply(_UIView, [this].concat(args)) || this;
          _this5.ShowType = ShowType.Stack;
          _this5.UIType = TEA_UI_TYPE.FULL;
          return _this5;
        }
        var _proto2 = FullView.prototype;
        _proto2.back = function back() {
          SingletonFactory.getInst(UIPage).BackUI();
        };
        FullView.show = function show() {
          var _SingletonFactory$get;
          for (var _len3 = arguments.length, uiData = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            uiData[_key3] = arguments[_key3];
          }
          (_SingletonFactory$get = SingletonFactory.getInst(UIPage)).PopView.apply(_SingletonFactory$get, [js.getClassName(this)].concat(uiData));
        };
        FullView["switch"] = function _switch() {
          var _SingletonFactory$get2;
          for (var _len4 = arguments.length, uiData = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            uiData[_key4] = arguments[_key4];
          }
          (_SingletonFactory$get2 = SingletonFactory.getInst(UIPage)).SwitchView.apply(_SingletonFactory$get2, [js.getClassName(this)].concat(uiData));
        };
        FullView.resetTo = function resetTo() {
          var _SingletonFactory$get3;
          for (var _len5 = arguments.length, uiData = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            uiData[_key5] = arguments[_key5];
          }
          (_SingletonFactory$get3 = SingletonFactory.getInst(UIPage)).ResetToView.apply(_SingletonFactory$get3, [js.getClassName(this)].concat(uiData));
        };
        return FullView;
      }(UIView));
      var PopView = exports('PopView', /*#__PURE__*/function (_UIView2) {
        _inheritsLoose(PopView, _UIView2);
        function PopView() {
          var _this6;
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }
          _this6 = _UIView2.call.apply(_UIView2, [this].concat(args)) || this;
          _this6.UIType = TEA_UI_TYPE.POP;
          return _this6;
        }
        PopView.show = function show() {
          var _SingletonFactory$get4;
          for (var _len7 = arguments.length, params = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            params[_key7] = arguments[_key7];
          }
          (_SingletonFactory$get4 = SingletonFactory.getInst(UIPage))['ShowDialog'].apply(_SingletonFactory$get4, [js.getClassName(this)].concat(params));
        };
        return PopView;
      }(UIView));
      var TipView = exports('TipView', /*#__PURE__*/function (_UIView3) {
        _inheritsLoose(TipView, _UIView3);
        function TipView() {
          var _this7;
          for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
          }
          _this7 = _UIView3.call.apply(_UIView3, [this].concat(args)) || this;
          _this7.UIType = TEA_UI_TYPE.TIP;
          _this7.queue = [];
          _this7.timer = 3;
          return _this7;
        }
        TipView.show = function show() {
          var _SingletonFactory$get5;
          for (var _len9 = arguments.length, params = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            params[_key9] = arguments[_key9];
          }
          (_SingletonFactory$get5 = SingletonFactory.getInst(UIPage))['ShowTip'].apply(_SingletonFactory$get5, [js.getClassName(this)].concat(params));
        };
        return TipView;
      }(UIView));
      var ResidentView = exports('ResidentView', /*#__PURE__*/function (_UIView4) {
        _inheritsLoose(ResidentView, _UIView4);
        function ResidentView() {
          var _this8;
          for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
          }
          _this8 = _UIView4.call.apply(_UIView4, [this].concat(args)) || this;
          _this8.UIType = TEA_UI_TYPE.RESIDENT;
          return _this8;
        }
        ResidentView.show = function show() {
          var _SingletonFactory$get6;
          for (var _len11 = arguments.length, params = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            params[_key11] = arguments[_key11];
          }
          (_SingletonFactory$get6 = SingletonFactory.getInst(UIPage))['ShowCommon'].apply(_SingletonFactory$get6, [js.getClassName(this)].concat(params));
        };
        return ResidentView;
      }(UIView));
      var ShowType = exports('ShowType', /*#__PURE__*/function (ShowType) {
        ShowType[ShowType["Stack"] = 0] = "Stack";
        ShowType[ShowType["Switch"] = 1] = "Switch";
        ShowType[ShowType["ResetTo"] = 2] = "ResetTo";
        return ShowType;
      }({}));
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
          for (var _len12 = arguments.length, params = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
            params[_key12] = arguments[_key12];
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
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UUID.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "99caa0SHdRO7qaJzVJUHe1W", "UUID", undefined);
      var UUID = exports('default', /*#__PURE__*/function () {
        function UUID() {}
        UUID.generateUUID = function generateUUID() {
          var hexDigits = '0123456789abcdef';
          var s = Array(36).fill('');
          for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.charAt(Math.floor(Math.random() * 0x10));
          }
          s[14] = '4';
          s[19] = hexDigits.charAt(parseInt(s[19], 16) & 0x3 | 0x8);
          s[8] = s[13] = s[18] = s[23] = '-';
          return s.join('');
        };
        return UUID;
      }());
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Common', 'chunks:///_virtual/Common'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});