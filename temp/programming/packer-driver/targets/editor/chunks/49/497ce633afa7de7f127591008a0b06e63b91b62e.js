System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, easing, Node, tween, Tween, v3, onMount, onShow, PopView, Path, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, HelpView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfonMount(extras) {
    _reporterNs.report("onMount", "../../scripts/Tea/UI/UIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonShow(extras) {
    _reporterNs.report("onShow", "../../scripts/Tea/UI/UIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopView(extras) {
    _reporterNs.report("PopView", "../../scripts/Tea/UI/UIView", _context.meta, extras);
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
      tween = _cc.tween;
      Tween = _cc.Tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      onMount = _unresolved_2.onMount;
      onShow = _unresolved_2.onShow;
      PopView = _unresolved_2.PopView;
    }, function (_unresolved_3) {
      Path = _unresolved_3.Path;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ff3bwgMmZK46YXzihCsWpX", "HelpView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'easing', 'game', 'Node', 'tween', 'Tween', 'v2', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HelpView", HelpView = (_dec = ccclass('HelpView'), _dec2 = (_crd && Path === void 0 ? (_reportPossibleCrUseOfPath({
        error: Error()
      }), Path) : Path)('popBase'), _dec3 = (_crd && Path === void 0 ? (_reportPossibleCrUseOfPath({
        error: Error()
      }), Path) : Path)('popBase/closeBtn'), _dec4 = _crd && onMount === void 0 ? (_reportPossibleCrUseOfonMount({
        error: Error()
      }), onMount) : onMount, _dec5 = _crd && onShow === void 0 ? (_reportPossibleCrUseOfonShow({
        error: Error()
      }), onShow) : onShow, _dec(_class = (_class2 = class HelpView extends (_crd && PopView === void 0 ? (_reportPossibleCrUseOfPopView({
        error: Error()
      }), PopView) : PopView) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "popBase", _descriptor, this);

          _initializerDefineProperty(this, "closeBtn", _descriptor2, this);
        }

        mount() {
          this.closeBtn.on(Node.EventType.TOUCH_END, this.onClickCloseBtn.bind(this));
        }

        showPopAnim() {
          Tween.stopAllByTarget(this.popBase);
          tween(this.popBase).set({
            scale: v3(0, 0, 0)
          }).to(0.4, {
            scale: v3(1, 1, 1)
          }, {
            easing: easing.backOut
          }).start();
        }

        hidePopAnim() {
          Tween.stopAllByTarget(this.popBase);
          tween(this.popBase).set({
            scale: v3(1, 1, 1)
          }).to(0.4, {
            scale: v3(0, 0, 0)
          }, {
            easing: easing.backIn
          }).delay(0.2).call(() => {
            this.hide();
          }).start();
        }

        onClickCloseBtn() {
          this.hidePopAnim();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popBase", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "mount", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "mount"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "showPopAnim", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "showPopAnim"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=497ce633afa7de7f127591008a0b06e63b91b62e.js.map