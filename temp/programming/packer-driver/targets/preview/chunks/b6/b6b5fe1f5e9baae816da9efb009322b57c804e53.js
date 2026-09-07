System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, instantiate, Prefab, Node, UITransform, view, game, director, Canvas, js, ResolutionPolicy, AssetsManager, SingletonFactory, Singleton, GameItem, UILRU, _dec, _class2, _crd, TEA_UI_TYPE, UIPage;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfAssetsManager(extras) {
    _reporterNs.report("AssetsManager", "../Util/AssetsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingletonFactory(extras) {
    _reporterNs.report("SingletonFactory", "../Util/SingletonFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../Util/SingletonFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFullView(extras) {
    _reporterNs.report("FullView", "./UIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopView(extras) {
    _reporterNs.report("PopView", "./UIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResidentView(extras) {
    _reporterNs.report("ResidentView", "./UIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipView(extras) {
    _reporterNs.report("TipView", "./UIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIView(extras) {
    _reporterNs.report("UIView", "./UIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameItem(extras) {
    _reporterNs.report("GameItem", "./GameItem", _context.meta, extras);
  }

  _export("UILRU", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      view = _cc.view;
      game = _cc.game;
      director = _cc.director;
      Canvas = _cc.Canvas;
      js = _cc.js;
      ResolutionPolicy = _cc.ResolutionPolicy;
    }, function (_unresolved_2) {
      AssetsManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      SingletonFactory = _unresolved_3.default;
      Singleton = _unresolved_3.Singleton;
    }, function (_unresolved_4) {
      GameItem = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a446WKgadKSbxYUxhYM2UU", "UIPage", undefined);

      __checkObsolete__(['find', 'instantiate', 'Prefab', 'Node', 'UITransform', 'view', 'Script', 'assetManager', 'game', 'director', 'AssetManager', 'Canvas', 'js', 'ResolutionPolicy', 'screen']);

      _export("TEA_UI_TYPE", TEA_UI_TYPE = /*#__PURE__*/function (TEA_UI_TYPE) {
        TEA_UI_TYPE[TEA_UI_TYPE["FULL"] = 0] = "FULL";
        TEA_UI_TYPE[TEA_UI_TYPE["POP"] = 1] = "POP";
        TEA_UI_TYPE[TEA_UI_TYPE["RESIDENT"] = 2] = "RESIDENT";
        TEA_UI_TYPE[TEA_UI_TYPE["TIP"] = 3] = "TIP";
        return TEA_UI_TYPE;
      }({}));

      _export("UILRU", UILRU = class UILRU {
        constructor(size) {
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

        delete() {
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
          (_crd && SingletonFactory === void 0 ? (_reportPossibleCrUseOfSingletonFactory({
            error: Error()
          }), SingletonFactory) : SingletonFactory).getInst(UIPage)['delete'](ui.ui.name);
        }

        put(key, ui) {
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
            this.delete();
          }
        }

        clear() {
          this._cache = {};
          this.head.next = this.tail;
          this.tail.prev = this.head;
        }

      });

      _export("default", UIPage = (_dec = (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton)(), _dec(_class2 = class UIPage {
        constructor() {
          this._uiTaskList = [];
          this._uiQueue = [];
          this.isShowing = false;
          this.MountCbs = [];
          this.currGame = null;
          this._uiCache = {};
          this.FullLRU = void 0;
          this.PopLRU = void 0;
        }

        GameMount(node) {}

        init(cb) {
          this.FullLRU = new UILRU(MaxFullPage);
          this.PopLRU = new UILRU(MaxPopPage);
          var scene = director.getScene();
          var size = view.getVisibleSize();
          var resolutionSize = view.getDesignResolutionSize();
          var canvas = scene.getComponentInChildren(Canvas).node;

          if (size.height / size.width > 1.5) {
            view.setDesignResolutionSize(resolutionSize.width, resolutionSize.height, ResolutionPolicy.FIXED_WIDTH);
          } else {
            view.setDesignResolutionSize(resolutionSize.width, resolutionSize.height, ResolutionPolicy.FIXED_HEIGHT);
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

          this.MountCbs[TEA_UI_TYPE.FULL] = view => {
            view.setContentSize(uiTrans.contentSize);
            fullNode.addChild(view);
            view.setPosition(0, 0);
          };

          this.MountCbs[TEA_UI_TYPE.POP] = view => {
            view.setContentSize(uiTrans.contentSize);
            popNode.addChild(view);
            view.setPosition(0, 0);
          };

          this.MountCbs[TEA_UI_TYPE.TIP] = view => {
            view.setContentSize(uiTrans.contentSize);
            tipNode.addChild(view);
            view.setPosition(0, 0);
          };

          this.MountCbs[TEA_UI_TYPE.RESIDENT] = view => {
            view.setContentSize(uiTrans.contentSize);
            residentNode.addChild(view);
            view.setPosition(0, 0);
          };

          this.GameMount = game => {
            gameNode2D.removeAllChildren();
            gameNode3D.removeAllChildren();

            if (game.getComponent(_crd && GameItem === void 0 ? (_reportPossibleCrUseOfGameItem({
              error: Error()
            }), GameItem) : GameItem).is3D()) {
              gameNode3D.addChild(game);
            } else {
              gameNode2D.addChild(game);
            }

            game.setPosition(0, 0, 0);
          };

          requestAnimationFrame(() => {
            var canvasSize = canvas.getComponent(UITransform).contentSize;
            uiTrans.setContentSize(canvasSize);
            gameTrans.setContentSize(canvasSize);
            canvas.setSiblingIndex(999);
            [fullNode, popNode, tipNode, residentNode].forEach(node => {
              var trans = node.addComponent(UITransform);
              trans.setContentSize(uiTrans.contentSize);
            });
            cb && cb();
          });
        }

        ShowDialog(uiName) {
          for (var _len = arguments.length, uiData = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            uiData[_key - 1] = arguments[_key];
          }

          var fun = ui => {
            var index = Object.keys(this._uiCache).length + 1;
            ui.node.setSiblingIndex(index);
            ui.node.active = true;
            var PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit(...uiData);
            this.PopLRU.put(uiName, ui);
          };

          this.loadUI(uiName, fun.bind(this));
        }

        ShowTip(uiName) {
          for (var _len2 = arguments.length, uiData = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            uiData[_key2 - 1] = arguments[_key2];
          }

          var ui = this._uiCache[uiName];

          if (ui && ui.node.active) {
            ui['queue'].push(() => {
              this.ShowTip(uiName, ...uiData);
            });
            return;
          }

          var fun = ui => {
            if (!ui) return;
            var index = Object.keys(this._uiCache).length + 1;
            ui.node.setSiblingIndex(index);
            ui.node.active = true;
            var PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit(...uiData);
          };

          this.loadUI(uiName, fun.bind(this));
        }

        ShowCommon(uiName) {
          for (var _len3 = arguments.length, uiData = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            uiData[_key3 - 1] = arguments[_key3];
          }

          var fun = ui => {
            if (!ui) return;
            ui.node.active = true;
            var PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit(...uiData);
          };

          this.loadUI(uiName, fun.bind(this));
        }

        loadUI(uiName, cb) {
          if (this.isShowing) {
            this._uiQueue.push(() => {
              this.loadUI(uiName, cb);
            });

            return;
          }

          this.isShowing = true;

          var fun = () => {
            if (this._uiQueue.length == 0) {
              this.isShowing = false;
              return;
            }

            requestAnimationFrame(() => {
              this.isShowing = false;

              this._uiQueue.shift()();
            });
          };

          var ui = this._uiCache[uiName];

          if (ui) {
            cb(ui);
            fun();
            return;
          }

          (_crd && AssetsManager === void 0 ? (_reportPossibleCrUseOfAssetsManager({
            error: Error()
          }), AssetsManager) : AssetsManager).load(UIPath + uiName, MainBundle, (err, assets) => {
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
            this.MountCbs[ui.UIType](node);
            var Mount = ui.constructor.prototype['TeaUIPageMount'];
            Mount && Mount.call(ui);
            this._uiCache[uiName] = ui;
            cb(ui);
            fun();
          });
        }

        HideUI(param) {
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
        }

        BackUI() {
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
        /**慎用，需要考虑到最大层级 */


        PopView(uiName) {
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

          var fun = ui => {
            if (!ui) return;
            Object.keys(this._uiCache).forEach(key => {
              if (this._uiCache[key].UIType != TEA_UI_TYPE.RESIDENT && ui != this._uiCache[key]) {
                this._uiCache[key].node.active = false;
                var PageHide = this._uiCache[key].constructor.prototype['TeaUIPageHide'];
                PageHide && PageHide.call(this._uiCache[key]);
              }
            });
            ui.node.active = true;
            var PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit(...uiData);

            this._uiTaskList.push(ui);

            this.FullLRU.put(uiName, ui);
          };

          this.loadUI(uiName, fun.bind(this));
        }

        SwitchView(uiName) {
          for (var _len5 = arguments.length, uiData = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            uiData[_key5 - 1] = arguments[_key5];
          }

          var fun = ui => {
            if (!ui) return;
            Object.keys(this._uiCache).forEach(key => {
              if (this._uiCache[key].UIType != TEA_UI_TYPE.RESIDENT && ui != this._uiCache[key]) {
                this._uiCache[key].node.active = false;
                var PageHide = this._uiCache[key].constructor.prototype['TeaUIPageHide'];
                PageHide && PageHide.call(this._uiCache[key]);
              }
            });

            if (this._uiTaskList.length > 0) {
              this._uiTaskList.pop();
            }

            ui.node.active = true;
            var PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit(...uiData);

            this._uiTaskList.push(ui);

            this.FullLRU.put(uiName, ui);
          };

          this.loadUI(uiName, fun.bind(this));
        }

        ResetToView(uiName) {
          for (var _len6 = arguments.length, uiData = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            uiData[_key6 - 1] = arguments[_key6];
          }

          var fun = ui => {
            if (!ui) return;
            Object.keys(this._uiCache).forEach(key => {
              if (this._uiCache[key].UIType != TEA_UI_TYPE.RESIDENT && ui != this._uiCache[key]) {
                this._uiCache[key].node.active = false;
                var PageHide = this._uiCache[key].constructor.prototype['TeaUIPageHide'];
                PageHide && PageHide.call(this._uiCache[key]);
              }
            });
            this._uiTaskList.length = 0;
            ui.node.active = true;
            var PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit(...uiData);

            this._uiTaskList.push(ui);

            this.FullLRU.put(uiName, ui);
          };

          this.loadUI(uiName, fun.bind(this));
        }

        preLoadUI(uiList, cb) {
          if (cb === void 0) {
            cb = null;
          }

          if (uiList.length == 0) {
            cb && cb();
            return;
          }

          var len = uiList.length;
          var index = 0;
          uiList.forEach(ui => {
            var _ui$abPackage;

            ui.abPackage = (_ui$abPackage = ui.abPackage) != null ? _ui$abPackage : '';
            (_crd && AssetsManager === void 0 ? (_reportPossibleCrUseOfAssetsManager({
              error: Error()
            }), AssetsManager) : AssetsManager).loadDir(ui.path, ui.abPackage, (err, assets) => {
              if (err) {
                ERROR("loadDir error:", err);
                return;
              }

              assets.forEach(asset => {
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
                this.MountCbs[ui.UIType](node);
                var Mount = ui.constructor.prototype['TeaUIPageMount'];
                Mount && Mount.call(ui);
                this._uiCache[node.name] = ui;
              });
              index++;
              index >= len && cb && cb();
            });
          });
        }

        CloseAllUI() {
          this._uiQueue = [];
          this._uiTaskList = [];
          Object.keys(this._uiCache).forEach(key => {
            this._uiCache[key].node.active = false;
            var PageHide = this._uiCache[key].constructor.prototype['TeaUIPageHide'];
            PageHide && PageHide.call(this._uiCache[key]);
          });
          this.FullLRU.clear();
          this.PopLRU.clear();
        }

        preLoadAllUI(cb) {
          if (cb === void 0) {
            cb = null;
          }

          (_crd && AssetsManager === void 0 ? (_reportPossibleCrUseOfAssetsManager({
            error: Error()
          }), AssetsManager) : AssetsManager).loadDir(UIPath, MainBundle, (err, assets) => {
            if (err) {
              ERROR("loadDir error:", err);
              return;
            }

            assets.forEach(asset => {
              var uiName = asset.name;

              if (!this._uiCache[uiName]) {
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
                this.MountCbs[ui.UIType](node);
                var Mount = ui.constructor.prototype['TeaUIPageMount'];
                Mount && Mount.call(ui);
                this._uiCache[node.name] = ui;
              }
            });
            cb && cb();
          });
        }

        checkUI(uiName) {
          return this._uiCache[uiName] && this._uiCache[uiName].node.active;
        }

        ClearUI() {
          this._uiTaskList = [];
          this._uiCache = {};
          this._uiQueue = [];
          this.isShowing = false;
        }

        delete(view) {
          var ui = this._uiCache[view];

          if (ui) {
            !ui.constructor.prototype.SymbolBundleName && (ui.node.destroy(), delete this._uiCache[view]);
            ui.constructor.prototype.SymbolBundleName && ui.node.removeFromParent();
          }
        }

        addUI(prefabs, cb) {
          prefabs.forEach(prefab => {
            var uiName = prefab.name;
            var node = this._uiCache[uiName] ? this._uiCache[uiName].node : instantiate(prefab);
            node.active = false;
            var ui = node.getComponent(uiName);

            if (!ui) {
              ui = node.addComponent(uiName);
            }

            if (!ui) {
              ERROR("UIView not found");
              return;
            }

            this.MountCbs[ui.UIType](node);
            var Mount = ui.constructor.prototype['TeaUIPageMount'];
            Mount && Mount.call(ui);
            this._uiCache[uiName] = ui;
          });
          cb();
        }

        startGame(classType) {
          var _arguments = arguments,
              _this = this;

          return _asyncToGenerator(function* () {
            for (var _len7 = _arguments.length, uiData = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
              uiData[_key7 - 1] = _arguments[_key7];
            }

            var clazz = null;

            if (typeof classType == 'string') {
              var bundle = yield (_crd && AssetsManager === void 0 ? (_reportPossibleCrUseOfAssetsManager({
                error: Error()
              }), AssetsManager) : AssetsManager).getBundle(classType);

              if (!bundle) {
                ERROR("Bundle not found: " + classType);
                return;
              }

              clazz = js.getClassByName(classType);
            } else {
              clazz = classType;
            }

            var name = clazz.prototype['SymbolName'];
            var bundleName = clazz.prototype['SymbolBundleName'];
            var path = clazz.prototype['SymbolPath'];
            var viewPath = clazz.prototype['SymbolViewPath'];

            var fun = gameItem => {
              if (!gameItem) return;
              gameItem.node.active = true;
              var PageShow = gameItem.constructor.prototype['TeaUIPageShow'];
              PageShow && PageShow.call(gameItem);
              gameItem.onInit(...uiData);
            };

            var loadView = new Promise((resolve, reject) => {
              (_crd && AssetsManager === void 0 ? (_reportPossibleCrUseOfAssetsManager({
                error: Error()
              }), AssetsManager) : AssetsManager).loadDir(viewPath, bundleName, Prefab, (err, assets) => {
                if (err) {
                  ERROR(err);
                  return;
                }

                assets.forEach(asset => {
                  var node = instantiate(asset);
                  var name = node.name;
                  node.active = false;
                  var ui = node.getComponent(name);
                  var SymbolBundleName = Symbol.for('SymbolBundleName');

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

                  _this.MountCbs[ui.UIType](node);

                  var Mount = ui.constructor.prototype['TeaUIPageMount'];
                  Mount && Mount.call(ui);
                  _this._uiCache[name] = ui;
                });
                resolve(null);
              });
            });
            var loadGame = new Promise((resolve, reject) => {
              if (_this.currGame) {
                var gameNode = _this.currGame.node;
                var currBundleName = _this.currGame['SymbolBundleName'];
                gameNode.destroy();
                _this.currGame = null;
                currBundleName == bundleName || setTimeout(() => {
                  _this.clearUIByBundle(currBundleName);
                }, game.frameTime);
              }

              (_crd && AssetsManager === void 0 ? (_reportPossibleCrUseOfAssetsManager({
                error: Error()
              }), AssetsManager) : AssetsManager).load(path, bundleName, Prefab, (err, assets) => {
                if (err) {
                  ERROR(err);
                  return;
                }

                LOG("loadGame", assets);
                var node = instantiate(assets);
                var gameItem = node.getComponent(_crd && GameItem === void 0 ? (_reportPossibleCrUseOfGameItem({
                  error: Error()
                }), GameItem) : GameItem);

                if (!gameItem) {
                  gameItem = node.addComponent(clazz);
                }

                if (!gameItem) {
                  ERROR("GameItem not found: " + name);
                  return;
                }

                _this.CloseAllUI();

                gameItem.onCreated();

                _this.GameMount(node);

                var Mount = gameItem.constructor.prototype['TeaUIPageMount'];
                Mount && Mount.call(gameItem);
                _this.currGame = gameItem;
                fun(gameItem);
                resolve(null);
              });
            });
            Promise.resolve().then(() => {
              LOG("Promise.resolve ====> loadView");
              return loadView;
            }).then(() => {
              LOG("Promise.resolve ====> loadGame");
              return loadGame;
            }).catch(err => {
              ERROR(err);
            });
          })();
        }

        stopGame(cb) {
          if (!this.currGame) {
            cb && cb();
            return;
          }

          var gameNode = this.currGame.node;
          gameNode.active = false;
          this.currGame['TeaUIPageHide']();
          cb && cb();
        }

        clearUIByBundle(bundleName) {
          var SymbolBundleName = Symbol.for('SymbolBundleName');
          var keys = Object.keys(this._uiCache).filter(key => this._uiCache[key][SymbolBundleName] === bundleName);

          var fun = () => {
            var MAX_DESTROY_NUM = game.frameTime < 16 ? 10 : game.frameTime < 33 ? 8 : 5;
            var processed = 0;

            while (keys.length > 0) {
              var k = keys.shift();

              this._uiCache[k].node.destroy();

              delete this._uiCache[k];
              processed++;

              if (processed >= MAX_DESTROY_NUM) {
                break;
              }
            }

            if (keys.length > 0) {
              requestAnimationFrame(fun.bind(this));
            } else {
              (_crd && AssetsManager === void 0 ? (_reportPossibleCrUseOfAssetsManager({
                error: Error()
              }), AssetsManager) : AssetsManager).releaseAll(bundleName);
            }
          };

          fun();
        }

      }) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b6b5fe1f5e9baae816da9efb009322b57c804e53.js.map