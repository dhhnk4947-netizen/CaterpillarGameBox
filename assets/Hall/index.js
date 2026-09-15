System.register("chunks:///_virtual/Hall", ['./HallView.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/HallView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './tea.decorators.ts', './UIView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Tween, tween, size, game, Quat, easing, UITransform, Mask, Path, onMount, FullView;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Tween = module.Tween;
      tween = module.tween;
      size = module.size;
      game = module.game;
      Quat = module.Quat;
      easing = module.easing;
      UITransform = module.UITransform;
      Mask = module.Mask;
    }, function (module) {
      Path = module.Path;
    }, function (module) {
      onMount = module.onMount;
      FullView = module.FullView;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "ba2e4Q3CJNKB6pf5gC5K2Kd", "HallView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var HallView = exports('HallView', (_dec = ccclass('HallView'), _dec2 = Path('titleBase/title'), _dec3 = Path('btns/OpenListBtn'), _dec4 = Path('btns/QuitBtn'), _dec5 = Path('btns/HelpBtn'), _dec6 = Path('btns/SettingBtn'), _dec7 = Path('loading/Mask', UITransform), _dec8 = Path('loading/Mask', Mask), _dec9 = Path('loading'), _dec10 = Path('btns/HelpBtn'), _dec(_class = (_class2 = /*#__PURE__*/function (_FullView) {
        _inheritsLoose(HallView, _FullView);
        function HallView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _FullView.call.apply(_FullView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "titleNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openListBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "quitBtn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "helpBtn", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "settingBtn", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "animNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "animMask", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loading", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = HallView.prototype;
        _proto.mount = function mount() {
          this.openListBtn.on(Node.EventType.TOUCH_END, this.onClickOpenListBtn.bind(this));
          this.quitBtn.on(Node.EventType.TOUCH_END, this.onClickQuitBtn.bind(this));
          this.helpBtn.on(Node.EventType.TOUCH_END, this.onClickHelpBtn.bind(this));
          this.settingBtn.on(Node.EventType.TOUCH_END, this.onClickSettingBtn.bind(this));
        };
        _proto.onShow = function onShow() {
          this.titleStartAnim();
        };
        _proto.onHide = function onHide() {
          this.titleStopAnim();
        };
        _proto.onClickOpenListBtn = function onClickOpenListBtn() {
          var _this2 = this;
          console.log("<-------- onClickOpenListBtn -------->");

          // return;
          this.loading.active = true;
          Tween.stopAllByTarget(this.animNode);
          Tween.stopAllByTarget(this.animMask);
          tween(this.animMask).set({
            segments: 3
          }).to(0.8, {
            segments: 10
          }).start();
          tween(this.animNode).set({
            contentSize: size(2000, 2000)
          }).to(0.8, {
            contentSize: size(0, 0)
          }).delay(1).call(function () {
            Tween.stopAllByTarget(_this2.animNode);
            Tween.stopAllByTarget(_this2.animMask);
            tween(_this2.animMask).set({
              segments: 3
            }).to(1.2, {
              segments: 20
            }).start();
            tween(_this2.animNode).set({
              contentSize: size(0, 0)
            }).to(1.2, {
              contentSize: size(2000, 2400)
            }).call(function () {
              _this2.loading.active = false;
            }).start();
          }).start();
        };
        _proto.onClickQuitBtn = function onClickQuitBtn() {
          game.end();
        };
        _proto.onClickSettingBtn = function onClickSettingBtn() {};
        _proto.onClickHelpBtn = function onClickHelpBtn() {};
        _proto.titleStartAnim = function titleStartAnim() {
          Tween.stopAllByTarget(this.titleNode);
          var rotationStart = Quat.fromEuler(new Quat(), 40, 6, 0);
          var rotationEnd = Quat.fromEuler(new Quat(), 0, 0, 0);
          var t = tween(this.titleNode).to(1.5, {
            rotation: rotationStart
          }, {
            easing: easing.bounceOut
          }).to(2, {
            rotation: rotationEnd
          }, {
            easing: easing.bounceIn
          }).delay(0.5);
          tween(this.titleNode).set({
            rotation: rotationEnd
          }).repeatForever(t).start();
        };
        _proto.titleStopAnim = function titleStopAnim() {
          Tween.stopAllByTarget(this.titleNode);
          var rotation = Quat.fromEuler(new Quat(), 0, 0, 0);
          tween(this.titleNode).set({
            rotation: rotation
          }).start();
        };
        return HallView;
      }(FullView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "openListBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "quitBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "helpBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "settingBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "animNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "animMask", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "mount", [_dec10, onMount], Object.getOwnPropertyDescriptor(_class2.prototype, "mount"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Hall', 'chunks:///_virtual/Hall'); 
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