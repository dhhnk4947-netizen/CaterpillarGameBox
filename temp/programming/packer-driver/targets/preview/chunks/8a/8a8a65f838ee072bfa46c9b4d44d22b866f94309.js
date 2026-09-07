System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, easing, Node, Quat, tween, Tween, FullView, onMount, Path, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, HallView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFullView(extras) {
    _reporterNs.report("FullView", "../../scripts/Tea/UI/UIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonMount(extras) {
    _reporterNs.report("onMount", "../../scripts/Tea/UI/UIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPath(extras) {
    _reporterNs.report("Path", "../../scripts/Tea/decorators/tea.decorators", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      easing = _cc.easing;
      Node = _cc.Node;
      Quat = _cc.Quat;
      tween = _cc.tween;
      Tween = _cc.Tween;
    }, function (_unresolved_2) {
      FullView = _unresolved_2.FullView;
      onMount = _unresolved_2.onMount;
    }, function (_unresolved_3) {
      Path = _unresolved_3.Path;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71dfd8mOpJPC4kjIjJTsY3T", "HallView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'easing', 'game', 'Node', 'Quat', 'quat', 'tween', 'Tween', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HallView", HallView = (_dec = ccclass('HallView'), _dec2 = (_crd && Path === void 0 ? (_reportPossibleCrUseOfPath({
        error: Error()
      }), Path) : Path)('titleBase/title'), _dec3 = (_crd && Path === void 0 ? (_reportPossibleCrUseOfPath({
        error: Error()
      }), Path) : Path)('btns/OpenListBtn'), _dec4 = (_crd && Path === void 0 ? (_reportPossibleCrUseOfPath({
        error: Error()
      }), Path) : Path)('btns/QuitBtn'), _dec5 = (_crd && Path === void 0 ? (_reportPossibleCrUseOfPath({
        error: Error()
      }), Path) : Path)('btns/HelpBtn'), _dec6 = (_crd && Path === void 0 ? (_reportPossibleCrUseOfPath({
        error: Error()
      }), Path) : Path)('btns/SettingBtn'), _dec7 = _crd && onMount === void 0 ? (_reportPossibleCrUseOfonMount({
        error: Error()
      }), onMount) : onMount, _dec(_class = (_class2 = class HallView extends (_crd && FullView === void 0 ? (_reportPossibleCrUseOfFullView({
        error: Error()
      }), FullView) : FullView) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "titleNode", _descriptor, this);

          _initializerDefineProperty(this, "openListBtn", _descriptor2, this);

          _initializerDefineProperty(this, "quitBtn", _descriptor3, this);

          _initializerDefineProperty(this, "helpBtn", _descriptor4, this);

          _initializerDefineProperty(this, "settingBtn", _descriptor5, this);
        }

        mount() {
          this.openListBtn.on(Node.EventType.TOUCH_END, this.onClickOpenListBtn.bind(this));
          this.quitBtn.on(Node.EventType.TOUCH_END, this.onClickQuitBtn.bind(this));
          this.helpBtn.on(Node.EventType.TOUCH_END, this.onClickHelpBtn.bind(this));
          this.settingBtn.on(Node.EventType.TOUCH_END, this.onClickSettingBtn.bind(this));
        }

        onShow() {
          this.titleStartAnim();
        }

        onHide() {
          this.titleStopAnim();
        }

        onClickOpenListBtn() {}

        onClickQuitBtn() {}

        onClickSettingBtn() {}

        onClickHelpBtn() {}

        titleStartAnim() {
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
        }

        titleStopAnim() {
          Tween.stopAllByTarget(this.titleNode);
          var rotation = Quat.fromEuler(new Quat(), 0, 0, 0);
          tween(this.titleNode).set({
            rotation: rotation
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleNode", [_dec2], {
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
      }), _applyDecoratedDescriptor(_class2.prototype, "mount", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "mount"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a8a65f838ee072bfa46c9b4d44d22b866f94309.js.map