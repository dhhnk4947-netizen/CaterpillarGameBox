System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, instantiate, Prefab, Node, UITransform, view, game, director, Canvas, js, ResolutionPolicy, AssetsManager, SingletonFactory, Singleton, GameItem, UILRU, _dec, _class2, _crd, TEA_UI_TYPE, UIPage;

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
          let ui = this.head.next;

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
          let view = this._cache[key];

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
          const scene = director.getScene();
          let size = view.getVisibleSize();
          let resolutionSize = view.getDesignResolutionSize();
          const canvas = scene.getComponentInChildren(Canvas).node;

          if (size.height / size.width > 1.5) {
            view.setDesignResolutionSize(resolutionSize.width, resolutionSize.height, ResolutionPolicy.FIXED_WIDTH);
          } else {
            view.setDesignResolutionSize(resolutionSize.width, resolutionSize.height, ResolutionPolicy.FIXED_HEIGHT);
          }

          let oldGameRoot2D = find("GameNode2D");
          oldGameRoot2D && oldGameRoot2D.destroy();
          let oldGameRoot3D = find("GameNode3D");
          oldGameRoot3D && oldGameRoot3D.destroy();
          let gameNode2D = new Node();
          let gameTrans = gameNode2D.addComponent(UITransform);
          gameNode2D.name = "GameNode2D";
          gameNode2D.parent = canvas;
          let gameNode3D = new Node();
          gameNode3D.name = "GameNode3D";
          gameNode3D.parent = scene;
          let oldUIRoot = find("UIRoot", canvas);
          oldUIRoot && oldUIRoot.destroy();
          let uiRoot = new Node();
          let uiTrans = uiRoot.addComponent(UITransform);
          uiRoot.name = "UIRoot";
          uiRoot.parent = canvas;
          let fullNode = new Node();
          fullNode.name = "Full";
          fullNode.parent = uiRoot;
          let residentNode = new Node();
          residentNode.name = "Resident";
          residentNode.parent = uiRoot;
          let popNode = new Node();
          popNode.name = "Pop";
          popNode.parent = uiRoot;
          let tipNode = new Node();
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
            const canvasSize = canvas.getComponent(UITransform).contentSize;
            uiTrans.setContentSize(canvasSize);
            gameTrans.setContentSize(canvasSize);
            canvas.setSiblingIndex(999);
            [fullNode, popNode, tipNode, residentNode].forEach(node => {
              const trans = node.addComponent(UITransform);
              trans.setContentSize(uiTrans.contentSize);
            });
            cb && cb();
          });
        }

        ShowDialog(uiName, ...uiData) {
          let fun = ui => {
            let index = Object.keys(this._uiCache).length + 1;
            ui.node.setSiblingIndex(index);
            ui.node.active = true;
            const PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit(...uiData);
            this.PopLRU.put(uiName, ui);
          };

          this.loadUI(uiName, fun.bind(this));
        }

        ShowTip(uiName, ...uiData) {
          let ui = this._uiCache[uiName];

          if (ui && ui.node.active) {
            ui['queue'].push(() => {
              this.ShowTip(uiName, ...uiData);
            });
            return;
          }

          let fun = ui => {
            if (!ui) return;
            let index = Object.keys(this._uiCache).length + 1;
            ui.node.setSiblingIndex(index);
            ui.node.active = true;
            const PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit(...uiData);
          };

          this.loadUI(uiName, fun.bind(this));
        }

        ShowCommon(uiName, ...uiData) {
          let fun = ui => {
            if (!ui) return;
            ui.node.active = true;
            const PageShow = ui.constructor.prototype['TeaUIPageShow'];
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

          let fun = () => {
            if (this._uiQueue.length == 0) {
              this.isShowing = false;
              return;
            }

            requestAnimationFrame(() => {
              this.isShowing = false;

              this._uiQueue.shift()();
            });
          };

          let ui = this._uiCache[uiName];

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

            let node = instantiate(assets);
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
            const Mount = ui.constructor.prototype['TeaUIPageMount'];
            Mount && Mount.call(ui);
            this._uiCache[uiName] = ui;
            cb(ui);
            fun();
          });
        }

        HideUI(param) {
          let ui;

          if (typeof param === "string") {
            ui = this._uiCache[param];
          } else {
            ui = param;
          }

          if (!ui) return;
          ui.node.active = false;
          const PageHide = ui.constructor.prototype['TeaUIPageHide'];
          PageHide && PageHide.call(ui);
          let len = this._uiTaskList.length;

          if (this._uiTaskList[len - 1].name == param) {
            this._uiTaskList.pop();
          }
        }

        BackUI() {
          if (this._uiTaskList.length <= 1) return;

          let ui = this._uiTaskList.pop();

          ui.node.active = false;
          const PageHide = ui.constructor.prototype['TeaUIPageHide'];
          PageHide && PageHide.call(ui);
          let backUI = this._uiTaskList[this._uiTaskList.length - 1];
          backUI.node.active = true;
          const PageShow = backUI.constructor.prototype['TeaUIPageShow'];
          PageShow && PageShow.call(backUI);
        }
        /**慎用，需要考虑到最大层级 */


        PopView(uiName, ...uiData) {
          if (this._uiTaskList.length >= MaxPage) return;

          if (this._uiTaskList.length > 0 && this._uiTaskList[this._uiTaskList.length - 1].name == uiName && !this._uiTaskList[this._uiTaskList.length - 1].node.active) {
            this._uiTaskList[this._uiTaskList.length - 1].node.active = true;
            const PageShow = this._uiTaskList[this._uiTaskList.length - 1].constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(this._uiTaskList[this._uiTaskList.length - 1]);
            return;
          }

          let fun = ui => {
            if (!ui) return;
            Object.keys(this._uiCache).forEach(key => {
              if (this._uiCache[key].UIType != TEA_UI_TYPE.RESIDENT && ui != this._uiCache[key]) {
                this._uiCache[key].node.active = false;
                const PageHide = this._uiCache[key].constructor.prototype['TeaUIPageHide'];
                PageHide && PageHide.call(this._uiCache[key]);
              }
            });
            ui.node.active = true;
            const PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit(...uiData);

            this._uiTaskList.push(ui);

            this.FullLRU.put(uiName, ui);
          };

          this.loadUI(uiName, fun.bind(this));
        }

        SwitchView(uiName, ...uiData) {
          let fun = ui => {
            if (!ui) return;
            Object.keys(this._uiCache).forEach(key => {
              if (this._uiCache[key].UIType != TEA_UI_TYPE.RESIDENT && ui != this._uiCache[key]) {
                this._uiCache[key].node.active = false;
                const PageHide = this._uiCache[key].constructor.prototype['TeaUIPageHide'];
                PageHide && PageHide.call(this._uiCache[key]);
              }
            });

            if (this._uiTaskList.length > 0) {
              this._uiTaskList.pop();
            }

            ui.node.active = true;
            const PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit(...uiData);

            this._uiTaskList.push(ui);

            this.FullLRU.put(uiName, ui);
          };

          this.loadUI(uiName, fun.bind(this));
        }

        ResetToView(uiName, ...uiData) {
          let fun = ui => {
            if (!ui) return;
            Object.keys(this._uiCache).forEach(key => {
              if (this._uiCache[key].UIType != TEA_UI_TYPE.RESIDENT && ui != this._uiCache[key]) {
                this._uiCache[key].node.active = false;
                const PageHide = this._uiCache[key].constructor.prototype['TeaUIPageHide'];
                PageHide && PageHide.call(this._uiCache[key]);
              }
            });
            this._uiTaskList.length = 0;
            ui.node.active = true;
            const PageShow = ui.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(ui);
            ui.onInit(...uiData);

            this._uiTaskList.push(ui);

            this.FullLRU.put(uiName, ui);
          };

          this.loadUI(uiName, fun.bind(this));
        }

        preLoadUI(uiList, cb = null) {
          if (uiList.length == 0) {
            cb && cb();
            return;
          }

          let len = uiList.length;
          let index = 0;
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
                let node = instantiate(asset);
                node.active = false;
                let ui = node.getComponent(asset.name);

                if (!ui) {
                  const clazz = js.getClassByName(asset.name);
                  ui = node.addComponent(clazz);
                }

                if (!ui) {
                  ERROR("UIView not found");
                  return;
                }

                ui.onCreated();
                this.MountCbs[ui.UIType](node);
                const Mount = ui.constructor.prototype['TeaUIPageMount'];
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
            const PageHide = this._uiCache[key].constructor.prototype['TeaUIPageHide'];
            PageHide && PageHide.call(this._uiCache[key]);
          });
          this.FullLRU.clear();
          this.PopLRU.clear();
        }

        preLoadAllUI(cb = null) {
          (_crd && AssetsManager === void 0 ? (_reportPossibleCrUseOfAssetsManager({
            error: Error()
          }), AssetsManager) : AssetsManager).loadDir(UIPath, MainBundle, (err, assets) => {
            if (err) {
              ERROR("loadDir error:", err);
              return;
            }

            assets.forEach(asset => {
              let uiName = asset.name;

              if (!this._uiCache[uiName]) {
                let node = instantiate(asset);
                node.active = false;
                let ui = node.getComponent(uiName);

                if (!ui) {
                  const clazz = js.getClassByName(asset.name);
                  ui = node.addComponent(clazz);
                }

                if (!ui) {
                  ERROR("UIView not found");
                  return;
                }

                ui.onCreated();
                this.MountCbs[ui.UIType](node);
                const Mount = ui.constructor.prototype['TeaUIPageMount'];
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
          let ui = this._uiCache[view];

          if (ui) {
            !ui.constructor.prototype.SymbolBundleName && (ui.node.destroy(), delete this._uiCache[view]);
            ui.constructor.prototype.SymbolBundleName && ui.node.removeFromParent();
          }
        }

        addUI(prefabs, cb) {
          prefabs.forEach(prefab => {
            let uiName = prefab.name;
            let node = this._uiCache[uiName] ? this._uiCache[uiName].node : instantiate(prefab);
            node.active = false;
            let ui = node.getComponent(uiName);

            if (!ui) {
              ui = node.addComponent(uiName);
            }

            if (!ui) {
              ERROR("UIView not found");
              return;
            }

            this.MountCbs[ui.UIType](node);
            const Mount = ui.constructor.prototype['TeaUIPageMount'];
            Mount && Mount.call(ui);
            this._uiCache[uiName] = ui;
          });
          cb();
        }

        async startGame(classType, ...uiData) {
          let clazz = null;

          if (typeof classType == 'string') {
            const bundle = await (_crd && AssetsManager === void 0 ? (_reportPossibleCrUseOfAssetsManager({
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

          let name = clazz.prototype['SymbolName'];
          let bundleName = clazz.prototype['SymbolBundleName'];
          let path = clazz.prototype['SymbolPath'];
          let viewPath = clazz.prototype['SymbolViewPath'];

          let fun = gameItem => {
            if (!gameItem) return;
            gameItem.node.active = true;
            const PageShow = gameItem.constructor.prototype['TeaUIPageShow'];
            PageShow && PageShow.call(gameItem);
            gameItem.onInit(...uiData);
          };

          let loadView = new Promise((resolve, reject) => {
            (_crd && AssetsManager === void 0 ? (_reportPossibleCrUseOfAssetsManager({
              error: Error()
            }), AssetsManager) : AssetsManager).loadDir(viewPath, bundleName, Prefab, (err, assets) => {
              if (err) {
                ERROR(err);
                return;
              }

              assets.forEach(asset => {
                let node = instantiate(asset);
                let name = node.name;
                node.active = false;
                let ui = node.getComponent(name);
                let SymbolBundleName = Symbol.for('SymbolBundleName');

                if (!ui) {
                  const clazz = js.getClassByName(asset.name);
                  ui = node.addComponent(clazz);
                }

                if (!ui) {
                  ERROR(name + " not found");
                  return;
                }

                ui.constructor.prototype[SymbolBundleName] = bundleName;
                ui.onCreated();
                this.MountCbs[ui.UIType](node);
                const Mount = ui.constructor.prototype['TeaUIPageMount'];
                Mount && Mount.call(ui);
                this._uiCache[name] = ui;
              });
              resolve(null);
            });
          });
          let loadGame = new Promise((resolve, reject) => {
            if (this.currGame) {
              let gameNode = this.currGame.node;
              let currBundleName = this.currGame['SymbolBundleName'];
              gameNode.destroy();
              this.currGame = null;
              currBundleName == bundleName || setTimeout(() => {
                this.clearUIByBundle(currBundleName);
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
              let node = instantiate(assets);
              let gameItem = node.getComponent(_crd && GameItem === void 0 ? (_reportPossibleCrUseOfGameItem({
                error: Error()
              }), GameItem) : GameItem);

              if (!gameItem) {
                gameItem = node.addComponent(clazz);
              }

              if (!gameItem) {
                ERROR("GameItem not found: " + name);
                return;
              }

              this.CloseAllUI();
              gameItem.onCreated();
              this.GameMount(node);
              const Mount = gameItem.constructor.prototype['TeaUIPageMount'];
              Mount && Mount.call(gameItem);
              this.currGame = gameItem;
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
        }

        stopGame(cb) {
          if (!this.currGame) {
            cb && cb();
            return;
          }

          let gameNode = this.currGame.node;
          gameNode.active = false;
          this.currGame['TeaUIPageHide']();
          cb && cb();
        }

        clearUIByBundle(bundleName) {
          let SymbolBundleName = Symbol.for('SymbolBundleName');
          const keys = Object.keys(this._uiCache).filter(key => this._uiCache[key][SymbolBundleName] === bundleName);

          const fun = () => {
            const MAX_DESTROY_NUM = game.frameTime < 16 ? 10 : game.frameTime < 33 ? 8 : 5;
            let processed = 0;

            while (keys.length > 0) {
              const k = keys.shift();

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